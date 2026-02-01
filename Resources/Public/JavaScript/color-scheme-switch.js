import { LitElement, html, css } from "lit";
import {classMap} from 'lit/directives/class-map.js';

class RLColorTheme extends LitElement {
  static properties = {
    enabled: {type: Boolean},
    hidden: {type: Boolean},
  };

  static styles = css`
    .enabled {
      background: lightgreen;
    }
    .hidden {
      opacity: 0.2;
    }
    .padded {
      padding: 10px;
    }
  `;

  constructor() {
    super();
    this.enabled = true;
    this.hidden = false;
  }

  render() {
    const classes = {
      enabled: this.enabled,
      hidden: this.hidden,
      padded: true,
    };
    return html`
      <h3>classMap directive example</h3>

      <div class=${classMap(classes)}>Classy text</div>
      <hr>
      <label>
        <input type="checkbox" .checked=${this.enabled} @change=${
      this.toggleEnabled
    }>
        Enabled
      </label>
      <label>
        <input type="checkbox" .checked=${this.hidden} @change=${
      this.toggleHidden
    }>
        Hidden
      </label>
    `;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

}

customElements.define("rl-color-theme", RLColorTheme);
