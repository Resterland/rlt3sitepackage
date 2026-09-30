const body = document.querySelector('body');
const hueSlider = document.querySelector('#hueSlider');

function switchDark() {
  body.style.setProperty("color-scheme", switchDark.value);
}
function switchLight() {
  body.style.setProperty("color-scheme", switchLight.value);
}
function switchAuto() {
  body.style.setProperty("color-scheme", switchAuto.value);
}

hueSlider.addEventListener("input", () =>
  body.style.setProperty("--hue", hueSlider.value));
