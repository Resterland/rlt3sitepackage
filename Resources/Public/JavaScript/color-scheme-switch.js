function lightMode() {
  document
    .querySelector('meta[name="color-scheme"]')
    .setAttribute("content", "light");
  // document.getElementsByTagName("html")[0].style.colorScheme = "light";
}

function darkMode() {
  document
    .querySelector('meta[name="color-scheme"]')
    .setAttribute("content", "dark");
  // document.getElementsByTagName("html")[0].style.colorScheme = "dark";
}

function autoMode() {
  document
    .querySelector('meta[name="color-scheme"]')
    .setAttribute("content", "light dark");
  // document.getElementsByTagName("html")[0].style.colorScheme = "light dark";
}
