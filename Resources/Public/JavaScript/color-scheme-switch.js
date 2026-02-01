import { LitElement, html, css } from "lit";

import {RLDropdown} from "rldropdown";

export class RLColorTheme extends RLDropdown(LitElement) {
}

customElements.define("rl-color-theme", RLColorTheme);
