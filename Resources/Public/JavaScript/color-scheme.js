'use strict';
const body = document.querySelector('body');
const hueSlider = document.querySelector('#hueSlider');

function switchDark() {
  body.style.setProperty("color-scheme", "dark");
}
function switchLight() {
  body.style.setProperty("color-scheme", "light");
}
function switchAuto() {
  body.style.setProperty("color-scheme", "light dark");
}

hueSlider.addEventListener("input", () =>
  body.style.setProperty("--hue", hueSlider.value));
