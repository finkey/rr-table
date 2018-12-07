import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

/** Components Import */
import { SAMPLE_TEXT, LONG_TEXT } from 'config/storybook/mocks';
import { BorderWrapper } from 'config/storybook/wrappers';
import Cell from './index';
import readme from './README.md';

/** Stories */
storiesOf('Components|Parts/Cell', module)
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
    '- Default Cell',
    () => <Cell data={text('data', SAMPLE_TEXT)} handleClick={action('cell clicked')} />,
    { notes: { markdown: readme } },
  )

  .add(
    '- Default Cell without data',
    () => <Cell data={text('data', '')} handleClick={action('cell clicked')} />,
    { notes: { markdown: readme } },
  )

  .add(
    '- Default Cell with long text',
    () => <Cell data={text('data', LONG_TEXT)} handleClick={action('cell clicked')} />,
    { notes: { markdown: readme } },
  )

  .add(
    '- Cell with long text and a width',
    () => (
      <Cell
        data={text('data', LONG_TEXT)}
        handleClick={action('cell clicked')}
        width={text('width', '200px')}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Cell with centered text and a width',
    () => (
      <Cell
        data={text('data', SAMPLE_TEXT)}
        handleClick={action('cell clicked')}
        width={text('width', '200px')}
        center={boolean('center', true)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Cell without data and with width',
    () => (
      <Cell
        data={text('data', '')}
        handleClick={action('cell clicked')}
        width={text('width', '200px')}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Cell without data and with width and custom text',
    () => (
      <Cell
        data={text('data', '')}
        handleClick={action('cell clicked')}
        width={text('width', '200px')}
        emptyCellContent={text('emptyCellContent', 'no data')}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Custom empty Cell',
    () => (
      <Cell
        data={text('data', '')}
        handleClick={action('cell clicked')}
        width={text('width', '200px')}
        emptyCellContent={() => <div style={{ color: 'peru', textAlign: 'center' }}>NA</div>}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Cell with options',
    () => (
      <Cell
        backgroundColor={text('backgroundColor', '#5e35b1')}
        center={boolean('center', true)}
        textColor={text('textColor', '#eeeeee')}
        data={text('data', LONG_TEXT)}
        fontSize={text('fontSize', '22px')}
        handleClick={action('cell clicked')}
        lineClamp={number('lineClamp', 3)}
        lineHeight={number('lineHeight', 2)}
        padding={text('padding', '20px 40px')}
        width={text('width', '220px')}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Custom Component',
    () => (
      <Cell handleClick={action('cell clicked')}>
        <div>
          <h4>Custom</h4>
          <p>{SAMPLE_TEXT}</p>
        </div>
      </Cell>
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Custom Function',
    () => (
      <Cell data={text('data', SAMPLE_TEXT)} handleClick={action('cell clicked')}>
        {({ data }) => (
          <div>
            <h4>Custom</h4>
            <p>{data}</p>
          </div>
        )}
      </Cell>
    ),
    { notes: { markdown: readme } },
  );
