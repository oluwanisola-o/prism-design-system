class PrismAlertDialog extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['open', 'heading', 'content', 'primary-text', 'secondary-text', 'primary-variant', 'secondary-variant', 'variant'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const heading = this.getAttribute('heading') || 'Alert';
    const content = this.getAttribute('content') || 'Are you sure you want to continue?';
    const primaryText = this.getAttribute('primary-text') || 'Confirm';
    const secondaryText = this.getAttribute('secondary-text');
    const primaryVariant = this.getAttribute('primary-variant') || 'primary';
    const secondaryVariant = this.getAttribute('secondary-variant') || 'secondary';
    const variant = this.getAttribute('variant') || 'default';

    this.innerHTML = `
      <div class="alert-dialog-panel" data-variant="${variant}">
        <div class="alert-dialog-header">
          <h2 class="alert-dialog-title">${heading}</h2>
          <div class="alert-dialog-separator"></div>
        </div>
        <div class="alert-dialog-content">
          <p class="alert-dialog-message">${content}</p>
        </div>
        <div class="alert-dialog-footer">
          ${secondaryText ? `<button class="alert-dialog-button alert-dialog-button-secondary" data-action="cancel">${secondaryText}</button>` : ''}
          <button class="alert-dialog-button alert-dialog-button-${primaryVariant}" data-action="confirm">${primaryText}</button>
        </div>
      </div>
    `;

    // Add event listeners
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const button = event.target.closest('.alert-dialog-button');
    if (button) {
      const action = button.dataset.action;
      if (action === 'confirm') {
        this.dispatchEvent(new CustomEvent('confirm', { bubbles: true }));
      } else if (action === 'cancel') {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true }));
      }
    }
  }
}

customElements.define('prism-alert-dialog', PrismAlertDialog);
