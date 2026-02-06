const html = document.querySelector('html');

// three functions used by buttons and radios
function switchAuto() {
  html.style.setProperty("data-theme", "light dark");
}
function switchLight() {
  html.style.setProperty("data-theme", "light");
}
function switchDark() {
  html.style.setProperty("data-theme", "dark");
}

// single function used by select element
function switchMode(mode) {
  html.style.setProperty("data-theme", mode === "auto" ? "light dark" : mode);
}
