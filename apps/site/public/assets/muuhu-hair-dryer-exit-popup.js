(function () {
  var ELIGIBLE_PATHS = [
    "/best-hair-dryer-uk-2026",
    "/best-hair-dryer-curly-hair-uk-2026",
    "/best-hair-dryer-fine-hair-uk-2026",
    "/best-hair-dryer-thick-hair-uk-2026",
    "/best-hair-dryer-frizzy-hair-uk-2026",
    "/best-hair-dryer-straight-hair-uk-2026",
    "/best-hair-dryer-damaged-hair-uk-2026",
    "/best-dyson-airwrap-alternative-uk-2026",
    "/best-shark-flexstyle-alternative-uk-2026",
    "/muuhu-vs-dyson-airwrap-uk",
    "/muuhu-vs-shark-flexstyle-uk",
    "/muuhu-vs-ghd-helios-uk",
    "/dyson-vs-shark-vs-muuhu-uk"
  ];

  var STORAGE_KEY = "muuhu_hair_dryer_exit_popup_seen_v1";
  var SHOW_DELAY_MS = 7000;
  var MOBILE_DELAY_MS = 14000;
  var CTA_URL = "https://uk.muuhu.com/products/muuhu-hair-dryer?utm_source=trustpilotreview.shop&utm_medium=exit_popup&utm_campaign=hair_dryer_exit&utm_content=last_chance";

  function isEligiblePath(pathname) {
    return ELIGIBLE_PATHS.some(function (eligiblePath) {
      return pathname === eligiblePath || pathname.indexOf(eligiblePath + "/") === 0;
    });
  }

  function storageGet(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures in private browsing modes.
    }
  }

  if (!isEligiblePath(window.location.pathname) || storageGet(STORAGE_KEY) === "1") {
    return;
  }

  var armed = false;
  var shown = false;
  var lastScrollY = window.scrollY || 0;

  function track(eventName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      source: "muuhu_hair_dryer_exit_popup",
      target_url: CTA_URL
    });
  }

  function closePopup() {
    var overlay = document.querySelector("[data-muuhu-exit-overlay]");
    if (overlay) {
      overlay.remove();
    }
    document.documentElement.classList.remove("muuhu-exit-lock");
    storageSet(STORAGE_KEY, "1");
  }

  function buildPopup() {
    var overlay = document.createElement("div");
    overlay.setAttribute("data-muuhu-exit-overlay", "true");
    overlay.className = "muuhu-exit-overlay";
    overlay.innerHTML = [
      "<style>",
      ".muuhu-exit-lock{overflow:hidden!important}",
      ".muuhu-exit-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(10,8,7,.62);backdrop-filter:blur(10px);font-family:Georgia,'Times New Roman',serif;color:#18110d}",
      ".muuhu-exit-card{position:relative;width:min(94vw,520px);overflow:hidden;border-radius:30px;background:linear-gradient(145deg,#fffaf4,#f3e1d2 54%,#fff);box-shadow:0 30px 90px rgba(0,0,0,.32);border:1px solid rgba(92,54,35,.18)}",
      ".muuhu-exit-card:before{content:'';position:absolute;inset:-40% -25% auto auto;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.24),rgba(16,185,129,0) 68%)}",
      ".muuhu-exit-content{position:relative;z-index:1;padding:30px 30px 28px}",
      ".muuhu-exit-kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:14px;padding:7px 11px;border-radius:999px;background:rgba(16,185,129,.12);font:700 11px/1.1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#047857}",
      ".muuhu-exit-title{margin:0 0 12px;font-size:clamp(30px,5vw,46px);line-height:.95;letter-spacing:-.045em;color:#120d0a}",
      ".muuhu-exit-copy{margin:0 0 20px;font:400 16px/1.55 Arial,sans-serif;color:#45352d}",
      ".muuhu-exit-offer{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin:0 0 20px;padding:14px;border-radius:20px;background:#18110d;color:#fff}",
      ".muuhu-exit-offer strong{display:block;font:800 22px/1 Arial,sans-serif;color:#fff}",
      ".muuhu-exit-offer span{font:600 12px/1.3 Arial,sans-serif;color:rgba(255,255,255,.72);text-transform:uppercase;letter-spacing:.08em}",
      ".muuhu-exit-actions{display:flex;gap:10px;flex-wrap:wrap}",
      ".muuhu-exit-cta,.muuhu-exit-secondary{appearance:none;border:0;border-radius:999px;cursor:pointer;text-decoration:none;text-align:center;font:800 13px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}",
      ".muuhu-exit-cta{flex:1 1 230px;padding:16px 20px;background:#10b981;color:#fff;box-shadow:0 14px 28px rgba(16,185,129,.28)}",
      ".muuhu-exit-secondary{flex:1 1 150px;padding:16px 18px;background:rgba(255,255,255,.62);color:#39251b;border:1px solid rgba(64,38,24,.14)}",
      ".muuhu-exit-close{position:absolute;z-index:3;top:14px;right:14px;width:36px;height:36px;border:0;border-radius:999px;background:rgba(255,255,255,.72);color:#2c1d15;font:22px/1 Arial,sans-serif;cursor:pointer}",
      "@media(max-width:520px){.muuhu-exit-overlay{align-items:flex-end;padding:10px}.muuhu-exit-card{border-radius:26px}.muuhu-exit-content{padding:28px 22px 22px}.muuhu-exit-title{font-size:34px}}",
      "</style>",
      "<section class='muuhu-exit-card' role='dialog' aria-modal='true' aria-labelledby='muuhu-exit-title'>",
      "<button class='muuhu-exit-close' type='button' aria-label='Close' data-muuhu-exit-close='true'>&times;</button>",
      "<div class='muuhu-exit-content'>",
      "<div class='muuhu-exit-kicker'>Before you go</div>",
      "<h2 class='muuhu-exit-title' id='muuhu-exit-title'>The #1 hair dryer pick is still 50% off.</h2>",
      "<p class='muuhu-exit-copy'>If you were comparing hair dryers, do not leave without checking the Muuhu 7-in-1 High-Speed Hair Dryer & Styler. Its 1,400W motor, 3 temperature settings and 3 speed settings cover fast drying, smoothing, diffuser drying, volume and curl finishing in one kit.</p>",
      "<div class='muuhu-exit-offer'><div><span>Today on Muuhu</span><strong>£149 instead of £299</strong></div><span>Last check</span></div>",
      "<div class='muuhu-exit-actions'>",
      "<a class='muuhu-exit-cta' href='" + CTA_URL + "' data-outbound-button='true'>Claim 50% Off</a>",
      "<button class='muuhu-exit-secondary' type='button' data-muuhu-exit-close='true'>Keep Reading</button>",
      "</div>",
      "</div>",
      "</section>"
    ].join("");

    function shouldClose(event) {
      return event.target === overlay || (event.target.closest && event.target.closest("[data-muuhu-exit-close], .muuhu-exit-secondary, .muuhu-exit-close"));
    }

    function onCloseIntent(event) {
      if (shouldClose(event)) {
        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        closePopup();
      }
    }

    ["pointerdown", "touchstart", "click"].forEach(function (eventName) {
      overlay.addEventListener(eventName, onCloseIntent, true);
    });

    overlay.querySelector(".muuhu-exit-cta").addEventListener("click", function () {
      track("muuhu_hair_dryer_exit_popup_cta_click");
      storageSet(STORAGE_KEY, "1");
    });

    return overlay;
  }

  function showPopup(reason) {
    if (!armed || shown || storageGet(STORAGE_KEY) === "1") {
      return;
    }

    shown = true;
    document.documentElement.classList.add("muuhu-exit-lock");
    document.body.appendChild(buildPopup());
    track("muuhu_hair_dryer_exit_popup_view");
    window.dataLayer.push({ event: "muuhu_hair_dryer_exit_popup_reason", reason: reason });
  }

  function onMouseOut(event) {
    if (event.clientY <= 8 && !event.relatedTarget) {
      showPopup("desktop_top_exit");
    }
  }

  function onPointerLeave(event) {
    if (event.clientY <= 8) {
      showPopup("desktop_top_exit");
    }
  }

  function onScroll() {
    var currentY = window.scrollY || 0;
    var doc = document.documentElement;
    var maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    var progress = currentY / maxScroll;
    var scrollingUp = currentY < lastScrollY - 80;

    if (progress > 0.42 && scrollingUp) {
      showPopup("mobile_scroll_up_exit");
    }

    lastScrollY = currentY;
  }

  function onKeydown(event) {
    if (event.key === "Escape" && shown) {
      closePopup();
    }
  }

  window.setTimeout(function () {
    armed = true;
  }, SHOW_DELAY_MS);

  document.addEventListener("mouseout", onMouseOut);
  document.documentElement.addEventListener("mouseleave", onPointerLeave);
  document.documentElement.addEventListener("pointerleave", onPointerLeave);
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", onScroll, { passive: true });

  window.__muuhuHairDryerExitPopup = {
    show: function (reason) {
      armed = true;
      showPopup(reason || "manual_test");
    },
    close: closePopup
  };

  window.setTimeout(function () {
    if (window.innerWidth <= 768 && window.scrollY > 500) {
      showPopup("mobile_time_on_page");
    }
  }, MOBILE_DELAY_MS);
})();
