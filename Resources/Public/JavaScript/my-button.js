import {html, LitElement} from 'lit';
import {
  getTagName,
  getActiveAttribute,
  getClasses,
  getPluginStyles,
} from './trusted-rendering-library.js';
import {html as staticHtml, unsafeStatic} from 'lit/static-html.js';

export class MyButton extends LitElement {
  static properties = {
    active: {state: true},
  };

  render() {
    // These strings MUST be trusted, otherwise this is an XSS vulnerability
    const tag = getTagName();
    const activeAttribute = getActiveAttribute();
    const classes = getClasses();

    return html`
      ${staticHtml`
        <${unsafeStatic(tag)}
            tabindex="0"
            class=${unsafeStatic(classes)}
            ?${unsafeStatic(activeAttribute)}=${this.active}>
          <p>Hello static!</p>
        </${unsafeStatic(tag)}>`}
      <!-- /* playground-fold */ -->
      <fieldset>
        <legend>Toggle fancy button active state</legend>
        <label>
          <input type="checkbox" @change=${this.#toggleActive} .checked=${
      this.active
    }>
          Active
        </label>
      </fieldset>
      <!-- /* playground-fold-end */ -->`;
  }

  /* playground-fold */
  #toggleActive(e) {
    this.active = e.target.checked;
  }

  constructor() {
    super();
    MyButton.styles.replaceSync(getPluginStyles());
    this.active = false;
  }
  /* playground-fold-end */

  static styles = new CSSStyleSheet();
}
customElements.define('my-button', MyButton);
