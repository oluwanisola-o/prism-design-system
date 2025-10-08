class PrismAvatar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['src', 'alt', 'initials', 'size', 'variant', 'status', 'clickable', 'loading'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt');
    const initials = this.getAttribute('initials');
    const size = this.getAttribute('size') || 'm';
    const variant = this.getAttribute('variant') || 'circle';
    const status = this.getAttribute('status');
    const clickable = this.hasAttribute('clickable');
    const loading = this.hasAttribute('loading');

    // Create the avatar container
    const avatar = document.createElement('div');
    avatar.className = 'avatar-container';
    avatar.setAttribute('data-size', size);
    avatar.setAttribute('data-variant', variant);
    if (status) avatar.setAttribute('data-status', status);
    if (clickable) avatar.setAttribute('data-clickable', '');
    if (loading) avatar.setAttribute('data-loading', '');

    if (src) {
      // Create image element
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt || '';
      img.className = 'avatar-image';
      
      // Add error handling
      img.addEventListener('error', () => {
        this.showFallback(avatar, alt, initials);
      });
      
      avatar.appendChild(img);
    } else {
      // Show initials or fallback
      this.showFallback(avatar, alt, initials);
    }

    // Clear and replace content
    this.innerHTML = '';
    this.appendChild(avatar);
  }

  showFallback(container, alt, initials) {
    const fallbackText = initials || alt || this.textContent || '?';
    // If initials are provided, use them as-is, otherwise take first character
    const displayText = initials ? initials : fallbackText.charAt(0).toUpperCase();
    container.textContent = displayText;
    container.className += ' avatar-fallback';
  }
}

customElements.define('prism-avatar', PrismAvatar);
