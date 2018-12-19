import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  text, number, boolean, array, object, color,
} from '@storybook/addon-knobs';

/** Components Import */
import {
  breakpoints, list, keys, titles, priorities, colWidths,
} from 'config/storybook/mocks';
import { Card } from 'config/storybook/components';
// import Row from 'components/Row';
// import Cell from 'components/Cell';
// import Card from 'components/Card';
import Table from './index';

/** Stories */
storiesOf('Table', module)
  /** Decorators */
  .addDecorator(centered)

  .add('- Default Table', () => (
    <Table titles={array('titles', ['Name', 'Surname', 'id'])} list={object('list', list)} />
  ))

  .add('- Default Table with keys and Card', () => (
    <Table
      titles={array('titles', titles)}
      keys={array('keys', keys)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      list={object('list', list)}
    />
  ))

  .add('- Responsive Table Colored', () => (
    <Table
      titles={array('titles', titles)}
      keys={array('keys', keys)}
      breakpoints={array('breakpoints', breakpoints)}
      priorities={array('priorities', priorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      colored={boolean('colored', true)}
      list={object('list', list)}
    />
  ))

  .add('- Responsive Table with custom options and custom empty cell and colored text', () => (
    <Table
      titles={array('titles', titles)}
      keys={array('keys', keys)}
      breakpoints={array('breakpoints', breakpoints)}
      priorities={array('priorities', priorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      cardWidth={text('cardWidth', '400px')}
      colored={object('colored', { color: '#e1bee7', parity: 1 })}
      center={boolean('center', false)}
      emptyCellContent={() => <div style={{ color: 'peru', fontWeight: 'bold' }}>NA</div>}
      colWidths={array('colWidths', colWidths)}
      fontSize={text('fontSize', '16px')}
      lineClamp={number('lineClamp', 3)}
      lineHeight={number('lineHeight', 2.2)}
      rowHeight={text('rowHeight', '120px')}
      textColor={color('textColor', '#303f9f')}
      cellPadding={text('cellPadding', '10px')}
      list={object('list', list)}
    />
  ))

  .add('- normalize', () => (
    <Table
      titles={array('titles', titles)}
      keys={array('keys', [
        { display: 'name', normalize: data => data.toUpperCase() },
        'surname',
        'info.age',
        'company.job',
        'info.sex',
        data => data.pets && data.pets.join(', ').toUpperCase(),
      ])}
      breakpoints={array('breakpoints', breakpoints)}
      priorities={array('priorities', priorities)}
      card={({ data, close }) => <Card close={close} data={object('card data', data)} />}
      colored={boolean('colored', true)}
      list={object('list', list)}
    />
  ));

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
