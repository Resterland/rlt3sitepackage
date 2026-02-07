'use strict';
const html = document.querySelector("html");
const mode = localStorage.getItem("mode");
const autoSwitch = document.querySelector('#autoSwitch');
const lightSwitch = document.querySelector('#lightSwitch');
const darkSwitch = document.querySelector('#darkSwitch');
document.querySelector('#autoSwitch').addEventListener("click", () => {
  switchAuto(CSS.escape("this?element"));
});
document.querySelector('#lightSwitch').addEventListener("click", () => {
  switchLight(CSS.escape("this?element"));
});
document.querySelector('#darkSwitch').addEventListener("click", () => {
  switchDark(CSS.escape("this?element"));
});

if (mode === "light") switchLight();
if (mode === "dark") switchDark();

function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
  localStorage.removeItem("mode");
  lightSwitch.setAttribute("aria-pressed","false");
  darkSwitch.setAttribute("aria-pressed","false");
  autoSwitch.setAttribute("aria-pressed","true");
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

// there are likely DRYer ways to do this...
