# Accordion

Accordions are collapsible content sections that allow users to show and hide content in a space-efficient way.

## Overview

The Prism Accordion component is built on Adobe's Spectrum Web Components with custom styling using Prism design tokens. It provides a clean, accessible way to organize and present content in collapsible sections.

## Anatomy

```
┌─────────────────────────────────────┐
│  ▼ Section Header                   │  ← Header (clickable)
├─────────────────────────────────────┤
│                                     │
│  Content area with text, lists,     │  ← Content (collapsible)
│  images, or other elements          │
│                                     │
└─────────────────────────────────────┘
```

## Basic Usage

### Single Item

```html
<prism-accordion>
  <prism-accordion-item label="Getting Started">
    <p>Learn the basics of our platform and get up and running quickly.</p>
  </prism-accordion-item>
</prism-accordion>
```

### Multiple Items

```html
<prism-accordion>
  <prism-accordion-item label="Section 1">
    <p>Content for section 1</p>
  </prism-accordion-item>
  <prism-accordion-item label="Section 2">
    <p>Content for section 2</p>
  </prism-accordion-item>
  <prism-accordion-item label="Section 3">
    <p>Content for section 3</p>
  </prism-accordion-item>
</prism-accordion>
```

## Behavior

### Single Open (Default)
By default, only one accordion item can be open at a time. Opening a new item will close the previously open item.

```html
<prism-accordion>
  <prism-accordion-item label="Item 1">Content 1</prism-accordion-item>
  <prism-accordion-item label="Item 2">Content 2</prism-accordion-item>
</prism-accordion>
```

### Multiple Open
Set the `allow-multiple` attribute to allow multiple items to be open simultaneously.

```html
<prism-accordion allow-multiple>
  <prism-accordion-item label="Item 1">Content 1</prism-accordion-item>
  <prism-accordion-item label="Item 2">Content 2</prism-accordion-item>
</prism-accordion>
```

## Sizes

### Small (s)
Use small accordions in dense interfaces or when space is limited.

```html
<prism-accordion size="s">
  <prism-accordion-item label="Compact Section">
    <p>This is a small accordion with compact spacing.</p>
  </prism-accordion-item>
</prism-accordion>
```

### Medium (m) - Default
Use medium accordions for most standard use cases.

```html
<prism-accordion size="m">
  <prism-accordion-item label="Standard Section">
    <p>This is a medium accordion with standard spacing.</p>
  </prism-accordion-item>
</prism-accordion>
```

### Large (l)
Use large accordions for main content areas or when you want to emphasize readability.

```html
<prism-accordion size="l">
  <prism-accordion-item label="Large Section">
    <p>This is a large accordion with generous spacing.</p>
  </prism-accordion-item>
</prism-accordion>
```

## Content Types

### Text Content

```html
<prism-accordion-item label="Description">
  <p>This section contains plain text content. It's perfect for descriptions, instructions, or any textual information that needs to be organized in a collapsible format.</p>
</prism-accordion-item>
```

### List Content

```html
<prism-accordion-item label="Features">
  <p>Here's a list of features:</p>
  <ul>
    <li>Multi-brand support</li>
    <li>Theme switching</li>
    <li>Accessibility features</li>
    <li>Design token integration</li>
  </ul>
</prism-accordion-item>
```

### Mixed Content

```html
<prism-accordion-item label="Mixed Content">
  <h3>Section Title</h3>
  <p>This section contains mixed content including headings, paragraphs, and lists.</p>
  <h4>Subsection</h4>
  <p>You can include any HTML content within accordion items.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</prism-accordion-item>
```

### Code Content

```html
<prism-accordion-item label="Code Example">
  <p>Example code snippet:</p>
  <pre><code>&lt;prism-accordion&gt;
  &lt;prism-accordion-item label="Example"&gt;
    &lt;p&gt;Content here&lt;/p&gt;
  &lt;/prism-accordion-item&gt;
&lt;/prism-accordion&gt;</code></pre>
</prism-accordion-item>
```

## Common Use Cases

### FAQ Section

```html
<prism-accordion>
  <prism-accordion-item label="What is Prism Design System?">
    <p>Prism is a comprehensive design system that provides consistent, accessible, and beautiful components for building modern web applications.</p>
  </prism-accordion-item>
  <prism-accordion-item label="How do I use the components?">
    <p>Components are built on Spectrum Web Components and can be used in any web application. Simply import the component files and use the custom HTML elements in your markup.</p>
  </prism-accordion-item>
  <prism-accordion-item label="Can I customize the styling?">
    <p>Yes! All components use CSS custom properties from the Prism design tokens, making it easy to customize colors, typography, spacing, and other design properties while maintaining consistency.</p>
  </prism-accordion-item>
</prism-accordion>
```

### Documentation Sections

```html
<prism-accordion>
  <prism-accordion-item label="Getting Started">
    <h3>Quick Start</h3>
    <p>Learn the basics of our platform and get up and running quickly.</p>
    <ol>
      <li>Create your account</li>
      <li>Complete your profile</li>
      <li>Explore the dashboard</li>
    </ol>
  </prism-accordion-item>
  <prism-accordion-item label="Advanced Features">
    <h3>Powerful Tools</h3>
    <p>Discover advanced features that will help you get the most out of our platform.</p>
    <ul>
      <li>API integration</li>
      <li>Custom workflows</li>
      <li>Advanced analytics</li>
    </ul>
  </prism-accordion-item>
</prism-accordion>
```

### Settings Panels

```html
<prism-accordion>
  <prism-accordion-item label="Account Settings">
    <form>
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email">
      <label for="name">Display Name</label>
      <input type="text" id="name" name="name">
    </form>
  </prism-accordion-item>
  <prism-accordion-item label="Privacy Settings">
    <form>
      <label>
        <input type="checkbox" name="notifications">
        Email notifications
      </label>
      <label>
        <input type="checkbox" name="analytics">
        Analytics tracking
      </label>
    </form>
  </prism-accordion-item>
</prism-accordion>
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
- Use clear, descriptive labels for accordion headers
- Group related content logically
- Use single open for sequential content
- Use multiple open for independent content sections
- Keep content concise and scannable

### Don'ts
- Don't use accordions for critical information that should always be visible
- Don't nest accordions inside other accordions
- Don't use vague or unclear header labels
- Don't put too much content in a single accordion item
- Don't use accordions for navigation

## Accessibility

The Prism Accordion component is built on Spectrum Web Components and includes:

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space keys
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **High Contrast**: Support for high contrast mode
- **Semantic HTML**: Proper heading structure and landmarks

## Implementation

### Basic Implementation

```html
<prism-accordion>
  <prism-accordion-item label="Section 1">
    <p>Content for section 1</p>
  </prism-accordion-item>
</prism-accordion>
```

### With Event Handling

```javascript
const accordion = document.querySelector('prism-accordion');
accordion.addEventListener('sp-accordion-item-toggle', (event) => {
  console.log('Accordion item toggled:', event.detail);
});
```

### Dynamic Content

```javascript
const accordion = document.querySelector('prism-accordion');

// Add new accordion item
const newItem = document.createElement('prism-accordion-item');
newItem.setAttribute('label', 'New Section');
newItem.innerHTML = '<p>Dynamic content</p>';
accordion.appendChild(newItem);
```

## Design Tokens

The accordion component uses the following design tokens:

### Colors
- `--quest-light-text-primary` / `--quest-dark-text-primary`
- `--quest-light-text-secondary` / `--quest-dark-text-secondary`
- `--quest-light-border-subtle` / `--quest-dark-border-subtle`
- `--quest-light-surface-background-default` / `--quest-dark-surface-background-default`
- `--quest-light-surface-background-subtle` / `--quest-dark-surface-background-subtle`

### Typography
- `--quest-light-font-body` / `--quest-dark-font-body`
- `--volt-light-font-body` / `--volt-dark-font-body`
- `--quest-light-font-weight-semibold` / `--quest-dark-font-weight-semibold`
- `--quest-light-font-size-body-medium` / `--quest-dark-font-size-body-medium`

### Spacing
- `--quest-light-space-16` / `--quest-dark-space-16`
- `--quest-light-space-20` / `--quest-dark-space-20`
- `--volt-light-space-16` / `--volt-dark-space-16`
- `--volt-light-space-20` / `--volt-dark-space-20`

### Border Radius
- `--quest-light-corner-radius-3` / `--quest-dark-corner-radius-3`
- `--volt-light-corner-radius-3` / `--volt-dark-corner-radius-3`

## Browser Support

The Prism Accordion component supports all modern browsers that support:

- Custom Elements
- CSS Custom Properties
- ES6 Modules

## Related Components

- [Button](../Button/Button.md) - Interactive action elements
- [Card](../Card/Card.md) - Content containers
- [Tabs](../Tabs/Tabs.md) - Tabbed content navigation
- [Collapsible](../Collapsible/Collapsible.md) - Single collapsible content

## Changelog

### v1.0.0
- Initial release
- Multi-brand support (Quest, Volt)
- Theme support (Light, Dark)
- Single and multiple open modes
- Size variations
- Accessibility features
- Design token integration
