# Prism Alert Dialog Component

A customizable alert dialog component built with Spectrum Web Components and Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes  
- **Multiple variants**: Default, Destructive, Warning, and Success styles
- **Size variations**: Small, Medium, and Large sizes
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling
- **Event handling**: Emits confirm, cancel, and close events

## Usage

### Basic Usage

```html
<prism-alert-dialog 
  heading="Confirm Action" 
  content="Are you sure you want to continue?"
  primary-text="Confirm"
  secondary-text="Cancel">
</prism-alert-dialog>
```

### Destructive Action

```html
<prism-alert-dialog 
  variant="destructive"
  heading="Delete Item" 
  content="Are you sure you want to delete this item?"
  primary-text="Delete"
  secondary-text="Cancel"
  primary-variant="negative">
</prism-alert-dialog>
```

### Single Action Dialog

```html
<prism-alert-dialog 
  heading="Information"
  content="Your changes have been saved successfully."
  primary-text="OK">
</prism-alert-dialog>
```

## API

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `string` | `'default'` | Visual variant: `default`, `destructive`, `warning`, `success` |
| `size` | `string` | `'medium'` | Dialog size: `small`, `medium`, `large` |
| `heading` | `string` | `'Alert'` | Dialog heading text |
| `content` | `string` | `'Are you sure you want to continue?'` | Dialog content text |
| `primary-text` | `string` | `'Confirm'` | Primary button text |
| `secondary-text` | `string` | `'Cancel'` | Secondary button text (optional) |
| `primary-variant` | `string` | `'primary'` | Primary button variant |
| `secondary-variant` | `string` | `'secondary'` | Secondary button variant |
| `open` | `boolean` | `false` | Whether the dialog is open |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `open` | `boolean` | Get/set the dialog open state |

### Methods

| Method | Description |
|--------|-------------|
| `open()` | Opens the dialog |
| `close()` | Closes the dialog |

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| `confirm` | Fired when primary button is clicked | `{ bubbles: true }` |
| `cancel` | Fired when secondary button is clicked | `{ bubbles: true }` |
| `close` | Fired when dialog is closed | `{ bubbles: true }` |

## Styling

The component uses Prism design tokens for consistent styling across brands and themes:

- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)

## Accessibility

- Built on Spectrum Web Components with proper ARIA support
- Focus management and keyboard navigation
- Screen reader friendly
- Proper semantic markup

## Examples

### Confirmation Dialog

```html
<prism-alert-dialog 
  heading="Save Changes"
  content="Do you want to save your changes before leaving?"
  primary-text="Save"
  secondary-text="Don't Save"
  primary-variant="primary">
</prism-alert-dialog>
```

### Warning Dialog

```html
<prism-alert-dialog 
  variant="warning"
  heading="Unsaved Changes"
  content="You have unsaved changes. Are you sure you want to leave this page?"
  primary-text="Leave"
  secondary-text="Stay"
  primary-variant="warning">
</prism-alert-dialog>
```

### Error Dialog

```html
<prism-alert-dialog 
  variant="destructive"
  heading="Connection Error"
  content="Unable to connect to the server. Please check your internet connection and try again."
  primary-text="Retry"
  secondary-text="Cancel"
  primary-variant="negative">
</prism-alert-dialog>
```
