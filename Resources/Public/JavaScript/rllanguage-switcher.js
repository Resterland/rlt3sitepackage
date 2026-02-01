import { LitElement, html, nothing } from "lit";

import {randomIdString} from "utils";

import styles from "../Css/language-switcher.css?lit";

import "./rldropdown.js"

export class RLLanguageSwitcher extends LitElement {
  static styles = styles;
}


customElements.define("rl-language-switcher", RLLanguageSwitcher);
