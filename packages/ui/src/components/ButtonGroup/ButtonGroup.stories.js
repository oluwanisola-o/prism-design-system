/**
 * Adapted from Spectrum Web Components
 * Original Copyright 2025 Adobe - Apache License 2.0
 * Modified for Multi-brand Design System (VOLT & Quest)
 */
import { html } from 'lit';
import './ButtonGroup.js';

// Import the consolidated CSS tokens
import '../../tokens/csstokens.css';
// Import component-specific styles
import './ButtonGroup.css';

export default {
  title: 'Components/ButtonGroup',
  component: 'prism-button-group',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'segmented', 'toggle'],
      description: 'Button group variant - determines the visual style',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'The size of the buttons in the group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' }
      }
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the button group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire button group is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    buttonCount: {
      control: 'number',
      defaultValue: 3,
      description: 'Number of buttons to create (when using default content)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
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

\`\`\`html
<prism-button-group variant="segmented" size="m">
  <prism-button variant="primary">Option 1</prism-button>
  <prism-button variant="secondary">Option 2</prism-button>
  <prism-button variant="secondary">Option 3</prism-button>
</prism-button-group>
\`\`\`

## Brand & Theme Switching

Use the theme switcher in the Storybook toolbar to see how button groups look across different brands and themes:
- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)
        `
      }
    }
  }
};

const renderButtonGroup = ({ 
  variant, 
  size, 
  orientation, 
  disabled, 
  buttonCount,
  content 
}) => {
  const attributes = [];
  if (variant) attributes.push(`variant="${variant}"`);
  if (size) attributes.push(`size="${size}"`);
  if (orientation) attributes.push(`orientation="${orientation}"`);
  if (disabled) attributes.push('disabled');
  if (buttonCount) attributes.push(`button-count="${buttonCount}"`);

  return html`
    <prism-button-group ${attributes.join(' ')}>
      ${content || ''}
    </prism-button-group>
  `;
};

/**
 * Default button group - basic button group
 * @example
 * <prism-button-group button-count="3"></prism-button-group>
 */
export const Default = (args) => renderButtonGroup({ ...args });
Default.args = {
  variant: 'default',
  size: 'm',
  orientation: 'horizontal',
  disabled: false,
  buttonCount: 3
};

/**
 * Segmented button group - for mutually exclusive options
 * @example
 * <prism-button-group variant="segmented">...</prism-button-group>
 */
export const Segmented = (args) => renderButtonGroup({ 
  ...args, 
  variant: 'segmented',
  content: html`
    <prism-button variant="primary" selected>Option 1</prism-button>
    <prism-button variant="secondary">Option 2</prism-button>
    <prism-button variant="secondary">Option 3</prism-button>
  `
});
Segmented.args = {
  variant: 'segmented',
  size: 'm',
  orientation: 'horizontal',
  disabled: false
};

/**
 * Toggle button group - for multiple selection
 * @example
 * <prism-button-group variant="toggle">...</prism-button-group>
 */
export const Toggle = (args) => renderButtonGroup({ 
  ...args, 
  variant: 'toggle',
  content: html`
    <prism-button variant="primary" selected>Bold</prism-button>
    <prism-button variant="secondary">Italic</prism-button>
    <prism-button variant="secondary" selected>Underline</prism-button>
  `
});
Toggle.args = {
  variant: 'toggle',
  size: 'm',
  orientation: 'horizontal',
  disabled: false
};

/**
 * All variants - showing different button group styles
 * @example
 * <div>
 *   <prism-button-group variant="default">Default</prism-button-group>
 *   <prism-button-group variant="segmented">Segmented</prism-button-group>
 * </div>
 */
export const AllVariants = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Default Button Group</h4>
      <prism-button-group variant="default" size="m">
        <prism-button variant="primary">Save</prism-button>
        <prism-button variant="secondary">Cancel</prism-button>
        <prism-button variant="secondary">Reset</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Segmented Button Group</h4>
      <prism-button-group variant="segmented" size="m">
        <prism-button variant="primary" selected>List</prism-button>
        <prism-button variant="secondary">Grid</prism-button>
        <prism-button variant="secondary">Card</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Toggle Button Group</h4>
      <prism-button-group variant="toggle" size="m">
        <prism-button variant="primary" selected>Bold</prism-button>
        <prism-button variant="secondary">Italic</prism-button>
        <prism-button variant="secondary" selected>Underline</prism-button>
      </prism-button-group>
    </div>
  </div>
`;

/**
 * Size variations - showing different button group sizes
 * @example
 * <div>
 *   <prism-button-group size="s">Small</prism-button-group>
 *   <prism-button-group size="l">Large</prism-button-group>
 * </div>
 */
export const AllSizes = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Small Button Group</h4>
      <prism-button-group variant="segmented" size="s">
        <prism-button variant="primary" selected>S</prism-button>
        <prism-button variant="secondary">M</prism-button>
        <prism-button variant="secondary">L</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Medium Button Group (Default)</h4>
      <prism-button-group variant="segmented" size="m">
        <prism-button variant="primary" selected>Small</prism-button>
        <prism-button variant="secondary">Medium</prism-button>
        <prism-button variant="secondary">Large</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Large Button Group</h4>
      <prism-button-group variant="segmented" size="l">
        <prism-button variant="primary" selected>Small</prism-button>
        <prism-button variant="secondary">Medium</prism-button>
        <prism-button variant="secondary">Large</prism-button>
      </prism-button-group>
    </div>
  </div>
`;

/**
 * Vertical orientation - showing vertical button groups
 * @example
 * <prism-button-group orientation="vertical">...</prism-button-group>
 */
export const Vertical = () => html`
  <div style="display: flex; gap: 2rem;">
    <div>
      <h4>Vertical Default</h4>
      <prism-button-group variant="default" orientation="vertical" size="m">
        <prism-button variant="primary">Top</prism-button>
        <prism-button variant="secondary">Middle</prism-button>
        <prism-button variant="secondary">Bottom</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Vertical Segmented</h4>
      <prism-button-group variant="segmented" orientation="vertical" size="m">
        <prism-button variant="primary" selected>Option 1</prism-button>
        <prism-button variant="secondary">Option 2</prism-button>
        <prism-button variant="secondary">Option 3</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Vertical Toggle</h4>
      <prism-button-group variant="toggle" orientation="vertical" size="m">
        <prism-button variant="primary" selected>Bold</prism-button>
        <prism-button variant="secondary">Italic</prism-button>
        <prism-button variant="secondary" selected>Underline</prism-button>
      </prism-button-group>
    </div>
  </div>
`;

/**
 * Disabled state - showing disabled button groups
 * @example
 * <prism-button-group disabled>...</prism-button-group>
 */
export const Disabled = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Disabled Default</h4>
      <prism-button-group variant="default" disabled size="m">
        <prism-button variant="primary">Save</prism-button>
        <prism-button variant="secondary">Cancel</prism-button>
        <prism-button variant="secondary">Reset</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Disabled Segmented</h4>
      <prism-button-group variant="segmented" disabled size="m">
        <prism-button variant="primary" selected>Option 1</prism-button>
        <prism-button variant="secondary">Option 2</prism-button>
        <prism-button variant="secondary">Option 3</prism-button>
      </prism-button-group>
    </div>
    
    <div>
      <h4>Disabled Toggle</h4>
      <prism-button-group variant="toggle" disabled size="m">
        <prism-button variant="primary" selected>Bold</prism-button>
        <prism-button variant="secondary">Italic</prism-button>
        <prism-button variant="secondary" selected>Underline</prism-button>
      </prism-button-group>
    </div>
  </div>
`;

/**
 * Real-world examples - showing button groups in context
 * @example
 * <div class="toolbar">
 *   <prism-button-group variant="toggle">Formatting</prism-button-group>
 *   <prism-button-group variant="segmented">View</prism-button-group>
 * </div>
 */
export const RealWorldExamples = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Text Editor Toolbar</h4>
      <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e5e5e5; border-radius: 8px; background: #f9f9f9;">
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
        
        <prism-button-group variant="default" size="s">
          <prism-button variant="primary">Save</prism-button>
          <prism-button variant="secondary">Cancel</prism-button>
        </prism-button-group>
      </div>
    </div>
    
    <div>
      <h4>View Options</h4>
      <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e5e5e5; border-radius: 8px; background: #f9f9f9;">
        <prism-button-group variant="segmented" size="m">
          <prism-button variant="primary" selected>List</prism-button>
          <prism-button variant="secondary">Grid</prism-button>
          <prism-button variant="secondary">Card</prism-button>
        </prism-button-group>
        
        <prism-button-group variant="segmented" size="m">
          <prism-button variant="primary" selected>All</prism-button>
          <prism-button variant="secondary">Recent</prism-button>
          <prism-button variant="secondary">Favorites</prism-button>
        </prism-button-group>
      </div>
    </div>
    
    <div>
      <h4>Filter Options</h4>
      <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e5e5e5; border-radius: 8px; background: #f9f9f9;">
        <prism-button-group variant="toggle" size="s">
          <prism-button variant="primary" selected>Images</prism-button>
          <prism-button variant="secondary">Videos</prism-button>
          <prism-button variant="secondary" selected>Documents</prism-button>
        </prism-button-group>
        
        <prism-button-group variant="segmented" size="s">
          <prism-button variant="primary" selected>Today</prism-button>
          <prism-button variant="secondary">Week</prism-button>
          <prism-button variant="secondary">Month</prism-button>
        </prism-button-group>
      </div>
    </div>
  </div>
`;

/**
 * Interactive example - showing how to handle button clicks
 * @example
 * <prism-button-group @buttonclick="handleClick">...</prism-button-group>
 */
export const Interactive = () => {
  const handleButtonClick = (event) => {
    console.log('Button clicked:', event.detail);
    alert(`Button "${event.detail.button.textContent}" was clicked!`);
  };

  return html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h4>Interactive Button Group</h4>
      <p>Click any button to see the event details in the console and an alert.</p>
      
      <prism-button-group 
        variant="segmented" 
        size="m"
        @buttonclick="${handleButtonClick}">
        <prism-button variant="primary" selected>Option 1</prism-button>
        <prism-button variant="secondary">Option 2</prism-button>
        <prism-button variant="secondary">Option 3</prism-button>
      </prism-button-group>
    </div>
  `;
};
