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
})();
