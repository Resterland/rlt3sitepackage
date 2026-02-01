import { LitElement, html, css } from "lit";
import {classMap} from 'lit/directives/class-map.js';

class RLColorTheme extends LitElement {
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

  render() {
    return html`
      <div class="color-theme">
        <rl-dropdown>
          <button
            part="button"
            slot="button"
            class="color-theme__button"
            type="button"
          >
            <span>Themes</span>
          </button>
          <div
            slot="dropdown"
            class="color-theme__dropdown"
            id="color-theme__dropdown"
          >
      <ul class="color-theme__list">
        ${this.list.map(
      (item, index) => html`
              <li>${index}: ${item}</li>
            `
    )}
      </ul>
          </div>
        </rl-dropdown>
      </div>
    `;
  }

}

customElements.define("rl-color-theme", RLColorTheme);
