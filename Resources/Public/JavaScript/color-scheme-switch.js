"use strict";
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const currentSheet = document.getElementById("stylesheet"),
      switcher = document.getElementById("styleswitcher");

    function loadStyle() {
      if (localStorage.getItem("stylez")) {
        currentSheet.href = localStorage.getItem("stylez");
      }
    }
    // only continue if required elements are present
    if (currentSheet && switcher) {
      // set previously stored stylesheet?
      loadStyle();
      // listen for clicks on buttons
      switcher.addEventListener("click", function (ev) {
        const b = ev.target; // button
        if (b && b.hasAttribute("data-stylesheet")) {
          // save value
          localStorage.setItem("stylez", b.getAttribute("data-stylesheet"));
          loadStyle();
        }
      });
    }
  });
}());
