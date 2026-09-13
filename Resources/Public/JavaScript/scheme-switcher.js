'use strict';

import { LitElement as u,html as s,nothing as m} from"lit";
import { property as d,state as p,customElement as b} from"lit/decorators.js";
import v from"@typo3/core/ajax/ajax-request.js";
import"@typo3/backend/element/icon-element.js";

const html = document.querySelector('html');

// three functions used by buttons
function switchAuto() {
  html.style.setProperty("base-scheme", "light dark");
}
function switchLight() {
  html.style.setProperty("base-scheme", "light");
}
function switchDark() {
  html.style.setProperty("base-scheme", "dark");
}

// single function used by select element and radio fieldset
function switchMode(mode) {
  html.style.setProperty("base-scheme", mode === "auto" ? "light dark" : mode);
}
