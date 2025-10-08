# Prism Button Group Component

A customizable button group component built with Spectrum Web Components and Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes  
- **Multiple variants**: Default, Segmented, and Toggle styles
- **Size variations**: Small, Medium, and Large sizes
- **Orientation support**: Horizontal and Vertical layouts
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling
- **Event handling**: Emits buttonclick events for individual button interactions

## Usage

### Basic Usage

```html
<prism-button-group variant="default" size="m">
  <prism-button variant="primary">Save</prism-button>
  <prism-button variant="secondary">Cancel</prism-button>
  <prism-button variant="secondary">Reset</prism-button>
</prism-button-group>
```

### Segmented Control

```html
<prism-button-group variant="segmented" size="m">
  <prism-button variant="primary" selected>List</prism-button>
  <prism-button variant="secondary">Grid</prism-button>
  <prism-button variant="secondary">Card</prism-button>
</prism-button-group>
```

### Toggle Group

```html
<prism-button-group variant="toggle" size="m">
  <prism-button variant="primary" selected>Bold</prism-button>
  <prism-button variant="secondary">Italic</prism-button>
  <prism-button variant="secondary" selected>Underline</prism-button>
</prism-button-group>
```

### Vertical Orientation

```html
<prism-button-group variant="segmented" orientation="vertical" size="m">
  <prism-button variant="primary" selected>Option 1</prism-button>
  <prism-button variant="secondary">Option 2</prism-button>
  <prism-button variant="secondary">Option 3</prism-button>
</prism-button-group>
```

## API

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `string` | `'default'` | Button group variant: `default`, `segmented`, `toggle` |
| `size` | `string` | `'m'` | Button size: `s`, `m`, `l` |
| `orientation` | `string` | `'horizontal'` | Layout orientation: `horizontal`, `vertical` |
| `disabled` | `boolean` | `false` | Whether the entire button group is disabled |
| `button-count` | `number` | `3` | Number of buttons to create (when using default content) |

### Methods

| Method | Description |
|--------|-------------|
| `addButton(buttonData)` | Add a button programmatically |
| `clearButtons()` | Remove all buttons from the group |

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| `buttonclick` | Fired when any button is clicked | `{ button: buttonData, event: clickEvent }` |
| `change` | Fired when the selection changes | `{ bubbles: true }` |
| `input` | Fired on input events | `{ bubbles: true }` |
| `focus` | Fired when the group receives focus | `{ bubbles: true }` |
| `blur` | Fired when the group loses focus | `{ bubbles: true }` |

## Variants

### Default
Standard button group with individual buttons that can be clicked independently.

### Segmented
Mutually exclusive selection - only one button can be selected at a time. Perfect for view options, filters, or mode selection.

### Toggle
Multiple selection - buttons can be toggled on/off independently. Perfect for formatting options, filters, or feature toggles.

## Sizes

| Size | Font Size | Padding | Use Case |
|------|-----------|---------|----------|
| `s` | 12px | 6px × 12px | Compact UI, dense layouts |
| `m` | 14px | 8px × 16px | Default size, most common |
| `l` | 16px | 10px × 20px | Large UI, prominent controls |

## Styling

The component uses Prism design tokens for consistent styling across brands and themes:

- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)

## Accessibility

- Built on Spectrum Web Components with proper ARIA support
- Keyboard navigation support
- Proper focus management
- Screen reader friendly

## Examples

### Text Editor Toolbar

```html
<div class="toolbar">
  <prism-button-group variant="toggle" size="s">
    <prism-button variant="primary" selected>Bold</prism-button>
    <prism-button variant="secondary">Italic</prism-button>
    <prism-button variant="secondary">Underline</prism-button>
  </prism-button-group>
  
  <prism-button-group variant="segmented" size="s">
    <prism-button variant="primary" selected>Left</prism-button>
    <prism-button variant="secondary">Center</prism-button>
    <prism-button variant="secondary">Right</prism-button>
  </prism-button-group>
</div>
```

### View Options

```html
<prism-button-group variant="segmented" size="m">
  <prism-button variant="primary" selected>List</prism-button>
  <prism-button variant="secondary">Grid</prism-button>
  <prism-button variant="secondary">Card</prism-button>
</prism-button-group>
```

### Filter Controls

```html
<prism-button-group variant="toggle" size="s">
  <prism-button variant="primary" selected>Images</prism-button>
  <prism-button variant="secondary">Videos</prism-button>
  <prism-button variant="secondary" selected>Documents</prism-button>
</prism-button-group>
```

### Action Buttons

```html
<prism-button-group variant="default" size="m">
  <prism-button variant="primary">Save</prism-button>
  <prism-button variant="secondary">Cancel</prism-button>
  <prism-button variant="secondary">Reset</prism-button>
</prism-button-group>
```

### Disabled State

```html
<prism-button-group variant="segmented" disabled size="m">
  <prism-button variant="primary" selected>Option 1</prism-button>
  <prism-button variant="secondary">Option 2</prism-button>
  <prism-button variant="secondary">Option 3</prism-button>
</prism-button-group>
```

### Programmatic Control

```html
<prism-button-group id="my-group" variant="segmented" size="m">
  <prism-button variant="primary" selected>Option 1</prism-button>
  <prism-button variant="secondary">Option 2</prism-button>
</prism-button-group>

<script>
  const group = document.getElementById('my-group');
  
  // Add a new button
  group.addButton({
    textContent: 'Option 3',
    variant: 'secondary'
  });
  
  // Handle button clicks
  group.addEventListener('buttonclick', (event) => {
    console.log('Button clicked:', event.detail.button);
  });
</script>
```
