import { LitElement, html, nothing } from "lit";

import {randomIdString} from "utils";

import styles from "../Css/language-switcher.css?lit";

import {RLDropdown} from "./rldropdown";

export class RLLanguageSwitcher extends RLDropdown {
  static styles = styles;
}


customElements.define("rl-language-switcher", RLLanguageSwitcher);
