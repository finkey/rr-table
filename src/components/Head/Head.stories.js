import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { array, boolean, text } from '@storybook/addon-knobs';

/** Components Import */
import {
  mockedBreakpoints,
  mockedColWidths,
  mockedPriorities,
  mockedTitles,
} from 'config/storybook/mocks';
import { StoryWrapper } from 'config/storybook/wrappers';
import HeadCell from 'config/storybook/components/HeadCell';
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
    '1 - Default Head',
    () => (
      <Head
        titles={array('titles', mockedTitles)}
        id={text('id', 'header-row')}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colWidths={array('colWidths', mockedColWidths)}
      />
    ),
    {
      notes: { markdown: readme },
    },
  )

  .add(
    '2 - Custom Head Cells',
    () => (
      <Head
        titles={array('titles', mockedTitles)}
        id={text('id', 'header-row')}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colWidths={array('colWidths', mockedColWidths)}
        headCell={HeadCell}
      />
    ),
    {
      notes: { markdown: readme },
    },
  )

  .add(
    '3 - Custom Head Cells (render props)',
    () => (
      <Head
        titles={array('titles', mockedTitles)}
        id={text('id', 'header-row')}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colWidths={array('colWidths', mockedColWidths)}
        headCell={props => <HeadCell {...props} />}
      />
    ),
    {
      notes: { markdown: readme },
    },
  );
