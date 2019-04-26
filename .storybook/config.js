import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import backgrounds from './backgrounds';
import 'config/styles/default.css';

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of the stories.
    source: false,
  }),
);
addDecorator(checkA11y);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(
  withOptions({
    name: 'react-table',
    url: 'https://github.com/mimccio/react-table',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    addonPanelInRight: true,
    sortStoriesByKind: true,
  }),
);
addDecorator(backgrounds);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
