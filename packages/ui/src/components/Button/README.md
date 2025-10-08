# Prism Button Component

A customizable button component built with Spectrum Web Components and Prism design tokens.

## Overview

The Prism Button component provides a consistent, accessible button interface across different brands and themes. It's built on top of Adobe's Spectrum Web Components with custom styling using Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes
- **Multiple variants**: Primary, Secondary, Success, Warning, Negative, and Link styles
- **Size variations**: Small, Medium, and Large sizes
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling
- **Interactive states**: Hover, focus, active, and disabled states

## Installation

```bash
# The component is automatically available when you import it
import './Button.js';
```

## Usage

### Basic Usage

```html
<prism-button variant="primary" size="m">Click me</prism-button>
```

### All Variants

```html
<!-- Primary button -->
<prism-button variant="primary">Primary</prism-button>

<!-- Secondary button -->
<prism-button variant="secondary">Secondary</prism-button>

<!-- Success button -->
<prism-button variant="success">Success</prism-button>

<!-- Warning button -->
<prism-button variant="warning">Warning</prism-button>

<!-- Negative button -->
<prism-button variant="negative">Delete</prism-button>

<!-- Link buttons -->
<prism-button variant="link colored">Colored Link</prism-button>
<prism-button variant="link grey">Grey Link</prism-button>
```

### Different Sizes

```html
<prism-button size="s">Small</prism-button>
<prism-button size="m">Medium</prism-button>
<prism-button size="l">Large</prism-button>
```

### Disabled State

```html
<prism-button disabled>Disabled Button</prism-button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Button variant style |
| `size` | `string` | `'m'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `label` | `string` | `'Button'` | Button text content |

### Variant Options

- `primary` - Main call-to-action button
- `secondary` - Secondary action button
- `success` - Success state button
- `warning` - Warning state button
- `negative` - Destructive action button
- `link colored` - Colored text link
- `link grey` - Grey text link

### Size Options

- `s` - Small button
- `m` - Medium button (default)
- `l` - Large button

## Brand & Theme Support

The button component supports multiple brands and themes:

### Quest Brand
- **Light Theme**: Purple accent colors with Geist font
- **Dark Theme**: Purple accent colors with Geist font (darker background)

### Volt Brand
- **Light Theme**: Blue accent colors with Switzer font
- **Dark Theme**: Blue accent colors with Bricolage Grotesque font

### Theme Switching

Use the theme switcher in Storybook to see how buttons look across different brands and themes. The component automatically applies the correct styling based on the current theme class.

## Styling

The component uses CSS custom properties from the Prism design system:

```css
/* Example: Quest Light Primary Button */
.theme-quest-light prism-button[variant="primary"] sp-button {
  background-color: var(--quest-light-btn-primary-bg);
  color: var(--quest-light-btn-primary-text);
  border: 1px solid var(--quest-light-btn-primary-border);
  font-family: var(--quest-light-font-body);
  border-radius: var(--quest-light-corner-radius-full);
}
```

## Accessibility

- Built on Spectrum Web Components with proper ARIA support
- Keyboard navigation support
- Screen reader compatible
- Focus management
- High contrast support

## Examples

### Form Submission

```html
<form>
  <prism-button variant="primary" type="submit">Submit Form</prism-button>
  <prism-button variant="secondary" type="button">Cancel</prism-button>
</form>
```

### Action Group

```html
<div class="button-group">
  <prism-button variant="primary">Save</prism-button>
  <prism-button variant="secondary">Save as Draft</prism-button>
  <prism-button variant="negative">Delete</prism-button>
</div>
```

### Navigation Links

```html
<nav>
  <prism-button variant="link colored">Home</prism-button>
  <prism-button variant="link grey">About</prism-button>
  <prism-button variant="link grey">Contact</prism-button>
</nav>
```

## Development

### File Structure

```
Button/
├── Button.js          # Component implementation
├── Button.css         # Component styles
├── Button.stories.js  # Storybook stories
└── README.md         # This documentation
```

### Customization

To customize the button appearance, modify the CSS custom properties in `Button.css` or update the design tokens in the Prism design system.

## Related Components

- [Prism Input](../Input/README.md)
- [Prism Card](../Card/README.md)
- [Prism Modal](../Modal/README.md)

## Changelog

### v1.0.0
- Initial release
- Multi-brand support (Quest, Volt)
- Theme support (Light, Dark)
- Multiple variants and sizes
- Accessibility features
