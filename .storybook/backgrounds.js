import { withBackgrounds } from '@storybook/addon-backgrounds';

const backgrounds = withBackgrounds([
  { name: 'default', value: '#ffffff', default: true },
  { name: 'primary', value: '#f8af39' },
  { name: 'secondary', value: '#0095c4' },
  { name: 'ternary', value: '#004c64' },
  { name: 'gray-100', value: '#fafafa' },
  { name: 'gray-300', value: '#e5eaee' },
]);

export default backgrounds;
