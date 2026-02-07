'use strict';'use strict';
(function () {
  function init() {
    const html = document.querySelector("html");
    const mode = localStorage.getItem("mode");
    const autoSwitch = document.getElementById('autoSwitch');
    autoSwitch.addEventListener('onclick', switchAuto);
    const lightSwitch = document.getElementById('lightSwitch');
    lightSwitch.addEventListener('onclick', switchLight);
    const darkSwitch = document.getElementById('darkSwitch');
    lightSwitch.addEventListener('onclick', switchDark);
  }

  function switchLight() {
    html.style.setProperty("color-scheme", "light");
    localStorage.setItem("mode", "light");
    lightSwitch.setAttribute("aria-pressed","true");
    darkSwitch.setAttribute("aria-pressed","false");
    autoSwitch.setAttribute("aria-pressed","false");
  }

  function switchDark() {
    html.style.setProperty("color-scheme", "dark");
    localStorage.setItem("mode", "dark");
    lightSwitch.setAttribute("aria-pressed","false");
    darkSwitch.setAttribute("aria-pressed","true");
    autoSwitch.setAttribute("aria-pressed","false");
  }

  function switchAuto() {
    html.style.setProperty("color-scheme", "light dark");
    localStorage.removeItem("mode");
    lightSwitch.setAttribute("aria-pressed","false");
    darkSwitch.setAttribute("aria-pressed","false");
    autoSwitch.setAttribute("aria-pressed","true");
  }

  function erzeugeZeitStempel() {
    const zeitstempeltext = document.createTextNode(document.lastModified),
      textZuvor = document.createTextNode('Datum des letzten Updates: ');
    document.getElementById('absatz')
      .appendChild(textZuvor);
    document.getElementById('absatz')
      .appendChild(zeitstempeltext);
  }
  let mode;
  if (mode === "light") switchLight();
  if (mode === "dark") switchDark();
  document.addEventListener('DOMContentLoaded', init);
}());

// there are likely DRYer ways to do this...
