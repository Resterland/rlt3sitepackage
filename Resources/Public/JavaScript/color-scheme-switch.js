const html = document.querySelector('html');

function switchDark() {
  html.style.setProperty("color-scheme", "dark");
}
function switchLight() {
  html.style.setProperty("color-scheme", "light");
}
function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
}
