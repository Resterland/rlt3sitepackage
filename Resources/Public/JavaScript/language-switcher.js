import "./rldropdown";

import {RLDropdown} from "./rldropdown";

export class RLLanguageSwitcher extends RLDropdown {
  static styles = css`
    :host {
        display: contents;
    }

        :host(:not([loaded], :focus-within)) {
            slot[name="dropdown"] {
                display: none;
            }
        }`
  ;

  static properties = {
    open: { type: Boolean },
    loaded: { type: Boolean, reflect: true },
  };
}


customElements.define("rl-language-switcher", RLLanguageSwitcher);
