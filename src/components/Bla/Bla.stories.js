import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
// import centered from '@storybook/addon-centered';
// import { action } from '@storybook/addon-actions';
// import { text, number, boolean } from '@storybook/addon-knobs';

/** Components Import */
// import { SAMPLE_TEXT, LONG_TEXT } from 'config/storybook/mocks';
// import { BorderWrapper } from 'config/storybook/wrappers';
import Bla from './index';
// import readme from './README.md';

/** Stories */
storiesOf('Components|Bla', module)
/** Decorators */

  /** Stories */
  .add('- Default Bla', () => <Bla>Hello</Bla>);
