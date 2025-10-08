# Button

Buttons are interactive elements that trigger actions when clicked or activated.

## Overview

The Prism Button component is built on Adobe's Spectrum Web Components with custom styling using Prism design tokens. It provides consistent, accessible button interfaces across different brands and themes.

## Anatomy

```
┌─────────────────────────────────────┐
│  [Icon] Label Text        [Icon]    │  ← Header
├─────────────────────────────────────┤
│                                     │
│  Content area with text, lists,     │  ← Content
│  images, or other elements          │
│                                     │
└─────────────────────────────────────┘
```

## Variants

### Primary
Primary buttons are used for the most important actions on a page. They should be used sparingly to maintain their impact.

```html
<prism-button variant="primary">Get Started</prism-button>
```

### Secondary
Secondary buttons are used for supporting actions that are important but not the primary action.

```html
<prism-button variant="secondary">Learn More</prism-button>
```

### Success
Success buttons are used for positive actions like saving, confirming, or completing a task.

```html
<prism-button variant="success">Save Changes</prism-button>
```

### Warning
Warning buttons are used for actions that require caution or attention.

```html
<prism-button variant="warning">Review Changes</prism-button>
```

### Negative
Negative buttons are used for destructive actions like deleting or removing content.

```html
<prism-button variant="negative">Delete Item</prism-button>
```

### Link Colored
Colored link buttons are used for actions that should appear as links but with brand color emphasis.

```html
<prism-button variant="link colored">View Details</prism-button>
```

### Link Grey
Grey link buttons are used for secondary actions that should appear as subtle links.

```html
<prism-button variant="link grey">Cancel</prism-button>
```

## Sizes

### Small (s)
Use small buttons in dense interfaces or when space is limited.

```html
<prism-button size="s">Small Button</prism-button>
```

### Medium (m) - Default
Use medium buttons for most standard use cases.

```html
<prism-button size="m">Medium Button</prism-button>
```

### Large (l)
Use large buttons for primary actions or when you want to draw attention.

```html
<prism-button size="l">Large Button</prism-button>
```

## States

### Default
The normal state of a button when it's interactive and ready to be clicked.

### Hover
The state when a user hovers over the button with their cursor.

### Focus
The state when a button receives keyboard focus.

### Active/Pressed
The state when a button is being pressed or activated.

### Disabled
The state when a button is not interactive and cannot be clicked.

```html
<prism-button disabled>Disabled Button</prism-button>
```

## Brand & Theme Support

### Quest Brand
- **Light Theme**: Purple accent colors with Geist font family
- **Dark Theme**: Purple accent colors with Geist font family (darker background)

### Volt Brand
- **Light Theme**: Blue accent colors with Switzer font family
- **Dark Theme**: Blue accent colors with Bricolage Grotesque font family

## Usage Guidelines

### Do's
- Use primary buttons for the most important action on a page
- Use secondary buttons for supporting actions
- Use appropriate button sizes for your interface density
- Use disabled state when actions are not available
- Use clear, action-oriented labels

### Don'ts
- Don't use too many primary buttons on one page
- Don't use negative buttons for non-destructive actions
- Don't use buttons for navigation (use links instead)
- Don't make buttons too small to click easily
- Don't use vague or unclear button labels

## Accessibility

The Prism Button component is built on Spectrum Web Components and includes:

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space keys
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **High Contrast**: Support for high contrast mode
- **Color Independence**: Information is not conveyed by color alone

## Implementation

### Basic Implementation

```html
<prism-button variant="primary" size="m">Click Me</prism-button>
```

### With Event Handling

```javascript
const button = document.querySelector('prism-button');
button.addEventListener('click', (event) => {
  console.log('Button clicked!');
});
```

### Form Integration

```html
<form>
  <prism-button type="submit" variant="primary">Submit Form</prism-button>
  <prism-button type="button" variant="secondary">Cancel</prism-button>
</form>
```

## Design Tokens

The button component uses the following design tokens:

### Colors
- `--quest-light-btn-primary-bg` / `--quest-dark-btn-primary-bg`
- `--quest-light-btn-primary-text` / `--quest-dark-btn-primary-text`
- `--quest-light-btn-primary-border` / `--quest-dark-btn-primary-border`
- `--volt-light-btn-primary-bg` / `--volt-dark-btn-primary-bg`
- `--volt-light-btn-primary-text` / `--volt-dark-btn-primary-text`
- `--volt-light-btn-primary-border` / `--volt-dark-btn-primary-border`

### Typography
- `--quest-light-font-body` / `--quest-dark-font-body`
- `--volt-light-font-body` / `--volt-dark-font-body`
- `--quest-light-font-weight-semibold` / `--quest-dark-font-weight-semibold`
- `--volt-light-font-weight-semibold` / `--volt-dark-font-weight-semibold`

### Spacing
- `--quest-light-space-*` / `--quest-dark-space-*`
- `--volt-light-space-*` / `--volt-dark-space-*`

### Border Radius
- `--quest-light-corner-radius-full` / `--quest-dark-corner-radius-full`
- `--volt-light-corner-radius-3` / `--volt-dark-corner-radius-3`

## Examples

### Action Group

```html
<div class="button-group">
  <prism-button variant="primary">Save</prism-button>
  <prism-button variant="secondary">Save as Draft</prism-button>
  <prism-button variant="negative">Delete</prism-button>
</div>
```

### Navigation Actions

```html
<nav>
  <prism-button variant="link colored">Home</prism-button>
  <prism-button variant="link grey">About</prism-button>
  <prism-button variant="link grey">Contact</prism-button>
</nav>
```

### Form Actions

```html
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
  </div>
  <div class="form-actions">
    <prism-button type="submit" variant="primary">Subscribe</prism-button>
    <prism-button type="button" variant="link grey">Cancel</prism-button>
  </div>
</form>
```

### Status Actions

```html
<div class="status-actions">
  <prism-button variant="success">Approved</prism-button>
  <prism-button variant="warning">Needs Review</prism-button>
  <prism-button variant="negative">Rejected</prism-button>
</div>
```

## Browser Support

The Prism Button component supports all modern browsers that support:

- Custom Elements
- CSS Custom Properties
- ES6 Modules

## Related Components

- [Accordion](../Accordion/Accordion.md) - Collapsible content sections
- [Input](../Input/Input.md) - Form input fields
- [Card](../Card/Card.md) - Content containers
- [Modal](../Modal/Modal.md) - Overlay dialogs

## Changelog

### v1.0.0
- Initial release
- Multi-brand support (Quest, Volt)
- Theme support (Light, Dark)
- Multiple variants and sizes
- Accessibility features
- Design token integration
