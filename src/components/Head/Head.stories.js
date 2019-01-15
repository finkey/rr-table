import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  array, boolean, color, number, object, text,
} from '@storybook/addon-knobs';

/** Components Import */
import {
  breakpoints, colWidths, items, priorities,
} from 'config/storybook/mocks';
import { StoryWrapper } from 'config/storybook/wrappers';
// import Cell from 'components/Cell';
import Head from './index';
import readme from './README.md';

/** Stories */
storiesOf('Components|Head', module)
  /** Decorators */
  .addDecorator(story => (
    <StoryWrapper border={boolean('-- wrapper border --', false)}>{story()}</StoryWrapper>
  ))
  .addDecorator(centered)
  .addParameters({
    info: {
      propTablesExclude: [StoryWrapper],
    },
  })

  /** Stories */
  .add(
    '- Default Head',
    () => <Head titles={array('items', items)} id={text('id', 'header-row')} />,
    {
      notes: { markdown: readme },
    },
  )

  .add(
    '- Responsive Head',
    () => (
      <Head
        id={text('id', 'header-row')}
        titles={array('items', items)}
        breakpoints={array('breakpoints', breakpoints)}
        priorities={array('priorities', priorities)}
      />
    ),
    { notes: { markdown: readme } },
  );
