const html = document.querySelector('html');

// three functions used by buttons and radios
function switchAuto() {
  html.style.setProperty("color-scheme", "light dark");
}
function switchLight() {
  html.style.setProperty("color-scheme", "light");
}
function switchDark() {
  html.style.setProperty("color-scheme", "dark");
}

// single function used by select element
function switchMode(mode) {
  html.style.setProperty("color-scheme", mode === "auto" ? "light dark" : mode);
}
