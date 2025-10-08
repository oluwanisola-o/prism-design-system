import '@spectrum-web-components/button/sp-button.js';

class PrismButton extends HTMLElement {
  connectedCallback() {
    const button = document.createElement('sp-button');
    
    // Copy all attributes from prism-button to sp-button
    Array.from(this.attributes).forEach(attr => {
      button.setAttribute(attr.name, attr.value);
    });
    
    // Copy text content
    button.textContent = this.textContent;
    
    // Clear and append
    this.innerHTML = '';
    this.appendChild(button);
    
    // Forward click events
    button.addEventListener('click', (e) => {
      this.dispatchEvent(new Event('click', { bubbles: true }));
    });
  }
}

customElements.define('prism-button', PrismButton);