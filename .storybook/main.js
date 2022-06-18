module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['storycap'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
