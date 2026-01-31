import { LitElement, html, nothing } from "lit";

import styles from "../Css/language-switcher.css?lit";

import "./rldropdown";
import "./switch";

export class RLLanguageSwitcher extends LitElement {
  static styles = styles;

  static properties = {
    locale: { type: String },
    native: { type: String },
    translations: { type: Array },
    url: { type: String },
    notFound: { type: Boolean, attribute: "not-found" },
    _preferredLocale: { state: true },
  };

  constructor() {
    super();
    /** @type {import("@rari").Translation[]} */
    this.translations = [];
    this.native = "";
    this.locale = "en-US";
    this.url = "/";
    this.notFound = false;
    /** @type {string|undefined} */
    this._preferredLocale = undefined;
  }

  _notFoundFallback = new Task(this, {
    args: () => [this.notFound],
    task: async ([notFound]) => {
      if (notFound) {
        return await getEnglishDoc(location.pathname);
      }
      return;
    },
  });

  firstUpdated() {
    this._preferredLocale = getPreferredLocale();
    if (location.search) {
      this.url += location.search;
    }
  }

  get _isLocalePreferred() {
    return this._preferredLocale == this.locale;
  }

  _togglePreferredLocale() {
    if (this.notFound) return;
    if (this._isLocalePreferred) {
      resetPreferredLocale();
      this._preferredLocale = undefined;
    } else {
      setPreferredLocale(this.locale);
      this._preferredLocale = this.locale;
    }
  }

  render() {
    const { translations, native, locale, url, notFound } = this;

    if (translations.length === 0) {
      return nothing;
    }

    return html`
    `;
  }

  /**
   * @param {import("@rari").Translation[]} translations
   * @param {string} locale
   * @param {string} url
   * @param {boolean} notFound
   */
  _renderDropdownItems(translations, locale, url, notFound = false) {
    return translations
      .sort((a, b) => a.locale.localeCompare(b.locale))
      .map(
        (translation) => html`
          <li>
            <a
              class="language-switcher__option"
              ?data-current=${locale === translation.locale}
              @click=${resetPreferredLocale}
              href=${url.replace(
          `/${notFound ? "en-US" : locale}/`,
          `/${translation.locale}/`,
        )}
              >${translation.native}</a
            >
          </li>
        `,
      );
  }

  _renderCurrentLocale() {
    return html`
      <li>
        <a
          class="language-switcher__option"
          ?data-current=${true}
          href=${this.url}
          >${this.native}</a
        >
      </li>
    `;
  }
}


customElements.define("rl-language-switcher", RLLanguageSwitcher);
