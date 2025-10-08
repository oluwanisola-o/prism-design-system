# Prism Avatar Component

A customizable avatar component built with Spectrum Web Components and Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes  
- **Multiple sizes**: Extra small to extra extra large
- **Shape variants**: Circle, square, and rounded square
- **Status indicators**: Online, away, busy, and offline states
- **Image support**: Display user photos with fallback to initials
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling

## Usage

### Basic Usage

```html
<prism-avatar initials="JD" size="m" alt="John Doe"></prism-avatar>
```

### With Image

```html
<prism-avatar 
  src="https://example.com/user.jpg" 
  alt="John Doe" 
  size="l">
</prism-avatar>
```

### With Image and Fallback

```html
<prism-avatar 
  src="https://example.com/user.jpg" 
  alt="John Doe" 
  initials="JD"
  size="l">
</prism-avatar>
```

### Using Placeholder Images

For development and testing, you can use placeholder image services:

```html
<!-- Using Pravatar (recommended) -->
<prism-avatar 
  src="https://i.pravatar.cc/100?img=1" 
  alt="User 1" 
  size="m">
</prism-avatar>

<!-- Using DiceBear Avatars -->
<prism-avatar 
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
  alt="John Doe" 
  size="m">
</prism-avatar>

<!-- Using UI Avatars -->
<prism-avatar 
  src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
  alt="John Doe" 
  size="m">
</prism-avatar>
```

### With Status

```html
<prism-avatar 
  initials="JD" 
  size="m" 
  status="online"
  alt="John Doe">
</prism-avatar>
```

### Different Shapes

```html
<prism-avatar variant="circle" initials="JD" size="m"></prism-avatar>
<prism-avatar variant="square" initials="JD" size="m"></prism-avatar>
<prism-avatar variant="rounded" initials="JD" size="m"></prism-avatar>
```

## API

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `src` | `string` | `undefined` | Image source URL for the avatar |
| `alt` | `string` | `'User Avatar'` | Alt text for the avatar image |
| `initials` | `string` | `undefined` | Initials to display when no image is provided |
| `size` | `string` | `'m'` | Avatar size: `xs`, `s`, `m`, `l`, `xl`, `xxl` |
| `variant` | `string` | `'circle'` | Shape variant: `circle`, `square`, `rounded` |
| `status` | `string` | `undefined` | Status indicator: `online`, `away`, `busy`, `offline` |
| `clickable` | `boolean` | `false` | Whether the avatar is clickable |
| `loading` | `boolean` | `false` | Whether the avatar is in a loading state |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | `string` | Get/set the image source |
| `alt` | `string` | Get/set the alt text |
| `initials` | `string` | Get/set the initials text |

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| `click` | Fired when avatar is clicked (if clickable) | `{ bubbles: true }` |
| `focus` | Fired when avatar receives focus | `{ bubbles: true }` |
| `blur` | Fired when avatar loses focus | `{ bubbles: true }` |
| `load` | Fired when image loads successfully | `{ bubbles: true }` |
| `error` | Fired when image fails to load | `{ bubbles: true }` |

## Sizes

| Size | Dimensions | Font Size | Use Case |
|------|------------|-----------|----------|
| `xs` | 24px × 24px | 10px | Dense lists, compact UI |
| `s` | 32px × 32px | 12px | Small user lists |
| `m` | 40px × 40px | 14px | Default size, most common |
| `l` | 48px × 48px | 16px | User profiles, headers |
| `xl` | 64px × 64px | 20px | Large user cards |
| `xxl` | 80px × 80px | 24px | Hero sections, featured users |

## Status Indicators

| Status | Color | Description |
|--------|-------|-------------|
| `online` | Green | User is currently active |
| `away` | Yellow/Orange | User is away but available |
| `busy` | Red | User is busy or in a meeting |
| `offline` | Gray | User is offline (with reduced opacity) |

## Styling

The component uses Prism design tokens for consistent styling across brands and themes:

- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)

## Accessibility

- Built on Spectrum Web Components with proper ARIA support
- Supports alt text for screen readers
- Keyboard navigation support
- Proper focus management

## Examples

### User Profile Card

```html
<div class="user-card">
  <prism-avatar 
    src="user.jpg" 
    alt="John Doe" 
    size="xl" 
    status="online">
  </prism-avatar>
  <h3>John Doe</h3>
  <p>Software Engineer</p>
</div>
```

### User List Item

```html
<div class="user-list-item">
  <prism-avatar 
    initials="JS" 
    size="m" 
    status="away"
    alt="Jane Smith">
  </prism-avatar>
  <div>
    <div class="name">Jane Smith</div>
    <div class="status">Away</div>
  </div>
</div>
```

### Avatar Group

```html
<div class="avatar-group">
  <prism-avatar size="s" initials="A"></prism-avatar>
  <prism-avatar size="s" initials="B"></prism-avatar>
  <prism-avatar size="s" initials="C"></prism-avatar>
  <prism-avatar size="s" initials="+3"></prism-avatar>
</div>
```

### Loading State

```html
<prism-avatar loading size="m"></prism-avatar>
```

### Clickable Avatar

```html
<prism-avatar 
  clickable 
  initials="JD" 
  size="l"
  @click="handleAvatarClick">
</prism-avatar>
```
