import {LitElement, html} from 'lit';

import "rldropdown";

export class ColorSchemeSwitch extends LitElement {


  static properties = {
    _mode: { state: true },
    _options: {},
    themes: {},
  };

  constructor() {
    super();
    this._mode = "light dark";
    this._options = Object.entries({
      "light dark": this.themes("theme-default")`OS default`,
      light: this.themes`Light`,
      dark: this.themes`Dark`,
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
            aria-label=${this.themes`Switch color theme`}
          >
            <span>${this.themes`Theme`}</span>
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
}
customElements.define('color-scheme-switch', ColorSchemeSwitch);
