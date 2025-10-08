/**
 * Prism Accordion Component
 * Built on Spectrum Web Components with Prism design tokens
 */

import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';

class PrismAccordion extends HTMLElement {
  connectedCallback() {
    // Create the accordion element
    const accordion = document.createElement('sp-accordion');
    
    // Copy all attributes from the custom element to the spectrum accordion
    Array.from(this.attributes).forEach(attr => {
      accordion.setAttribute(attr.name, attr.value);
    });

    // Move all child elements to the accordion
    while (this.firstChild) {
      accordion.appendChild(this.firstChild);
    }

    // Clear the custom element and append the spectrum accordion
    this.innerHTML = '';
    this.appendChild(accordion);

    // Forward events
    accordion.addEventListener('sp-accordion-item-toggle', (e) => {
      this.dispatchEvent(new CustomEvent('sp-accordion-item-toggle', {
        detail: e.detail,
        bubbles: true
      }));
    });
  }
}

class PrismAccordionItem extends HTMLElement {
  connectedCallback() {
    // Create the accordion item element
    const accordionItem = document.createElement('sp-accordion-item');
    
    // Copy all attributes from the custom element to the spectrum accordion item
    Array.from(this.attributes).forEach(attr => {
      accordionItem.setAttribute(attr.name, attr.value);
    });

    // Move all child elements to the accordion item
    while (this.firstChild) {
      accordionItem.appendChild(this.firstChild);
    }

    // Clear the custom element and append the spectrum accordion item
    this.innerHTML = '';
    this.appendChild(accordionItem);

    // Forward events
    accordionItem.addEventListener('sp-accordion-item-toggle', (e) => {
      this.dispatchEvent(new CustomEvent('sp-accordion-item-toggle', {
        detail: e.detail,
        bubbles: true
      }));
    });
  }
}

// Register the custom elements
customElements.define('prism-accordion', PrismAccordion);
customElements.define('prism-accordion-item', PrismAccordionItem);
