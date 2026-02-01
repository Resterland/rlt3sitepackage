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
      <p>Render a list:</p>
      <ul>
        ${this.list.map(
      (item, index) => html`
              <li>${index}: ${item}</li>
            `
    )}
      </ul>
    `;
  }

}

customElements.define("rl-color-theme", RLColorTheme);
