/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  // Global parameters for custom theme toolbar
  globalTypes: {
    theme: {
      description: 'Brand and Theme',
      defaultValue: 'quest-light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'quest-light', title: 'Quest Light', left: '🌟' },
          { value: 'quest-dark', title: 'Quest Dark', left: '🌟' },
          { value: 'volt-light', title: 'Volt Light', left: '⚡' },
          { value: 'volt-dark', title: 'Volt Dark', left: '⚡' },
        ],
        dynamicTitle: true,
      },
    },
  },

  // Global decorators for theme application
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'quest-light';
      const themeClass = `theme-${theme}`;
      
      // Remove all existing theme classes from body
      document.body.classList.remove(
        'theme-quest-light', 
        'theme-quest-dark', 
        'theme-volt-light', 
        'theme-volt-dark'
      );
      
      // Add the current theme class to body
      document.body.classList.add(themeClass);
      
      // Don't manipulate body styles directly - let CSS handle it
      // Let Storybook and Lit handle the rendering completely
      return story();
    }
  ]
};

export default preview;