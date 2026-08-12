"use client";

import type { MouseEvent, ReactNode } from "react";
import { juujoProductUrl } from "@/data/pillows";

const attributionKeys = [
  "msclkid",
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function attributedUrl() {
  const destination = new URL(juujoProductUrl);
  const source = new URLSearchParams(window.location.search);

  attributionKeys.forEach((key) => {
    const value = source.get(key);
    if (value) destination.searchParams.set(key, value);
  });

  destination.searchParams.set("ref", "trustpilotreview");
  return destination.toString();
}

export function PillowOutboundLink({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  function dispatch(event: MouseEvent<HTMLAnchorElement>) {
    const href = attributedUrl();
    event.currentTarget.href = href;

    const payload = {
      event_category: "outbound",
      outbound_url: href,
      product: "Juujo CloudAlign Pillow",
      source_page: window.location.pathname,
    };

    const trackerWindow = window as typeof window & {
      dataLayer?: Array<Record<string, unknown>>;
      uetq?: unknown[];
    };

    trackerWindow.dataLayer = trackerWindow.dataLayer || [];
    trackerWindow.dataLayer.push({ event: "juujo_outbound_click", ...payload });
    trackerWindow.dataLayer.push({ event: "affiliate_click", ...payload });
    trackerWindow.uetq = trackerWindow.uetq || [];
    trackerWindow.uetq.push("event", "juujo_outbound_click", {
      event_category: "outbound",
      event_label: "Juujo CloudAlign Pillow",
      outbound_url: href,
      source_page: window.location.pathname,
    });
  }

  return (
    <a
      href={juujoProductUrl}
      className={className}
      data-juujo-outbound="true"
      onClick={dispatch}
    >
      {children}
    </a>
  );
}
