/**
 * Adapted from Spectrum Web Components
 * Original Copyright 2025 Adobe - Apache License 2.0
 * Modified for Multi-brand Design System (VOLT & Quest)
 */
import { html } from 'lit';
import './Button.js';

// Import the consolidated CSS tokens
import '../../tokens/csstokens.css';
// Import component-specific styles
import './Button.css';

export default {
  title: 'Components/Button',
  component: 'prism-button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'negative', 'link colored', 'link grey'],
      description: 'Button variant style - determines the visual appearance and semantic meaning',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'The size of the button. Affects padding, font size, and overall dimensions.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' }
      }
    },
    disabled: { 
      control: 'boolean',
      description: 'Disable this button. It will not receive focus or events.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: { 
      control: 'text', 
      defaultValue: 'Button',
      description: 'The text content displayed inside the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' }
      }
    },
    pending: {
      control: 'boolean',
      description: 'Shows the pending state of the button. Useful for loading states.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    treatment: {
      control: 'select',
      options: ['fill', 'outline', 'text'],
      description: 'The visual treatment to apply to the button. Controls the background and border styling.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fill' }
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Prism Button Component

A customizable button component built with Spectrum Web Components and Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes  
- **Multiple variants**: Primary, Secondary, Success, Warning, Negative, and Link styles
- **Size variations**: Small, Medium, and Large sizes
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling

## Usage

\`\`\`html
<prism-button variant="primary" size="m">Click me</prism-button>
<prism-button variant="secondary" size="l" disabled>Disabled</prism-button>
<prism-button variant="link colored">Link button</prism-button>
\`\`\`

## Brand & Theme Switching

Use the theme switcher in the Storybook toolbar to see how buttons look across different brands and themes:
- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)
        `
      }
    }
  }
};

const renderButton = ({ variant, size, disabled, label }) => html`
  <prism-button variant="${variant}" size="${size || 'm'}" ?disabled="${disabled}">
    ${label}
  </prism-button>
`;

/**
 * Primary button - the main call-to-action button
 * @example
 * <prism-button variant="primary" size="m">Get started</prism-button>
 */
export const Primary = (args) => renderButton({ ...args, variant: 'primary', label: 'Get started' });
Primary.args = {
  variant: 'primary',
  size: 'm',
  disabled: false
};


export const Secondary = (args) => renderButton({ ...args, variant: 'secondary', label: 'Get started' });
Secondary.args = {
  variant: 'secondary',
  size: 'm',
  disabled: false
};

export const AllVariants = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    <prism-button variant="primary" size="m">Primary Button</prism-button>
    <prism-button variant="secondary" size="m">Secondary Button</prism-button>
    <prism-button variant="success" size="m">Success Button</prism-button>
    <prism-button variant="warning" size="m">Warning Button</prism-button>
    <prism-button variant="negative" size="m">Negative Button</prism-button>
    <prism-button variant="link colored" size="m">Link Colored</prism-button>
    <prism-button variant="link grey" size="m">Link Grey</prism-button>
  </div>
`;

/**
 * Default button states - enabled and disabled
 * @example
 * <prism-button>Click Me</prism-button>
 * <prism-button disabled>Click Me</prism-button>
 */
export const Default = (args) => html`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <prism-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}">
      ${args.label}
    </prism-button>
    <prism-button variant="${args.variant}" size="${args.size}" disabled>
      ${args.label}
    </prism-button>
  </div>
`;
Default.args = {
  variant: 'primary',
  size: 'm',
  disabled: false,
  label: 'Click Me'
};

/**
 * Buttons with icons - showing different icon placements
 * @example
 * <prism-button>Help</prism-button>
 * <prism-button disabled>Help</prism-button>
 */
export const WithIcon = () => html`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; gap: 1rem; align-items: center;">
      <prism-button variant="primary" size="m">Help</prism-button>
      <prism-button variant="primary" size="m" disabled>Help</prism-button>
    </div>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <prism-button variant="secondary" size="m">Help</prism-button>
      <prism-button variant="secondary" size="m" disabled>Help</prism-button>
    </div>
  </div>
`;

/**
 * Icon-only buttons - compact buttons with just icons
 * @example
 * <prism-button>?</prism-button>
 * <prism-button disabled>?</prism-button>
 */
export const WithIconOnly = () => html`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <prism-button variant="primary" size="m">?</prism-button>
    <prism-button variant="primary" size="m" disabled>?</prism-button>
    <prism-button variant="secondary" size="m">?</prism-button>
    <prism-button variant="secondary" size="m" disabled>?</prism-button>
  </div>
`;

export const AllSizes = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    <prism-button variant="primary" size="s">Small</prism-button>
    <prism-button variant="primary" size="m">Medium</prism-button>
    <prism-button variant="primary" size="l">Large</prism-button>
  </div>
`;

export const DisabledStates = () => html`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    <prism-button variant="primary" size="m" disabled>Primary Disabled</prism-button>
    <prism-button variant="secondary" size="m" disabled>Secondary Disabled</prism-button>
    <prism-button variant="success" size="m" disabled>Success Disabled</prism-button>
    <prism-button variant="warning" size="m" disabled>Warning Disabled</prism-button>
    <prism-button variant="negative" size="m" disabled>Negative Disabled</prism-button>
    <prism-button variant="link colored" size="m" disabled>Link Colored Disabled</prism-button>
    <prism-button variant="link grey" size="m" disabled>Link Grey Disabled</prism-button>
  </div>
`;

/**
 * Button groups - showing how buttons work together
 * @example
 * <div class="button-group">
 *   <prism-button variant="primary">Save</prism-button>
 *   <prism-button variant="secondary">Cancel</prism-button>
 * </div>
 */
export const ButtonGroups = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Primary Action Group</h4>
      <div style="display: flex; gap: 0.5rem;">
        <prism-button variant="primary" size="m">Save</prism-button>
        <prism-button variant="secondary" size="m">Cancel</prism-button>
      </div>
    </div>
    
    <div>
      <h4>Destructive Action Group</h4>
      <div style="display: flex; gap: 0.5rem;">
        <prism-button variant="negative" size="m">Delete</prism-button>
        <prism-button variant="secondary" size="m">Cancel</prism-button>
      </div>
    </div>
    
    <div>
      <h4>Link Action Group</h4>
      <div style="display: flex; gap: 0.5rem;">
        <prism-button variant="link colored" size="m">View Details</prism-button>
        <prism-button variant="link grey" size="m">Edit</prism-button>
      </div>
    </div>
  </div>
`;

/**
 * Form integration - showing buttons in form contexts
 * @example
 * <form>
 *   <prism-button type="submit" variant="primary">Submit</prism-button>
 *   <prism-button type="button" variant="secondary">Reset</prism-button>
 * </form>
 */
export const FormIntegration = () => html`
  <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
    <div>
      <label for="email" style="display: block; margin-bottom: 0.5rem;">Email Address</label>
      <input type="email" id="email" name="email" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div>
      <label for="password" style="display: block; margin-bottom: 0.5rem;">Password</label>
      <input type="password" id="password" name="password" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <prism-button type="button" variant="secondary" size="m">Cancel</prism-button>
      <prism-button type="submit" variant="primary" size="m">Sign In</prism-button>
    </div>
  </form>
`;