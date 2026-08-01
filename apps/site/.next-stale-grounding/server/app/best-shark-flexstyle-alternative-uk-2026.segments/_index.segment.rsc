1:"$Sreact.fragment"
2:I[50847,["/_next/static/chunks/1e0nk_589trkk.js","/_next/static/chunks/2rg0bhj6vdvry.js"],""]
4:I[86197,["/_next/static/chunks/1e0nk_589trkk.js","/_next/static/chunks/2rg0bhj6vdvry.js"],"default"]
5:I[91240,["/_next/static/chunks/1e0nk_589trkk.js","/_next/static/chunks/2rg0bhj6vdvry.js"],"default"]
:HL["/_next/static/chunks/1w17d0bzgnu1c.css","style"]
3:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-TQ3HRZMJ","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
6:T696,
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
0:{"rsc":["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/1w17d0bzgnu1c.css","precedence":"next"}],["$","script","script-0",{"src":"/_next/static/chunks/1e0nk_589trkk.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/2rg0bhj6vdvry.js","async":true}]],["$","html",null,{"lang":"en-GB","children":["$","body",null,{"children":[["$","$L2",null,{"id":"microsoft-ads-consent-default","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"\n  (function () {\n    var state = \"granted\";\n    window.__tprMicrosoftAdsConsent = state;\n    window.dataLayer = window.dataLayer || [];\n    window.dataLayer.push({\n      event: \"microsoft_ads_consent_default\",\n      ad_storage: state\n    });\n    window.dataLayer.push({ event: \"microsoft_ads_consent_update\", ad_storage: \"granted\" });\n  })();\n"}}],["$","$L2",null,{"id":"google-tag-manager","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"\n  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','GTM-TQ3HRZMJ');\n"}}],["$","noscript",null,{"children":"$3"}],["$","$L4",null,{"parallelRouterKey":"children","template":["$","$L5",null,{}],"notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]]}],["$","$L2",null,{"src":"/assets/microsoft-consent-mode.js","strategy":"afterInteractive"}],["$","$L2",null,{"src":"/assets/buudy-outbound-failsafe-buudycouk-660.js","strategy":"afterInteractive"}],["$","$L2",null,{"id":"tpr-buudy-outbound-conversion","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n  window.__tprBuudyOutboundConversion = {\n    value: 660,\n    currency: 'INR',\n    events: ['buudy_outbound_click', 'affiliate_click']\n  };\n"}}],["$","style",null,{"id":"tawk-frontend-hide","dangerouslySetInnerHTML":{"__html":"\n  iframe[src*=\"tawk.to\"],\n  iframe[title=\"chat widget\"],\n  iframe[title=\"chat widget button\"],\n  iframe[title=\"chat message\"] {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n"}}],["$","$L2",null,{"id":"tawk-to-widget","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"$6"}}]]}]}]]}],"isPartial":false,"staleTime":300,"varyParams":null,"buildId":"NMz8Q6fDTOYIC6lfo-Bdg"}
