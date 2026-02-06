const html = document.querySelector('html');
const hueSlider = document.querySelector('#hueSlider');

function switchDark() {
  html.style.setProperty("color-scheme", "dark");
}
function switchLight() {
  html.style.setProperty("color-scheme", "light");
}
function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
}

hueSlider.addEventListener("input", () =>
  html.style.setProperty("--hue", hueSlider.value));
