import { join, dirname } from "path";

export default {
  stories: ['../packages/ui/src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-toolbars',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config) {
    // Ensure Vite can resolve modules from packages/ui
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    
    return config;
  },
};
