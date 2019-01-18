import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  text, number, boolean, array, object, color,
} from '@storybook/addon-knobs';

/** Components Import */
import {
  mockedBreakpoints,
  mockedColWidths,
  mockedKeys,
  mockedList,
  mockedPriorities,
  mockedTitles,
} from 'config/storybook/mocks';
import { StoryWrapper } from 'config/storybook/wrappers';
import {
  Card, Loader, Head, HeadCell,
} from 'config/storybook/components';
import { onSort } from 'config/storybook/utils';
// import Row from 'components/Row';
// import Cell from 'components/Cell';
// import Card from 'components/Card';
import Table from './index';

/** Stories of Default Table */
storiesOf('- Table -|1 - Default', module)
  /** Decorators */
  .addDecorator(story => (
    <StoryWrapper border={boolean('-- wrapper border --', false)}>{story()}</StoryWrapper>
  ))
  .addDecorator(centered)

  /** Stories */
  .add('1 - Default Table', () => (
    <Table titles={array('titles', ['Name', 'Surname', 'id'])} list={object('list', mockedList)} />
  ))

  .add('2 - Default Table with keys and Card', () => (
    <Table
      titles={array('titles', mockedTitles)}
      keys={array('keys', mockedKeys)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      list={object('list', mockedList)}
    />
  ))

  .add('3 - Responsive Table Colored', () => (
    <Table
      titles={array('titles', mockedTitles)}
      keys={array('keys', mockedKeys)}
      breakpoints={array('breakpoints', mockedBreakpoints)}
      priorities={array('priorities', mockedPriorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      colored={boolean('colored', true)}
      center={boolean('center', false)}
      isLoading={boolean('isLoading', false)}
      loader={Loader}
      list={object('list', mockedList)}
    />
  ))

  .add('4 - Responsive Table with custom options and custom empty cell and colored text', () => (
    <Table
      titles={array('titles', mockedTitles)}
      keys={array('keys', mockedKeys)}
      breakpoints={array('breakpoints', mockedBreakpoints)}
      priorities={array('priorities', mockedPriorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      cardWidth={text('cardWidth', '400px')}
      colored={object('colored', { color: '#e1bee7', parity: 1 })}
      center={boolean('center', false)}
      emptyCellContent={() => <div style={{ color: 'peru', fontWeight: 'bold' }}>NA</div>}
      colWidths={array('colWidths', mockedColWidths)}
      fontSize={text('fontSize', '16px')}
      lineClamp={number('lineClamp', 3)}
      lineHeight={number('lineHeight', 2.2)}
      rowHeight={text('rowHeight', '120px')}
      textColor={color('textColor', '#303f9f')}
      cellPadding={text('cellPadding', '10px')}
      list={object('list', mockedList)}
    />
  ))

  .add('5 - normalize', () => (
    <Table
      onSort={onSort}
      sort={object('sort', { sortingKey: 'name', order: 'DESC' })}
      titles={array('titles', [
        { title: 'Name', sortingKey: 'name' },
        { title: 'Surname' },
        { title: 'Age', sortingKey: 'info.age' },
        'Job',
        { title: 'Sex', sortingKey: 'info.sex' },
        'Animaux',
      ])}
      keys={array('keys', [
        { display: 'name', normalize: data => data.toUpperCase() },
        'surname',
        'info.age',
        'company.job',
        'info.sex',
        d => d.pets && d.pets.join(', ').toUpperCase(),
      ])}
      breakpoints={array('breakpoints', mockedBreakpoints)}
      priorities={array('priorities', mockedPriorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      colored={boolean('colored', true)}
      list={object('list', mockedList)}
    />
  ));

/** Stories of Table with custom Head */
storiesOf('- Table -|2 - Custom Head', module)
  /** Decorators */
  .addDecorator(story => (
    <StoryWrapper border={boolean('-- wrapper border --', false)}>{story()}</StoryWrapper>
  ))
  .addDecorator(centered)

  /** Stories */
  .add('- Custom Head (component)', () => (
    <Table
      head={object('head', <Head titles={array('titles', ['Name', 'Surname', 'id'])} />)}
      list={object('list', mockedList)}
    />
  ))

  .add('- Custom Head (component function)', () => (
    <Table
      titles={array('titles', ['Name', 'Surname', 'id'])}
      list={object('list', mockedList)}
      head={Head}
    />
  ))

  .add('- Custom Head (function render props)', () => (
    <Table
      titles={array('titles', ['Name', 'Surname', 'id'])}
      list={object('list', mockedList)}
      head={({ titles }) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#c5e1a5',
            height: '3rem',
          }}
        >
          {titles.map(title => (
            <div>{title}</div>
          ))}
        </div>
      )}
    />
  ));

/** Stories of Table with custom HeadCell */
storiesOf('- Table -|3 - Custom HeadCell', module)
  /** Decorators */
  .addDecorator(story => (
    <StoryWrapper border={boolean('-- wrapper border --', false)}>{story()}</StoryWrapper>
  ))
  .addDecorator(centered)

  /** Stories */
  .add('- Custom HeadCell (component)', () => (
    <Table
      titles={array('titles', ['Name', 'Surname', 'id'])}
      headCell={object('head', <HeadCell />)}
      list={object('list', mockedList)}
    />
  ))

  .add('- Custom HeadCell (component function)', () => (
    <Table
      headCell={HeadCell}
      titles={object('titles', mockedTitles)}
      keys={array('keys', mockedKeys)}
      list={object('list', mockedList)}
    />
  ))

  .add('- Custom HeadCell (function render props)', () => (
    <Table
      titles={array('titles', ['Name', 'Surname', 'id'])}
      list={object('list', mockedList)}
      headCell={({ title }) => <HeadCell>{title}</HeadCell>}
    />
  ))

  .add('- Custom Head with custom HeadCell (function render props)', () => (
    <Table
      titles={array('titles', ['Name', 'Surname', 'id'])}
      list={object('list', mockedList)}
      head={Head}
      headCell={({ title }) => <HeadCell>{title}</HeadCell>}
    />
  ));

// .add('- Custom Head (function)', () => (
//   <Table
//     titles={array('titles', ['Name', 'Surname', 'id'])}
//     list={object('list', mockedList)}
//     head={Head}
//   />
// ))

// .add('- Custom Head (function  render props)', () => (
//   <Table
//     titles={array('titles', ['Name', 'Surname', 'id'])}
//     list={object('list', mockedList)}
//     head={({ titles }) => (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           backgroundColor: '#9fa8da',
//           height: '3rem',
//         }}
//       >
//         {titles.map(title => (
//           <div>{title}</div>
//         ))}
//       </div>
//     )}
//   />
// ));

// --------------------------------------

// .add('custom row', () => (
//   <Table
//     titles={titles}
//     breakpoints={breakpoints}
//     priorities={priorities}
//     head={props => <Head {...props} />}
//     card={data => <Card data={data} />}
//     row={data => (
//       <Row
//         key={data.id}
//         id={data.id}
//         items={[data.name, data.surname, data.age, data.job, data.sex]}
//         breakpoints={breakpoints}
//         priorities={priorities}
//       />
//     )}
//   />
// ))
// .add('custom cells', () => (
//   <Table>
//     <Row>
//       <Cell data={list[0].name} breakpoints={breakpoints} priority={1} />
//       <Cell data={list[0].surname} breakpoints={breakpoints} priority={2} />
//       <div>
//         <h3>{list[0].age}</h3>
//       </div>
//       <Cell data={list[0].sex} />
//     </Row>
//     <Row>
//       <Cell breakpoints={breakpoints} priority={1}>
//         <div
//           style={{
//             width: 200,
//             backgroundColor: 'blue',
//             height: '100%',
//             color: 'white',
//           }}
//         >
//           {list[1].name}
//         </div>
//       </Cell>
//       <Cell data={list[1].surname} breakpoints={breakpoints} priority={2} />
//       <Cell data={list[1].age} breakpoints={breakpoints} />
//       <Cell data={list[1].sex} breakpoints={breakpoints} />
//     </Row>
//     <Row>
//       <Cell data={list[2].name} breakpoints={breakpoints} />
//       <Cell data={list[2].surname} breakpoints={breakpoints} priority={1} />
//       <Cell data={list[2].age} breakpoints={breakpoints} />
//       <Cell data={list[2].sex} breakpoints={breakpoints} />
//     </Row>
//     <Row>
//       <Cell data={list[3].name} breakpoints={breakpoints} />
//       <Cell data={list[3].surname} breakpoints={breakpoints} priority={1} />
//       <Cell data={list[3].age} breakpoints={breakpoints} priority={1} />
//       <Cell data={list[3].sex} breakpoints={breakpoints} />
//     </Row>
//   </Table>
// ));

// -------------------------------------

// card={data => (
//   <div>
//     <ul>
//       <li>
//         Name:
//         {data.name}
//       </li>
//       <li>
//         Surname:
//         {data.surname}
//       </li>
//       <li>
//         Age:
//         {data.age}
//       </li>
//       <li>
//         Job:
//         {data.job}
//       </li>
//       <li>
//         Sex:
//         {data.sex}
//       </li>
//     </ul>
//   </div>
// )}

// {list.map(data => (
//   <Row
//     key={data.id}
//     id={data.id}
//     items={[data.name, data.surname, data.age, data.job, data.sex]}
//     breakpoints={breakpoints}
//     priorities={priorities}
//   />
// ))}
