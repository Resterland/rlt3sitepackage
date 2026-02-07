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
}
customElements.define('color-scheme-switch', ColorSchemeSwitch);
