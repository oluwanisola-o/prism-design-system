/**
 * Prism Accordion Component Stories
 * Built on Spectrum Web Components with Prism design tokens
 */

import { html } from 'lit';
import './Accordion.js';

// Import the consolidated CSS tokens
import '../../tokens/csstokens.css';
// Import component-specific styles
import './Accordion.css';

export default {
  title: 'Components/Accordion',
  component: 'prism-accordion',
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Whether multiple accordion items can be open at the same time',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Accordion size - affects padding and font size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Prism Accordion Component

A collapsible content component built with Spectrum Web Components and Prism design tokens.

## Features

- **Multi-brand support**: Quest and Volt brand styling
- **Theme support**: Light and Dark themes
- **Collapsible content**: Show/hide content sections
- **Single or multiple open**: Control whether multiple items can be open
- **Accessibility**: Built on Spectrum Web Components with proper ARIA support
- **Design tokens**: Uses Prism design system tokens for consistent styling
- **Keyboard navigation**: Full keyboard support

## Usage

\`\`\`html
<prism-accordion>
  <prism-accordion-item label="Section 1">
    <p>Content for section 1</p>
  </prism-accordion-item>
  <prism-accordion-item label="Section 2">
    <p>Content for section 2</p>
  </prism-accordion-item>
</prism-accordion>
\`\`\`

## Brand & Theme Switching

Use the theme switcher in the Storybook toolbar to see how accordions look across different brands and themes:
- **Quest Light/Dark**: Purple accent colors with Geist font
- **Volt Light/Dark**: Blue accent colors with Switzer font (light) / Bricolage Grotesque (dark)
        `
      }
    }
  }
};

// Helper function to render accordion
const renderAccordion = (args) => html`
  <prism-accordion ?allow-multiple="${args.allowMultiple}" size="${args.size || 'm'}">
    <prism-accordion-item label="Getting Started">
      <p>Learn the basics of our platform and get up and running quickly. This section covers account setup, initial configuration, and essential features you'll need to know.</p>
      <ul>
        <li>Create your account</li>
        <li>Complete your profile</li>
        <li>Explore the dashboard</li>
        <li>Set up your first project</li>
      </ul>
    </prism-accordion-item>
    <prism-accordion-item label="Advanced Features">
      <p>Discover powerful features that will help you get the most out of our platform. These advanced tools are designed for experienced users.</p>
      <ul>
        <li>API integration</li>
        <li>Custom workflows</li>
        <li>Advanced analytics</li>
        <li>Team collaboration</li>
      </ul>
    </prism-accordion-item>
    <prism-accordion-item label="Troubleshooting">
      <p>Having issues? This section contains solutions to common problems and answers to frequently asked questions.</p>
      <ul>
        <li>Common error messages</li>
        <li>Performance optimization</li>
        <li>Data recovery</li>
        <li>Contact support</li>
      </ul>
    </prism-accordion-item>
  </prism-accordion>
`;

/**
 * Basic accordion with single item open at a time
 * @example
 * <prism-accordion>
 *   <prism-accordion-item label="Section 1">Content 1</prism-accordion-item>
 * </prism-accordion>
 */
export const Default = (args) => renderAccordion({ ...args });
Default.args = {
  allowMultiple: false,
  size: 'm'
};

/**
 * Accordion that allows multiple items to be open simultaneously
 * @example
 * <prism-accordion allow-multiple>
 *   <prism-accordion-item label="Section 1">Content 1</prism-accordion-item>
 * </prism-accordion>
 */
export const AllowMultiple = (args) => renderAccordion({ ...args, allowMultiple: true });
AllowMultiple.args = {
  allowMultiple: true,
  size: 'm'
};

/**
 * Small size accordion
 * @example
 * <prism-accordion size="s">
 *   <prism-accordion-item label="Compact">Small content</prism-accordion-item>
 * </prism-accordion>
 */
export const SmallSize = (args) => html`
  <prism-accordion size="s">
    <prism-accordion-item label="Compact Section">
      <p>This is a small accordion with compact spacing and smaller text.</p>
    </prism-accordion-item>
    <prism-accordion-item label="Another Small Section">
      <p>Perfect for dense interfaces where space is at a premium.</p>
    </prism-accordion-item>
  </prism-accordion>
`;

/**
 * Large size accordion
 * @example
 * <prism-accordion size="l">
 *   <prism-accordion-item label="Large">Big content</prism-accordion-item>
 * </prism-accordion>
 */
export const LargeSize = (args) => html`
  <prism-accordion size="l">
    <prism-accordion-item label="Large Section">
      <p>This is a large accordion with generous spacing and larger text. Perfect for main content areas and important information.</p>
      <h3>Subsection</h3>
      <p>Large accordions work well for detailed content that needs to be easily readable.</p>
    </prism-accordion-item>
    <prism-accordion-item label="Another Large Section">
      <p>Large accordions provide excellent readability and visual hierarchy.</p>
    </prism-accordion-item>
  </prism-accordion>
`;

/**
 * FAQ-style accordion with multiple items
 * @example
 * <prism-accordion>
 *   <prism-accordion-item label="Question 1">Answer 1</prism-accordion-item>
 * </prism-accordion>
 */
export const FAQ = () => html`
  <prism-accordion>
    <prism-accordion-item label="What is Prism Design System?">
      <p>Prism is a comprehensive design system that provides consistent, accessible, and beautiful components for building modern web applications. It includes design tokens, components, and guidelines for Quest and Volt brands.</p>
    </prism-accordion-item>
    <prism-accordion-item label="How do I use the components?">
      <p>Components are built on Spectrum Web Components and can be used in any web application. Simply import the component files and use the custom HTML elements in your markup.</p>
    </prism-accordion-item>
    <prism-accordion-item label="Can I customize the styling?">
      <p>Yes! All components use CSS custom properties from the Prism design tokens, making it easy to customize colors, typography, spacing, and other design properties while maintaining consistency.</p>
    </prism-accordion-item>
    <prism-accordion-item label="Is it accessible?">
      <p>Absolutely. All components are built on Spectrum Web Components, which follow WCAG guidelines and include proper ARIA attributes, keyboard navigation, and screen reader support.</p>
    </prism-accordion-item>
    <prism-accordion-item label="How do I switch between brands and themes?">
      <p>Use the theme switcher in Storybook to see how components look across different brands (Quest, Volt) and themes (Light, Dark). In your application, apply the appropriate theme classes to your root element.</p>
    </prism-accordion-item>
  </prism-accordion>
`;

/**
 * Accordion with different content types
 * @example
 * <prism-accordion>
 *   <prism-accordion-item label="Text">Plain text content</prism-accordion-item>
 * </prism-accordion>
 */
export const DifferentContentTypes = () => html`
  <prism-accordion allow-multiple>
    <prism-accordion-item label="Text Content">
      <p>This section contains plain text content. It's perfect for descriptions, instructions, or any textual information that needs to be organized in a collapsible format.</p>
    </prism-accordion-item>
    <prism-accordion-item label="List Content">
      <p>Here's a list of features:</p>
      <ul>
        <li>Multi-brand support</li>
        <li>Theme switching</li>
        <li>Accessibility features</li>
        <li>Design token integration</li>
      </ul>
    </prism-accordion-item>
    <prism-accordion-item label="Code Content">
      <p>Example code snippet:</p>
      <pre><code>&lt;prism-accordion&gt;
  &lt;prism-accordion-item label="Example"&gt;
    &lt;p&gt;Content here&lt;/p&gt;
  &lt;/prism-accordion-item&gt;
&lt;/prism-accordion&gt;</code></pre>
    </prism-accordion-item>
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
  </prism-accordion>
`;

/**
 * All accordion sizes comparison
 * @example
 * <prism-accordion size="s">Small</prism-accordion>
 * <prism-accordion size="m">Medium</prism-accordion>
 * <prism-accordion size="l">Large</prism-accordion>
 */
export const AllSizes = () => html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <h3>Small Size</h3>
      <prism-accordion size="s">
        <prism-accordion-item label="Small Accordion">
          <p>This is a small accordion with compact spacing.</p>
        </prism-accordion-item>
      </prism-accordion>
    </div>
    
    <div>
      <h3>Medium Size (Default)</h3>
      <prism-accordion size="m">
        <prism-accordion-item label="Medium Accordion">
          <p>This is a medium accordion with standard spacing.</p>
        </prism-accordion-item>
      </prism-accordion>
    </div>
    
    <div>
      <h3>Large Size</h3>
      <prism-accordion size="l">
        <prism-accordion-item label="Large Accordion">
          <p>This is a large accordion with generous spacing.</p>
        </prism-accordion-item>
      </prism-accordion>
    </div>
  </div>
`;
