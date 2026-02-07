import {LitElement, html} from 'lit';

import "rldropdown";

export class ColorSchemeSwitch extends LitElement {
  static styles;

  static properties = {
    _mode: { state: true },
  };

  constructor() {
    super();
    this._mode = "light dark";
    this._options = Object.entries({
      "light dark": this._mode("theme-default")`OS default`,
      light: this._mode`Light`,
      dark: this._mode`Dark`,
    });
  }

  /** @param {MouseEvent} event */
  _setMode({ target }) {
    if (target instanceof HTMLElement) {
      const mode = target.dataset.mode;
      if (mode === "light dark" || mode === "light" || mode === "dark") {
        this._mode = mode;
        try {
          localStorage.setItem("theme", mode);
        } catch (error) {
          console.warn("Unable to write theme to localStorage", error);
        }
        const dropdown = this.shadowRoot?.querySelector("rl-dropdown");
        if (dropdown) {
          dropdown.open = false;
        }
      }
    }
  }

  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("_mode") && globalThis.document) {
      document.documentElement.dataset.theme = this._mode;
      this.dispatchEvent(
        new CustomEvent("rl-color-theme-update", {
          bubbles: true,
          composed: true,
          detail: this._mode,
        }),
      );
    }
  }
  render() {
    return html`
      <div class="color-theme">
        <rl-dropdown>
          <button
            part="button"
            slot="button"
            class="color-theme__button"
            data-mode=${this._mode}
            type="button"
            aria-label=${this._mode`Switch color theme`}
          >
            <span>${this._mode`Theme`}</span>
          </button>
          <div
            slot="dropdown"
            class="color-theme__dropdown"
            id="color-theme__dropdown"
          >
            <ul class="color-theme__list">
              ${this._options.map(
                ([mode, option]) =>
                  html`<li>
                  <button
                    class="color-theme__option"
                    data-mode=${mode}
                    ?data-current=${mode === this._mode}
                    type="button"
                    @click=${this._setMode}
                  >
                    ${option}
                  </button>
                </li>`,
              )}
            </ul>
          </div>
        </rl-dropdown>
      </div>
    `;
  }

  firstUpdated() {
    // we have to do this here and immediately cause a re-render
    // as doing so in connectedCallback causes a hydration error:
    // https://github.com/lit/lit/issues/1434

    // this logic is also reflected in "/entry.inline.js"

    let mode;
    try {
      mode = localStorage.getItem("theme");
    } catch (error) {
      console.warn("Unable to read theme from localStorage", error);
    }
    if (mode === "light dark" || mode === "light" || mode === "dark") {
      this._mode = mode;
    }
  }
}
customElements.define('color-scheme-switch', ColorSchemeSwitch);
