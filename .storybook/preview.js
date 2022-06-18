import { withScreenshot } from 'storycap';

export const decorators = [withScreenshot];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  screenshot: {
    viewports: {
      iPhone11: 'iPhone 11',
      iPad: 'iPad',
    },
  },
};
