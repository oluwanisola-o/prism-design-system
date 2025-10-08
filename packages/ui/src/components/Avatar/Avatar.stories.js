/**
 * Adapted from Spectrum Web Components
 * Original Copyright 2025 Adobe - Apache License 2.0
 * Modified for Multi-brand Design System (VOLT & Quest)
 */
import { html } from 'lit';
import './Avatar.js';

// Import the consolidated CSS tokens
import '../../tokens/csstokens.css';
// Import component-specific styles
import './Avatar.css';

export default {
  title: 'Components/Avatar',
  component: 'prism-avatar',
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL for the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    alt: {
      control: 'text',
      defaultValue: 'User Avatar',
      description: 'Alt text for the avatar image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'User Avatar' }
      }
    },
    initials: {
      control: 'text',
      defaultValue: 'JD',
      description: 'Initials to display when no image is provided',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'JD' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      description: 'The size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' }
      }
    },
    variant: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'The shape variant of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' }
      }
    },
    status: {
      control: 'select',
      options: ['online', 'away', 'busy', 'offline'],
      description: 'The status indicator for the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the avatar is clickable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Whether the avatar is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
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

\`\`\`html
<prism-avatar src="user.jpg" alt="John Doe" size="m"></prism-avatar>
<prism-avatar initials="JD" size="l" status="online"></prism-avatar>
<prism-avatar variant="square" size="m">AB</prism-avatar>
\`\`\`

## Brand & Theme Switching

Use the theme switcher in the Storybook toolbar to see how avatars look across different brands and themes:
- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)
        `
      }
    }
  }
};

const renderAvatar = ({ 
  src, 
  alt, 
  initials, 
  size, 
  variant, 
  status, 
  clickable, 
  loading 
}) => {
  const attributes = [];
  if (src) attributes.push(`src="${src}"`);
  if (alt) attributes.push(`alt="${alt}"`);
  if (initials) attributes.push(`initials="${initials}"`);
  if (size) attributes.push(`size="${size}"`);
  if (variant) attributes.push(`variant="${variant}"`);
  if (status) attributes.push(`status="${status}"`);
  if (clickable) attributes.push('clickable');
  if (loading) attributes.push('loading');

  return html`
    <prism-avatar ${attributes.join(' ')}></prism-avatar>
  `;
};

/**
 * Default avatar with initials
 * @example
 * <prism-avatar initials="JD" size="m"></prism-avatar>
 */
export const Default = (args) => html`
  <prism-avatar 
    initials="${args.initials || 'JD'}" 
    alt="${args.alt || 'John Doe'}" 
    size="${args.size || 'm'}">
  </prism-avatar>
`;
Default.args = {
  initials: 'JD',
  size: 'm',
  alt: 'John Doe'
};

/**
 * Avatar with image
 * @example
 * <prism-avatar src="user.jpg" alt="John Doe" size="m"></prism-avatar>
 */
export const WithImage = (args) => html`
  <prism-avatar 
    src="${args.src || 'https://i.pinimg.com/1200x/f9/9b/95/f99b9555c76d4bdb1915890df4a47abd.jpg'}" 
    alt="${args.alt || 'User'}" 
    size="${args.size || 'm'}">
  </prism-avatar>
`;
WithImage.args = {
  src: 'https://i.pinimg.com/1200x/f9/9b/95/f99b9555c76d4bdb1915890df4a47abd.jpg',
  alt: 'User',
  size: 'm'
};

/**
 * Multiple image examples - showing different image sources
 * @example
 * <div>
 *   <prism-avatar src="image1.jpg" alt="User 1"></prism-avatar>
 *   <prism-avatar src="image2.jpg" alt="User 2"></prism-avatar>
 * </div>
 */
export const ImageExamples = () => html`
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
        src="https://i.pinimg.com/1200x/e3/6c/ad/e36cad3ddc83ff5c9da0dd85204d95f4.jpg" 
        alt="Avatar 1" 
        size="m">
      </prism-avatar>
      <span style="font-size: 12px;">User 1</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
        src="https://i.pinimg.com/1200x/f9/9b/95/f99b9555c76d4bdb1915890df4a47abd.jpg" 
        alt="Avatar 2" 
        size="m">
      </prism-avatar>
      <span style="font-size: 12px;">User 2</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
        src="https://i.pinimg.com/1200x/3e/12/f0/3e12f02797fe12d16dc6b689b525049d.jpg" 
        alt="User 3" 
        size="m">
      </prism-avatar>
      <span style="font-size: 12px;">User 3</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
        src="https://i.pinimg.com/736x/59/e8/c7/59e8c79b7d5fd4b0441de538972cf0a2.jpg" 
        alt="Avatar 4" 
        size="m">
      </prism-avatar>
      <span style="font-size: 12px;">User 4</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
        src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg" 
        alt="Avatar 5" 
        size="m">
      </prism-avatar>
      <span style="font-size: 12px;">User 5</span>
    </div>
  </div>
`;

/**
 * Image with fallback - showing how avatars handle broken images
 * @example
 * <prism-avatar src="broken-image.jpg" alt="John Doe" initials="JD"></prism-avatar>
 */

/**
 * All sizes - showing different avatar sizes
 * @example
 * <div>
 *   <prism-avatar size="xs">XS</prism-avatar>
 *   <prism-avatar size="l">L</prism-avatar>
 * </div>
 */
export const AllSizes = () => html`
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
      src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg" 
      alt="XS" 
      size="xs" 
      initials="XS"></prism-avatar>
      <span style="font-size: 12px;">XS</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
      src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg" 
      size="s"
      initials="S"></prism-avatar>
      <span style="font-size: 12px;">S</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
      src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg"
      size="m"
       initials="M"></prism-avatar>
      <span style="font-size: 12px;">M</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar 
      src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg"
      size="l"
      initials="L"></prism-avatar>
      <span style="font-size: 12px;">L</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <prism-avatar src="https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg"
      size="xl" initials="XL"></prism-avatar>
      <span style="font-size: 12px;">XL</span>
    </div>
  </div>
`;

/**
 * Shape variants - showing different avatar shapes
 * @example
 * <div>
 *   <prism-avatar variant="circle">C</prism-avatar>
 *   <prism-avatar variant="square">S</prism-avatar>
 * </div>
 */


/**
 * Avatar group - showing multiple avatars together
 * @example
 * <div class="avatar-group">
 *   <prism-avatar size="s">A</prism-avatar>
 *   <prism-avatar size="s">B</prism-avatar>
 * </div>
 */
export const AvatarGroup = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <div class="avatar-group">
        <prism-avatar src= "https://i.pinimg.com/736x/9f/67/5d/9f675d2373eb8a258338e01120aa8844.jpg" alt="User 1" size="m"></prism-avatar>
        <prism-avatar src= "https://i.pinimg.com/1200x/e3/6c/ad/e36cad3ddc83ff5c9da0dd85204d95f4.jpg" alt="User 2" size="m"></prism-avatar>
        <prism-avatar src= "https://i.pinimg.com/1200x/3e/12/f0/3e12f02797fe12d16dc6b689b525049d.jpg"  alt="User 3" size="m"></prism-avatar>
        <prism-avatar src="https://i.pinimg.com/1200x/f9/9b/95/f99b9555c76d4bdb1915890df4a47abd.jpg" alt="User 4" size="m"></prism-avatar>
      </div>
    </div>
    
    
    
    
  </div>
`;
