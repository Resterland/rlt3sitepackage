import { LitElement, html, css } from "lit";
import {classMap} from 'lit/directives/class-map.js';

class RLColorTheme extends LitElement {
  static properties = {
    list: {},
    condition: {},
  };

  constructor() {
    super();
    this.list = ['light dark', 'light', 'dark'];
    this.condition = true;
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
            <span>bla bla</span>
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
