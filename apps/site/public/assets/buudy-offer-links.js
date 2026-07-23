(function () {
  var path = window.location.pathname;
  var installmentTargets = [
    {
      matcher: /\/(?:pages|products)\/buudy-led-mask(?:\/|$)/,
      amount: "£44.75"
    },
    {
      matcher: /\/(?:pages|products)\/buudy-red-torch(?:\/|$)/,
      amount: "£17.50"
    },
    {
      matcher: /\/(?:pages|products)\/buudy-led-face-wand(?:\/|$)/,
      amount: "£37.25"
    }
  ];

  var pageMap = {
    "Premium Travel Box": "/pages/buudy-premium-travel-box",
    "Buudy LED Torch": "/pages/buudy-led-torch-bonus",
    "Skincare E-Book": "/pages/buudy-skincare-guide-bonus"
  };

  function linkCard(card) {
    if (!card || card.dataset.buudyGiftLinked === "true") {
      return;
    }

    var titleEl = card.querySelector(".sb-promo-ext-title");
    var title = titleEl ? titleEl.textContent.trim() : "";
    var href = pageMap[title];

    if (!href) {
      return;
    }

    card.dataset.buudyGiftLinked = "true";
    card.style.cursor = "pointer";
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", title + " details page");

    var navigate = function () {
      window.location.href = href;
    };

    card.addEventListener("click", function (event) {
      if (event.target.closest("a, button")) {
        return;
      }
      navigate();
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        navigate();
      }
    });
  }

  function init() {
    if (path === "/pages/buudy-led-mask") {
      var cards = document.querySelectorAll(".sb-promo-ext-wrapper .sb-promo-ext-card");
      cards.forEach(linkCard);
    }

    fixInstallmentCopy();
  }

  function fixInstallmentCopy() {
    var target = installmentTargets.find(function (item) {
      return item.matcher.test(path);
    });

    if (!target) {
      return;
    }

    var paragraphs = document.querySelectorAll("p");
    var amountPattern = /(£|Â£)\s*\d+(?:\.\d{2})?/g;

    paragraphs.forEach(function (paragraph) {
      if (!paragraph.textContent || paragraph.textContent.indexOf("4 interest-free payments of") === -1) {
        return;
      }

      paragraph.querySelectorAll("span, strong").forEach(function (node) {
        if (node.textContent && /^(£|Â£)\s*\d+(?:\.\d{2})?$/.test(node.textContent.trim())) {
          node.textContent = target.amount;
        }
      });

      if (amountPattern.test(paragraph.innerHTML)) {
        paragraph.innerHTML = paragraph.innerHTML.replace(amountPattern, target.amount);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  var observer = new MutationObserver(init);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
