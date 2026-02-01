import { LitElement, html, css } from "lit";

class RLColorTheme extends LitElement {
  render() {
    return html`<div class="color-theme">
      <rl-dropdown>
        <button
          part="button"
          slot="button"
          class="color-theme__button"
          data-mode=${this._mode}
          type="button"
          aria-label=${this.l10n`Switch color theme`}
        >
          <span>${this.l10n`Theme`}</span>
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
    </div>`;
  }

}

customElements.define("rl-color-theme", RLColorTheme);
