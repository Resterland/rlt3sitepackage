import { LitElement, html, nothing } from "lit";

import "./rldropdown";
import "./switch";
import {randomIdString} from "./utils";

export class RLLanguageSwitcher extends LitElement {
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

  constructor() {
    super();
    this.open = false;
    this.loaded = false;
  }

  get _buttonSlotElements() {
    return this._slotElements("button");
  }

  get _dropdownSlotElements() {
    return this._slotElements("dropdown");
  }

  /** @param {string} name  */
  _slotElements(name) {
    const slot = this.shadowRoot?.querySelector(`slot[name="${name}"]`);
    if (slot instanceof HTMLSlotElement) {
      return slot.assignedElements();
    }
    return [];
  }

  /** @param {MouseEvent} event */
  _globalClick(event) {
    if (!event.composedPath().includes(this)) {
      this.open = false;
    }
  }

  /** @param {KeyboardEvent} event */
  _globalKeyDown(event) {
    if (this.open && event.key === "Escape") {
      this._toggleDropDown();
    }
  }

  _toggleDropDown() {
    this.open = !this.open;
  }

  _setAriaAttributes() {
    let id = this._dropdownSlotElements.find((element) => element.id)?.id;
    if (!id) {
      id = randomIdString("uid_");
      this._dropdownSlotElements[0]?.setAttribute("id", id);
    }
    for (const element of this._buttonSlotElements) {
      element.setAttribute("aria-expanded", this.open.toString());
      if (id) {
        element.setAttribute("aria-controls", id);
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._globalClick = this._globalClick.bind(this);
    document.addEventListener("click", this._globalClick);
    this._globalKeyDown = this._globalKeyDown.bind(this);
    document.addEventListener("keydown", this._globalKeyDown);
  }

  render() {
    return html`
          <slot name="button" @click=${this._toggleDropDown}></slot>
          <slot name="dropdown" ?hidden=${!this.open && this.loaded}></slot>
    `;
  }

  updated() {
    this._setAriaAttributes();
  }

  firstUpdated() {
    this.loaded = true;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._globalClick);
    document.removeEventListener("keydown", this._globalKeyDown);
  }
}


customElements.define("rl-language-switcher", RLLanguageSwitcher);
