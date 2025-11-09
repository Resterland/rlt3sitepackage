if (HTMLScriptElement.supports?.("importmap")) {
    console.log("Browser supports import maps.");
}
import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
    static styles = css`p { color: blue }`;

    static properties = {
        name: {type: String},
    };

    constructor() {
        super();
        this.name = 'Roland';
    }

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}
customElements.define('simple-greeting', SimpleGreeting);

