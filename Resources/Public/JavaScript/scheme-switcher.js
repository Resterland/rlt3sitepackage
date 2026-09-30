const body = document.querySelector('body');
const hueSlider = document.querySelector('#hueSlider');

function switchDark() {
  body.setProperty("color-scheme", "dark");
}
function switchLight() {
  body.setProperty("color-scheme", "light");
}
function switchAuto() {
  body.setProperty("color-scheme", "light dark");
}

hueSlider.addEventListener("input", () =>
  body.style.setProperty("--hue", hueSlider.value));
