/**
 * Adapted from Spectrum Web Components
 * Original Copyright 2025 Adobe - Apache License 2.0
 * Modified for Multi-brand Design System (VOLT & Quest)
 */
import { html } from 'lit';
import './AlertDialog.js';

// Import the consolidated CSS tokens
import '../../tokens/csstokens.css';
// Import component-specific styles
import './AlertDialog.css';

export default {
  title: 'Components/AlertDialog',
  component: 'prism-alert-dialog',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'warning', 'success'],
      description: 'Alert dialog variant - determines the visual style and semantic meaning',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the alert dialog. Affects width and font sizes.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    heading: { 
      control: 'text', 
      defaultValue: 'Confirm Action',
      description: 'The heading text displayed at the top of the dialog.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Confirm Action' }
      }
    },
    content: {
      control: 'text',
      defaultValue: 'Are you sure you want to continue? This action cannot be undone.',
      description: 'The main content text displayed in the dialog body.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Are you sure you want to continue? This action cannot be undone.' }
      }
    },
    primaryText: {
      control: 'text',
      defaultValue: 'Confirm',
      description: 'Text for the primary action button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Confirm' }
      }
    },
    secondaryText: {
      control: 'text',
      defaultValue: 'Cancel',
      description: 'Text for the secondary action button. Leave empty to hide.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' }
      }
    },
    primaryVariant: {
      control: 'select',
      options: ['primary', 'negative', 'warning', 'success'],
      description: 'Variant for the primary action button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    secondaryVariant: {
      control: 'select',
      options: ['secondary', 'primary', 'negative', 'warning', 'success'],
      description: 'Variant for the secondary action button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'secondary' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
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

\`\`\`html
<prism-alert-dialog 
  heading="Delete Item" 
  content="Are you sure you want to delete this item?"
  primary-text="Delete"
  secondary-text="Cancel"
  variant="destructive">
</prism-alert-dialog>
\`\`\`

## Events

- \`confirm\`: Fired when the primary button is clicked
- \`cancel\`: Fired when the secondary button is clicked  
- \`close\`: Fired when the dialog is closed

## Brand & Theme Switching

Use the theme switcher in the Storybook toolbar to see how alert dialogs look across different brands and themes:
- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)
        `
      }
    }
  }
};

const renderAlertDialog = ({ 
  variant, 
  size, 
  heading, 
  content, 
  primaryText, 
  secondaryText, 
  primaryVariant, 
  secondaryVariant 
}) => html`
  <prism-alert-dialog 
    variant="${variant || 'default'}" 
    size="${size || 'medium'}"
    heading="${heading}"
    content="${content}"
    primary-text="${primaryText}"
    secondary-text="${secondaryText}"
    primary-variant="${primaryVariant || 'primary'}"
    secondary-variant="${secondaryVariant || 'secondary'}">
  </prism-alert-dialog>
`;

/**
 * Default alert dialog - basic confirmation dialog
 * @example
 * <prism-alert-dialog heading="Confirm Action" content="Are you sure?"></prism-alert-dialog>
 */
export const Default = (args) => renderAlertDialog({ ...args });
Default.args = {
  variant: 'default',
  size: 'medium',
  heading: 'Disclaimer',
  content: 'Smart filters are nondestructive and will preserve your original images.',
  primaryText: 'Enable',
  secondaryText: 'Cancel',
  primaryVariant: 'primary',
  secondaryVariant: 'secondary'
};

/**
 * Destructive alert dialog - for dangerous actions like deletion
 * @example
 * <prism-alert-dialog variant="destructive" heading="Delete Item"></prism-alert-dialog>
 */
export const Destructive = (args) => renderAlertDialog({ ...args, variant: 'destructive' });
Destructive.args = {
  variant: 'destructive',
  size: 'medium',
  heading: 'Delete Item',
  content: 'Are you sure you want to delete this item? This action cannot be undone.',
  primaryText: 'Delete',
  secondaryText: 'Cancel',
  primaryVariant: 'negative',
  secondaryVariant: 'secondary'
};

/**
 * Warning alert dialog - for potentially problematic actions
 * @example
 * <prism-alert-dialog variant="warning" heading="Unsaved Changes"></prism-alert-dialog>
 */
export const Warning = (args) => renderAlertDialog({ ...args, variant: 'warning' });
Warning.args = {
  variant: 'warning',
  size: 'medium',
  heading: 'Unsaved Changes',
  content: 'You have unsaved changes. Are you sure you want to leave this page?',
  primaryText: 'Leave',
  secondaryText: 'Stay',
  primaryVariant: 'warning',
  secondaryVariant: 'secondary'
};

/**
 * Success alert dialog - for positive confirmations
 * @example
 * <prism-alert-dialog variant="success" heading="Publish Changes"></prism-alert-dialog>
 */
export const Success = (args) => renderAlertDialog({ ...args, variant: 'success' });
Success.args = {
  variant: 'success',
  size: 'medium',
  heading: 'Publish Changes',
  content: 'Are you ready to publish these changes to production?',
  primaryText: 'Publish',
  secondaryText: 'Cancel',
  primaryVariant: 'success',
  secondaryVariant: 'secondary'
};

/**
 * All variants - showing different alert dialog types
 * @example
 * <div>
 *   <prism-alert-dialog variant="default">Default</prism-alert-dialog>
 *   <prism-alert-dialog variant="destructive">Destructive</prism-alert-dialog>
 * </div>
 */
export const AllVariants = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Default Alert Dialog</h4>
      <prism-alert-dialog 
        variant="default"
        heading="Confirm Action"
        content="Are you sure you want to continue?"
        primary-text="Confirm"
        secondary-text="Cancel"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Destructive Alert Dialog</h4>
      <prism-alert-dialog 
        variant="destructive"
        heading="Delete Item"
        content="This action cannot be undone."
        primary-text="Delete"
        secondary-text="Cancel"
        primary-variant="negative"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Warning Alert Dialog</h4>
      <prism-alert-dialog 
        variant="warning"
        heading="Unsaved Changes"
        content="You have unsaved changes."
        primary-text="Leave"
        secondary-text="Stay"
        primary-variant="warning"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Success Alert Dialog</h4>
      <prism-alert-dialog 
        variant="success"
        heading="Publish Changes"
        content="Ready to publish to production?"
        primary-text="Publish"
        secondary-text="Cancel"
        primary-variant="success"
        open>
      </prism-alert-dialog>
    </div>
  </div>
`;

/**
 * Size variations - showing different dialog sizes
 * @example
 * <div>
 *   <prism-alert-dialog size="small">Small</prism-alert-dialog>
 *   <prism-alert-dialog size="large">Large</prism-alert-dialog>
 * </div>
 */
export const AllSizes = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Small Alert Dialog</h4>
      <prism-alert-dialog 
        size="small"
        heading="Quick Confirm"
        content="Continue?"
        primary-text="Yes"
        secondary-text="No"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Medium Alert Dialog (Default)</h4>
      <prism-alert-dialog 
        size="medium"
        heading="Confirm Action"
        content="Are you sure you want to continue? This action cannot be undone."
        primary-text="Confirm"
        secondary-text="Cancel"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Large Alert Dialog</h4>
      <prism-alert-dialog 
        size="large"
        heading="Important Decision Required"
        content="This is a more detailed explanation of what will happen when you confirm this action. Please read carefully before proceeding as this change will affect multiple systems and cannot be easily reversed."
        primary-text="I Understand, Proceed"
        secondary-text="Cancel"
        open>
      </prism-alert-dialog>
    </div>
  </div>
`;

/**
 * Single action dialogs - dialogs with only one button
 * @example
 * <prism-alert-dialog primary-text="OK"></prism-alert-dialog>
 */
export const SingleAction = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h4>Information Dialog</h4>
      <prism-alert-dialog 
        heading="Information"
        content="Your changes have been saved successfully."
        primary-text="OK"
        open>
      </prism-alert-dialog>
    </div>
    
    <div>
      <h4>Error Dialog</h4>
      <prism-alert-dialog 
        variant="destructive"
        heading="Error"
        content="Something went wrong. Please try again."
        primary-text="OK"
        primary-variant="negative"
        open>
      </prism-alert-dialog>
    </div>
  </div>
`;

/**
 * Interactive example - showing inline alert dialogs
 * @example
 * <prism-alert-dialog heading="Interactive Demo" content="This is an inline dialog"></prism-alert-dialog>
 */
export const Interactive = () => {
  return html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4>Inline Alert Dialog</h4>
        <prism-alert-dialog 
          heading="Interactive Demo"
          content="This is an inline alert dialog that appears on the canvas, not as a popup."
          primary-text="Got it"
          secondary-text="Close"
          @confirm="console.log('Confirmed')"
          @cancel="console.log('Cancelled')">
        </prism-alert-dialog>
      </div>
      
      <div>
        <h4>Multiple Inline Dialogs</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <prism-alert-dialog 
            heading="First Dialog"
            content="This is the first inline dialog."
            primary-text="OK"
            secondary-text="Cancel">
          </prism-alert-dialog>
          
          <prism-alert-dialog 
            heading="Second Dialog"
            content="This is the second inline dialog."
            primary-text="Continue"
            secondary-text="Skip">
          </prism-alert-dialog>
        </div>
      </div>
    </div>
  `;
};

/**
 * WiFi Connection Dialog - matches the second image
 * @example
 * <prism-alert-dialog heading="Connect to wifi" content="Please connect to wifi..."></prism-alert-dialog>
 */
export const WiFiConnection = (args) => renderAlertDialog({ ...args });
WiFiConnection.args = {
  variant: 'default',
  size: 'medium',
  heading: 'Connect to wifi',
  content: 'Please connect to wifi to sync your projects or go to Settings to change your preferences.',
  primaryText: 'Continue',
  secondaryText: 'Cancel',
  primaryVariant: 'primary',
  secondaryVariant: 'secondary'
};

/**
 * Unverified Format Dialog - matches the third image with warning
 * @example
 * <prism-alert-dialog variant="warning" heading="Unverified format"></prism-alert-dialog>
 */
export const UnverifiedFormat = (args) => renderAlertDialog({ ...args });
UnverifiedFormat.args = {
  variant: 'warning',
  size: 'medium',
  heading: 'Unverified format',
  content: 'This format has not been verified and may not be viewable for some users. Do you want to continue publishing?',
  primaryText: 'Continue',
  secondaryText: 'Cancel',
  primaryVariant: 'destructive',
  secondaryVariant: 'secondary'
};
