import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  array, boolean, color, number, object, text,
} from '@storybook/addon-knobs';

/** Components Import */
import {
  mockedBreakpoints,
  mockedColWidths,
  mockedItems,
  mockedPriorities,
} from 'config/storybook/mocks';
import { StoryWrapper } from 'config/storybook/wrappers';
import Cell from 'components/Cell';
import Row from './index';
import readme from './README.md';

/** Stories */
storiesOf('Components|Row', module)
  /** Decorators */
  .addDecorator(story => (
    <StoryWrapper border={boolean('-- wrapper border --', true)}>{story()}</StoryWrapper>
  ))
  .addDecorator(centered)
  .addParameters({
    info: {
      propTablesExclude: [StoryWrapper],
    },
  })

  /** Stories */
  .add(
    '- Default Row',
    () => <Row items={array('items', mockedItems)} id={text('id', 'row-id')} />,
    {
      notes: { markdown: readme },
    },
  )

  .add(
    '- Responsive Row',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Responsive Row - default colored',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={boolean('colored', true)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with centered text',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={text('colored', '#fff8e1')}
        center={boolean('center', true)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom height',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={text('colored', '#fff8e1')}
        rowHeight={text('rowHeight', '200px')}
        center={boolean('center', false)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom empty cell text',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={text('colored', '#fff8e1')}
        emptyCellContent={text('emptyCellContent', 'no data')}
        center={boolean('center', false)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom empty cell Content',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={boolean('colored', true)}
        emptyCellContent={() => <div style={{ color: 'peru', textAlign: 'center' }}>NA</div>}
        center={boolean('center', false)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom col widths',
    () => (
      <Row
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={boolean('colored', true)}
        colWidths={array('colWidths', mockedColWidths)}
        center={boolean('center', false)}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom options',
    () => (
      <Row
        breakpoints={array('breakpoints', mockedBreakpoints)}
        center={boolean('center', false)}
        colWidths={array('colWidths', mockedColWidths)}
        colored={boolean('colored', true)}
        emptyCellContent={text('emptyCellContent', 'NA')}
        fontSize={text('fontSize', '22px')}
        id={text('id', 'row-id')}
        items={array('items', mockedItems)}
        lineClamp={number('lineClamp', 3)}
        lineHeight={number('lineHeight', 1.8)}
        cellPadding={text('cellPadding', '20px')}
        priorities={array('priorities', mockedPriorities)}
        rowHeight={text('rowHeight', '140px')}
        textColor={color('textColor', '#303f9f')}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom items',
    () => (
      <Row
        id={text('id', 'row-id')}
        breakpoints={array('breakpoints', mockedBreakpoints)}
        priorities={array('priorities', mockedPriorities)}
        colored={boolean('colored', true)}
        emptyCellContent={() => <div style={{ color: 'peru', textAlign: 'center' }}>NA</div>}
        center={boolean('center', false)}
        items={array('items', ['hello'])}
      />
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with custom cells',
    () => (
      <Row id={text('id', 'row-id')}>
        <Cell>
          <div
            style={object('cell 1 - style', {
              width: '200px',
              backgroundColor: 'blue',
              height: '100%',
              color: 'white',
            })}
          >
            {text('cell 1 - items', mockedItems[0])}
          </div>
        </Cell>
        <Cell data={text('cell 2 - items', mockedItems[1])} />
        <Cell data={text('cell 3 - items', mockedItems[2])} />
        <Cell data={text('cell 4 - items', mockedItems[3])} />
        <Cell data={text('cell 5 - items', mockedItems[4])} />
        <Cell>
          <div
            style={object('cell 6 - style', {
              width: '80px',
              backgroundColor: 'orange',
              height: '100%',
              color: 'white',
            })}
          >
            {text('cell 6 - items', mockedItems[5])}
          </div>
        </Cell>
        <Cell data={text('cell 7 - items', mockedItems[6])} />
      </Row>
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Row with breakpoints and custom cells',
    () => (
      <Row id={text('id', 'row-id')}>
        <Cell
          breakpoints={array('breakpoints', mockedBreakpoints)}
          priority={number('cell 1 - priority', 1)}
        >
          <div
            style={object('cell 1 - style', {
              width: '200px',
              backgroundColor: 'blue',
              height: '100%',
              color: 'white',
            })}
          >
            {text('cell 1 - items', mockedItems[0])}
          </div>
        </Cell>
        <Cell
          data={text('cell 2 - items', mockedItems[1])}
          breakpoints={mockedBreakpoints}
          priority={number('cell 2 - priority', 2)}
        />
        <Cell data={text('cell 3 - items', mockedItems[2])} breakpoints={mockedBreakpoints} />
        <Cell
          data={text('cell 4 - items', mockedItems[3])}
          breakpoints={mockedBreakpoints}
          priority={number('cell 4 - priority', 2)}
        />
        <Cell
          data={text('cell 5 - items', mockedItems[4])}
          breakpoints={mockedBreakpoints}
          priority={number('cell 5 - priority', 3)}
        />
        <Cell breakpoints={mockedBreakpoints} priority={number('cell 6 - priority', 4)}>
          <div
            style={object('cell 6 - style', {
              width: '80px',
              backgroundColor: 'orange',
              height: '100%',
              color: 'white',
            })}
          >
            {text('cell 6 - items', mockedItems[5])}
          </div>
        </Cell>
        <Cell data={text('cell 7 - items', mockedItems[6])} breakpoints={mockedBreakpoints} />
      </Row>
    ),
    { notes: { markdown: readme } },
  )

  .add(
    '- Custom row',
    () => (
      <Row id={text('id', 'row-id')} rowHeight={text('rowHeight', '')}>
        <div
          style={object('row children style', {
            display: 'flex',
            height: '200px',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          })}
        >
          <div>
            <h4>{text('cell 1 -  custom title', 'Custom')}</h4>
            <p>{text('cell 1 - items', mockedItems[0])}</p>
          </div>
          <div>
            <h4>{text('cell 2 -  custom title', 'Custom')}</h4>
            <p>{text('cell 2 - items', mockedItems[1])}</p>
          </div>
          <div>
            <h4>{text('cell 3 -  custom title', 'Custom')}</h4>
            <p>{text('cell 3 - items', mockedItems[2])}</p>
          </div>
          <div>
            <h4>{text('cell 4 -  custom title', 'Custom')}</h4>
            <p>{text('cell 4 - items', mockedItems[3])}</p>
          </div>
        </div>
      </Row>
    ),
    { notes: { markdown: readme } },
  );
