import '@spectrum-web-components/button-group/sp-button-group.js';
import '@spectrum-web-components/button/sp-button.js';

class PrismButtonGroup extends HTMLElement {
  connectedCallback() {
    const buttonGroup = document.createElement('sp-button-group');
    
    // Copy all attributes from prism-button-group to sp-button-group
    Array.from(this.attributes).forEach(attr => {
      buttonGroup.setAttribute(attr.name, attr.value);
    });
    
    // Set up the button group content
    this.setupButtonGroupContent(buttonGroup);
    
    // Clear and append
    this.innerHTML = '';
    this.appendChild(buttonGroup);
    
    // Forward events
    this.forwardEvents(buttonGroup);
  }

  setupButtonGroupContent(buttonGroup) {
    // Get the original content
    const originalContent = this.innerHTML;
    
    // If there's content, parse it and create buttons
    if (originalContent.trim()) {
      // Parse button data from content or attributes
      const buttons = this.parseButtonData(originalContent);
      
      buttons.forEach(buttonData => {
        const button = document.createElement('sp-button');
        
        // Set button attributes
        Object.entries(buttonData).forEach(([key, value]) => {
          if (key === 'textContent') {
            button.textContent = value;
          } else {
            button.setAttribute(key, value);
          }
        });
        
        // Add click event listener
        button.addEventListener('click', (e) => {
          this.dispatchEvent(new CustomEvent('buttonclick', { 
            bubbles: true, 
            detail: { 
              button: buttonData,
              event: e 
            } 
          }));
        });
        
        buttonGroup.appendChild(button);
      });
    } else {
      // Create default buttons based on attributes
      this.createDefaultButtons(buttonGroup);
    }
  }

  parseButtonData(content) {
    // Try to parse JSON first
    try {
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      // If not JSON, try to parse as HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      
      const buttons = [];
      const buttonElements = tempDiv.querySelectorAll('prism-button, button, [data-button]');
      
      buttonElements.forEach(btn => {
        const buttonData = {
          textContent: btn.textContent || btn.getAttribute('text') || 'Button'
        };
        
        // Copy attributes
        Array.from(btn.attributes).forEach(attr => {
          if (attr.name !== 'text') {
            buttonData[attr.name] = attr.value;
          }
        });
        
        buttons.push(buttonData);
      });
      
      return buttons;
    }
  }

  createDefaultButtons(buttonGroup) {
    // Create default buttons based on attributes
    const buttonCount = parseInt(this.getAttribute('button-count') || '2');
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'm';
    
    for (let i = 0; i < buttonCount; i++) {
      const button = document.createElement('sp-button');
      button.variant = variant;
      button.size = size;
      button.textContent = `Button ${i + 1}`;
      
      button.addEventListener('click', (e) => {
        this.dispatchEvent(new CustomEvent('buttonclick', { 
          bubbles: true, 
          detail: { 
            button: { textContent: button.textContent, variant, size },
            event: e 
          } 
        }));
      });
      
      buttonGroup.appendChild(button);
    }
  }

  forwardEvents(buttonGroup) {
    // Forward all events from the button group
    const events = ['change', 'input', 'focus', 'blur'];
    events.forEach(eventType => {
      buttonGroup.addEventListener(eventType, (e) => {
        this.dispatchEvent(new CustomEvent(eventType, { 
          bubbles: true, 
          detail: e.detail 
        }));
      });
    });
  }

  // Method to add a button programmatically
  addButton(buttonData) {
    const buttonGroup = this.querySelector('sp-button-group');
    if (buttonGroup) {
      const button = document.createElement('sp-button');
      
      Object.entries(buttonData).forEach(([key, value]) => {
        if (key === 'textContent') {
          button.textContent = value;
        } else {
          button.setAttribute(key, value);
        }
      });
      
      button.addEventListener('click', (e) => {
        this.dispatchEvent(new CustomEvent('buttonclick', { 
          bubbles: true, 
          detail: { 
            button: buttonData,
            event: e 
          } 
        }));
      });
      
      buttonGroup.appendChild(button);
    }
  }

  // Method to remove all buttons
  clearButtons() {
    const buttonGroup = this.querySelector('sp-button-group');
    if (buttonGroup) {
      buttonGroup.innerHTML = '';
    }
  }
}

customElements.define('prism-button-group', PrismButtonGroup);
