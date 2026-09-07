import { createHash, timingSafeEqual } from "node:crypto";

import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const CONVERSION_NAME = "Miroooo UK - Purchase";
const FEED_SECRET_SHA256 =
  "8fc587ed07041004b9f39d67ceaaf367d9ce9103b330824cc6301d5ca8f2fe09";
const LOOKBACK_DAYS = 30;
const INCLUDED_FINANCIAL_STATUSES = new Set(["authorized", "paid"]);
const MIROOOO_PRODUCT_IDS = new Set([
  "1000000675113473",
  "1000000675072187",
  "1000000664011618",
  "1000000675471182",
  "1000000675616058",
]);
const RECOVERED_MSCLKID_BY_ORDER_ID = new Map<string, string>([
  ["465035601", "eb3af506e0d212fa48d09f9b2d6ac23d"],
  ["465047631", "f2853d516d2711044a2157cf882a8899"],
]);

type PlusbaseProperty = {
  name?: string | null;
  value?: string | null;
};

type PlusbaseLineItem = {
  product_id?: number | string | null;
  sku?: string | null;
  properties?: PlusbaseProperty[] | null;
};

type PlusbaseOrder = {
  id?: number | string | null;
  created_at?: string | null;
  processed_at?: string | null;
  financial_status?: string | null;
  cancelled_at?: string | null;
  total_price?: number | string | null;
  currency?: string | null;
  landing_site?: string | null;
  referring_site?: string | null;
  note_attributes?: PlusbaseProperty[] | null;
  line_items?: PlusbaseLineItem[] | null;
};

type ShopbaseOrdersResponse = {
  orders?: PlusbaseOrder[];
  data?: PlusbaseOrder[];
};

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing ${name}.`);
  return value;
}

function secretsMatch(provided: string | null) {
  if (!provided) return false;
  const providedBytes = createHash("sha256").update(provided).digest();
  const configuredBytes = Buffer.from(FEED_SECRET_SHA256, "hex");
  return (
    providedBytes.length === configuredBytes.length &&
    timingSafeEqual(providedBytes, configuredBytes)
  );
}

function extractMsclkidFromUrl(value: string | null | undefined) {
  if (!value) return null;
  try {
    return new URL(value, "https://attribution.invalid").searchParams.get(
      "msclkid",
    );
  } catch {
    const match = value.match(/(?:^|[?&])msclkid=([^&#]+)/i);
    return match ? decodeURIComponent(match[1]) : null;
  }
}

function normalizeMsclkid(value: string | null | undefined) {
  const normalized = value?.trim().toLowerCase() ?? "";
  return /^[a-f0-9]{32}$/.test(normalized) ? normalized : null;
}

function extractMsclkid(order: PlusbaseOrder) {
  for (const item of order.line_items ?? []) {
    for (const property of item.properties ?? []) {
      if (["_blfm_msclkid", "msclkid"].includes(property.name?.trim() ?? "")) {
        const clickId = normalizeMsclkid(property.value);
        if (clickId) return clickId;
      }
    }
  }

  for (const attribute of order.note_attributes ?? []) {
    if (["_blfm_msclkid", "msclkid"].includes(attribute.name?.trim() ?? "")) {
      const clickId = normalizeMsclkid(attribute.value);
      if (clickId) return clickId;
    }
  }

  const urlClickId =
    normalizeMsclkid(extractMsclkidFromUrl(order.landing_site)) ??
    normalizeMsclkid(extractMsclkidFromUrl(order.referring_site));
  if (urlClickId) return urlClickId;

  // Exact owner-supplied recovery for orders created before the durable
  // product-to-cart attribution handoff was deployed.
  return (
    RECOVERED_MSCLKID_BY_ORDER_ID.get(String(order.id ?? "")) ?? null
  );
}

function isMirooooOrder(order: PlusbaseOrder) {
  return (order.line_items ?? []).some((item) => {
    const productId = String(item.product_id ?? "").trim();
    const sku = item.sku?.trim().toUpperCase() ?? "";
    return MIROOOO_PRODUCT_IDS.has(productId) || sku.startsWith("MIROOOO-");
  });
}

function formatMicrosoftTimeUtc(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const pad = (part: number) => String(part).padStart(2, "0");
  let hours = date.getUTCHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()} ${hours}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} ${meridiem}`;
}

function csvCell(value: string) {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

async function fetchRecentOrders() {
  const storeUrl = (
    process.env.MUUHU_SHOPBASE_STORE_URL || "https://muuhu.onshopbase.com"
  ).replace(/\/+$/, "");
  const apiKey = getRequiredEnv("MUUHU_SHOPBASE_API_KEY");
  const password = getRequiredEnv("MUUHU_SHOPBASE_PASSWORD");
  const url = new URL("/admin/orders.json", storeUrl);

  url.searchParams.set("status", "any");
  url.searchParams.set("limit", "250");
  url.searchParams.set(
    "created_at_min",
    new Date(Date.now() - LOOKBACK_DAYS * 24 * 60 * 60 * 1000).toISOString(),
  );
  url.searchParams.set(
    "fields",
    [
      "id",
      "created_at",
      "processed_at",
      "financial_status",
      "cancelled_at",
      "total_price",
      "currency",
      "line_items",
      "note_attributes",
      "landing_site",
      "referring_site",
    ].join(","),
  );

  const authorization = Buffer.from(`${apiKey}:${password}`).toString("base64");
  const response = await fetch(url, {
    headers: { Accept: "application/json", Authorization: `Basic ${authorization}` },
    cache: "no-store",
  });
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`Miroooo ShopBase order request failed (${response.status}).`);
  }

  let body: ShopbaseOrdersResponse;
  try {
    body = raw ? (JSON.parse(raw) as ShopbaseOrdersResponse) : {};
  } catch {
    throw new Error("Miroooo ShopBase returned invalid JSON.");
  }
  return body.orders ?? body.data ?? [];
}

function buildConversionRows(orders: PlusbaseOrder[]) {
  const seen = new Set<string>();
  const rows: string[] = [];

  for (const order of orders) {
    const financialStatus = order.financial_status?.toLowerCase() ?? "";
    if (
      !isMirooooOrder(order) ||
      !INCLUDED_FINANCIAL_STATUSES.has(financialStatus) ||
      order.cancelled_at
    ) {
      continue;
    }

    const clickId = extractMsclkid(order);
    const timestamp = order.processed_at || order.created_at;
    const conversionTime = timestamp ? formatMicrosoftTimeUtc(timestamp) : null;
    const rawValue = Number(order.total_price);

    if (!clickId || !conversionTime || !Number.isFinite(rawValue) || rawValue < 0) {
      continue;
    }

    const dedupeKey = `${clickId}|${CONVERSION_NAME}|${conversionTime}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    rows.push(
      [
        clickId,
        CONVERSION_NAME,
        conversionTime,
        rawValue.toFixed(2),
        (order.currency || "USD").toUpperCase(),
      ]
        .map(csvCell)
        .join(","),
    );
  }

  return rows;
}

export async function GET(request: NextRequest) {
  if (!secretsMatch(request.nextUrl.searchParams.get("secret"))) {
    return new Response("Unauthorized request.", { status: 401 });
  }

  try {
    const rows = buildConversionRows(await fetchRecentOrders());
    const csv = [
      "Parameters:TimeZone=+0000",
      "Microsoft Click Id,Conversion Name,Conversion Time,Conversion Value,Conversion Currency",
      ...rows,
    ].join("\r\n");

    return new Response(`${csv}\r\n`, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition":
          'attachment; filename="miroooo-microsoft-offline-conversions.csv"',
        "Content-Type": "text/csv; charset=utf-8",
        "X-Conversion-Count": String(rows.length),
      },
    });
  } catch (error) {
    console.error(
      "Miroooo Microsoft Ads offline conversion feed failed",
      error instanceof Error ? error.message : error,
    );
    return new Response("Could not generate the offline conversion feed.", {
      status: 502,
    });
  }
}
