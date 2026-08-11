import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import "./pillow-comparison.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustpilotreview.shop"),
  title: "Trustpilot Review Shop | Practical UK Buyer Guides",
  description:
    "Practical UK buyer guides with clear criteria, transparent disclosures and useful questions to consider before making a purchase.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/favicon.svg" }],
    shortcut: ["/favicon.svg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4e6"
};

const microsoftConsentDefault = `
  (function () {
    var state = "granted";
    window.__tprMicrosoftAdsConsent = state;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "microsoft_ads_consent_default",
      ad_storage: state
    });
    window.dataLayer.push({ event: "microsoft_ads_consent_update", ad_storage: "granted" });
  })();
`;

const googleTagManager = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TQ3HRZMJ');
`;

const outboundConversionConfig = `
  window.__tprBuudyOutboundConversion = {
    value: 660,
    currency: 'INR',
    events: ['buudy_outbound_click', 'affiliate_click']
  };
`;

const tawkFrontendHideCss = `
  iframe[src*="tawk.to"],
  iframe[title="chat widget"],
  iframe[title="chat widget button"],
  iframe[title="chat message"] {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
`;

const tawkToScript = `
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  function hideTawkFrontend() {
    try {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    } catch (error) {}

    document.querySelectorAll("iframe").forEach(function (frame) {
      var src = frame.getAttribute("src") || "";
      var title = (frame.getAttribute("title") || "").toLowerCase();
      var id = (frame.getAttribute("id") || "").toLowerCase();
      var name = (frame.getAttribute("name") || "").toLowerCase();
      var isTawkFrame =
        src.indexOf("tawk.to") !== -1 ||
        id.indexOf("tawk") !== -1 ||
        name.indexOf("tawk") !== -1 ||
        title === "chat widget" ||
        title === "chat widget button" ||
        title === "chat message";

      if (isTawkFrame) {
        frame.style.setProperty("display", "none", "important");
        frame.style.setProperty("visibility", "hidden", "important");
        frame.style.setProperty("pointer-events", "none", "important");
      }
    });
  }

  window.Tawk_API.onLoad = function () {
    hideTawkFrontend();
    window.setTimeout(hideTawkFrontend, 300);
    window.setTimeout(hideTawkFrontend, 1000);
  };

  (function () {
    var observer = new MutationObserver(hideTawkFrontend);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/699e744b8a14f51c38e4fa86/1ji9fci26';
    s1.charset = 'UTF-8';
    s0.parentNode.insertBefore(s1, s0);
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Script
          id="microsoft-ads-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: microsoftConsentDefault }}
        />
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagManager }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ3HRZMJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script src="/assets/microsoft-consent-mode.js" strategy="afterInteractive" />
        <Script src="/assets/buudy-outbound-failsafe-buudycouk-660.js" strategy="afterInteractive" />
        <Script
          id="tpr-buudy-outbound-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: outboundConversionConfig }}
        />
        <style id="tawk-frontend-hide" dangerouslySetInnerHTML={{ __html: tawkFrontendHideCss }} />
        <Script id="tawk-to-widget" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: tawkToScript }} />
      </body>
    </html>
  );
}
