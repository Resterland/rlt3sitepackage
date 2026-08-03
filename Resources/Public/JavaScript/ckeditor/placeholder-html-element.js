class PlaceholderHtmlElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('PlaceholderHtmlElement added to the page');
  }
}
