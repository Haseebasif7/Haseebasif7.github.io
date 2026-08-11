/* Theme toggle (system -> light -> dark) + mobile nav.
   The initial theme is applied by an inline script in <head> to avoid a flash. */
(function () {
  "use strict";

  var STATES = ["system", "light", "dark"];
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function resolve(state) {
    if (state === "system") return media.matches ? "dark" : "light";
    return state;
  }

  function apply(state) {
    document.documentElement.setAttribute("data-theme", resolve(state));
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("data-theme-state", state);
      btn.setAttribute("aria-label", "Theme: " + state + ". Click to change.");
      btn.setAttribute("title", "Theme: " + state);
    }
  }

  function current() {
    try {
      var saved = localStorage.getItem("theme");
      return STATES.indexOf(saved) > -1 ? saved : "system";
    } catch (e) {
      return "system";
    }
  }

  apply(current());

  media.addEventListener("change", function () {
    if (current() === "system") apply("system");
  });

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = STATES[(STATES.indexOf(current()) + 1) % STATES.length];
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* private mode — theme just won't persist */
      }
      apply(next);
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveal. Content is visible by default (see main.css); only after
     confirming IntersectionObserver support and that the visitor hasn't
     asked for reduced motion do we arm the hidden state and animate items
     in as they enter the viewport, staggered within each container. */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");

    var groups = document.querySelectorAll("[data-reveal-group]");
    groups.forEach(function (group) {
      var items = group.querySelectorAll(".reveal");
      items.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", Math.min(i, 5) * 70 + "ms");
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }
})();
