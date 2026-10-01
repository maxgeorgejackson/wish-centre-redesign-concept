document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Quick exit: jump straight to a neutral site, replacing history so Back doesn't return here.
  document.querySelectorAll(".exit-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.replace("https://www.bbc.co.uk/weather");
    });
  });

  // Keyboard shortcut: pressing Escape triggers quick exit from anywhere.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      window.location.replace("https://www.bbc.co.uk/weather");
    }
  });
});
