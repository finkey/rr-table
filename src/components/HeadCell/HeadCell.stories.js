import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

/** Components Import */
import { SAMPLE_TEXT } from 'config/storybook/mocks';
import { BorderWrapper } from 'config/storybook/wrappers';
import HeadCell from './index';
import readme from './README.md';

/** Stories */
storiesOf('Components|HeadCell', module)
  /** Decorators */
  .addDecorator(story => (
    <BorderWrapper border={boolean('-- wrapper border --', true)}>{story()}</BorderWrapper>
  ))
  .addDecorator(centered)
  .addParameters({
    info: {
      propTablesExclude: [BorderWrapper],
    },
  })

  /** Stories */
  .add(
    '- Default HeadCell',
    () => <HeadCell title={text('title', SAMPLE_TEXT)} handleClick={action('cell clicked')} />,
    { notes: { markdown: readme } },
  );
