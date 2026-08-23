(function () {
  var ELIGIBLE_PATHS = [
    "/best-electric-toothbrush-uk-2026"
  ];

  var STORAGE_KEY = "miroooo_x_exit_popup_seen_v1";
  var SHOW_DELAY_MS = 7000;
  var MOBILE_DELAY_MS = 14000;
  var CTA_URL = "https://www.trymiroooo.com/products/miroooo-x?utm_source=trustpilotreview.shop&utm_medium=exit_popup&utm_campaign=toothbrush_exit&utm_content=last_chance";

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

  var offerPriceText = "£59 instead of £119";

  var armed = false;
  var shown = false;
  var lastScrollY = window.scrollY || 0;

  function track(eventName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      source: "miroooo_x_exit_popup",
      target_url: CTA_URL
    });
  }

  function closePopup() {
    var overlay = document.querySelector("[data-miroooo-exit-overlay]");
    if (overlay) {
      overlay.remove();
    }
    document.documentElement.classList.remove("miroooo-exit-lock");
    storageSet(STORAGE_KEY, "1");
  }

  function buildPopup() {
    var overlay = document.createElement("div");
    overlay.setAttribute("data-miroooo-exit-overlay", "true");
    overlay.className = "miroooo-exit-overlay";
    overlay.innerHTML = [
      "<style>",
      ".miroooo-exit-lock{overflow:hidden!important}",
      ".miroooo-exit-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(10,8,7,.62);backdrop-filter:blur(10px);font-family:Georgia,'Times New Roman',serif;color:#18110d}",
      ".miroooo-exit-card{position:relative;width:min(94vw,520px);overflow:hidden;border-radius:30px;background:linear-gradient(145deg,#fffaf4,#f3e1d2 54%,#fff);box-shadow:0 30px 90px rgba(0,0,0,.32);border:1px solid rgba(92,54,35,.18)}",
      ".miroooo-exit-card:before{content:'';position:absolute;inset:-40% -25% auto auto;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.24),rgba(16,185,129,0) 68%)}",
      ".miroooo-exit-content{position:relative;z-index:1;padding:30px 30px 28px}",
      ".miroooo-exit-kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:14px;padding:7px 11px;border-radius:999px;background:rgba(16,185,129,.12);font:700 11px/1.1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#047857}",
      ".miroooo-exit-title{margin:0 0 12px;font-size:clamp(30px,5vw,46px);line-height:.95;letter-spacing:-.045em;color:#120d0a}",
      ".miroooo-exit-copy{margin:0 0 20px;font:400 16px/1.55 Arial,sans-serif;color:#45352d}",
      ".miroooo-exit-offer{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin:0 0 20px;padding:14px;border-radius:20px;background:#18110d;color:#fff}",
      ".miroooo-exit-offer strong{display:block;font:800 22px/1 Arial,sans-serif;color:#fff}",
      ".miroooo-exit-offer span{font:600 12px/1.3 Arial,sans-serif;color:rgba(255,255,255,.72);text-transform:uppercase;letter-spacing:.08em}",
      ".miroooo-exit-actions{display:flex;gap:10px;flex-wrap:wrap}",
      ".miroooo-exit-cta,.miroooo-exit-secondary{appearance:none;border:0;border-radius:999px;cursor:pointer;text-decoration:none;text-align:center;font:800 13px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}",
      ".miroooo-exit-cta{flex:1 1 230px;padding:16px 20px;background:#10b981;color:#fff;box-shadow:0 14px 28px rgba(16,185,129,.28)}",
      ".miroooo-exit-secondary{flex:1 1 150px;padding:16px 18px;background:rgba(255,255,255,.62);color:#39251b;border:1px solid rgba(64,38,24,.14)}",
      ".miroooo-exit-close{position:absolute;z-index:3;top:14px;right:14px;width:36px;height:36px;border:0;border-radius:999px;background:rgba(255,255,255,.72);color:#2c1d15;font:22px/1 Arial,sans-serif;cursor:pointer}",
      "@media(max-width:520px){.miroooo-exit-overlay{align-items:flex-end;padding:10px}.miroooo-exit-card{border-radius:26px}.miroooo-exit-content{padding:28px 22px 22px}.miroooo-exit-title{font-size:34px}}",
      "</style>",
      "<section class='miroooo-exit-card' role='dialog' aria-modal='true' aria-labelledby='miroooo-exit-title'>",
      "<button class='miroooo-exit-close' type='button' aria-label='Close' data-miroooo-exit-close='true'>&times;</button>",
      "<div class='miroooo-exit-content'>",
      "<div class='miroooo-exit-kicker'>Before you go</div>",
      "<h2 class='miroooo-exit-title' id='miroooo-exit-title'>The #1 electric toothbrush pick is still 50% off.</h2>",
      "<p class='miroooo-exit-copy'>If you were comparing electric toothbrushes, do not leave without checking the Miroooo X. Weighing only 51g with whisper-quiet operation (&lt;50dB), 60+ days of battery life via its magnetic USB-C dock, and an aerospace aluminium unibody, it delivers a dentist-clean feel every day.</p>",
      "<div class='miroooo-exit-offer'><div><span>Today on Miroooo</span><strong>" + offerPriceText + "</strong></div><span>50% OFF</span></div>",
      "<div class='miroooo-exit-actions'>",
      "<a class='miroooo-exit-cta' href='" + CTA_URL + "' data-outbound-button='true'>Claim 50% Off</a>",
      "<button class='miroooo-exit-secondary' type='button' data-miroooo-exit-close='true'>Keep Reading</button>",
      "</div>",
      "</div>",
      "</section>"
    ].join("");

    function shouldClose(event) {
      return event.target === overlay || (event.target.closest && event.target.closest("[data-miroooo-exit-close], .miroooo-exit-secondary, .miroooo-exit-close"));
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

    overlay.querySelector(".miroooo-exit-cta").addEventListener("click", function () {
      track("miroooo_x_exit_popup_cta_click");
      storageSet(STORAGE_KEY, "1");
    });

    return overlay;
  }

  function showPopup(reason) {
    if (!armed || shown || storageGet(STORAGE_KEY) === "1") {
      return;
    }

    shown = true;
    document.documentElement.classList.add("miroooo-exit-lock");
    document.body.appendChild(buildPopup());
    track("miroooo_x_exit_popup_view");
    window.dataLayer.push({ event: "miroooo_x_exit_popup_reason", reason: reason });
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

  window.__mirooooExitPopup = {
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
