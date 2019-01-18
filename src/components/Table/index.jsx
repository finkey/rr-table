import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { setBackgroundColor, selectItems, defineComponentAsFunction } from 'utils';
import CardWrapper from 'components/CardWrapper';
import Row from 'components/Row';
import Head from 'components/Head';
import 'config/styles/default.css';

/** Styles */
const TableWrapper = styled.div`
  width: 100%;
`;

/** Component */
class Table extends React.Component {
  static propTypes = {
    /** List of breakpoints */
    breakpoints: PropTypes.arrayOf(PropTypes.number),
    /** Render Card Component */
    card: PropTypes.func,
    /** width of the Card */
    cardWidth: PropTypes.string,
    /** Cell Padding */
    cellPadding: PropTypes.string,
    /** Center the text in the cell */
    center: PropTypes.bool,
    /** row background color */
    colored: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        color: PropTypes.string,
        parity: PropTypes.oneOfType([PropTypes.oneOf(['even', 'odd']), PropTypes.number]),
      }),
    ]),
    /** List of columns widths */
    colWidths: PropTypes.arrayOf(PropTypes.number),
    /** Text or Component to display when cell is empty */
    emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Text font-size */
    fontSize: PropTypes.string,
    /** Render Head Component */
    head: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /** Height of the Head row */
    headHeight: PropTypes.string,
    /** Render HeadCell Component */
    headCell: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /** Data is loading */
    isLoading: PropTypes.bool,
    /** Keys to display */
    keys: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          display: PropTypes.string.isRequired,
          replace: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        }),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.func,
      ]),
    ),
    /** Number of lines before ellipsis */
    lineClamp: PropTypes.number,
    /** Height of a line */
    lineHeight: PropTypes.number,
    /** List of data to display */
    list: PropTypes.arrayOf(PropTypes.object),
    /** Component to display when data is loading */
    loader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** List of priorities */
    priorities: PropTypes.arrayOf(PropTypes.number),
    /** Render Row Component */
    row: PropTypes.func,
    /** Height of the Row */
    rowHeight: PropTypes.string,
    /** separator to "join" list of string */
    separator: PropTypes.string,
    /** sorting function */
    onSort: PropTypes.func,
    /** sorting object */
    sort: PropTypes.shape({
      sortingKey: PropTypes.string,
      order: PropTypes.oneOf(['ASC', 'DESC']),
    }),
    /** Custom styles */
    styles: PropTypes.shape({
      cell: PropTypes.object,
      head: PropTypes.object,
      headCell: PropTypes.object,
      row: PropTypes.object,
      table: PropTypes.object,
    }),
    /** Color of the displayed text */
    textColor: PropTypes.string,
    /** List of Titles of the columns */
    titles: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          sortingKey: PropTypes.string,
        }),
      ]),
    ),
  };

  static defaultProps = {
    cardWidth: '500px',
  };

  state = {
    cardIsOpen: false,
    cardData: {},
    rowId: '',
  };

  toggleCard = ({ data, id }) => {
    this.setState((previousState) => {
      if (!previousState.cardIsOpen) {
        return { cardIsOpen: true, cardData: data, rowId: id };
      }
      if (previousState.rowId === id) {
        return { cardIsOpen: false, rowId: '' };
      }
      return { cardData: data, rowId: id };
    });
  };

  closeCard = () => this.setState({ cardIsOpen: false, rowId: '' });

  render() {
    const { cardIsOpen, cardData, rowId } = this.state;
    const {
      breakpoints,
      card,
      cardWidth,
      cellPadding,
      center,
      colWidths,
      colored,
      emptyCellContent,
      fontSize,
      head,
      headCell,
      headHeight,
      isLoading,
      keys,
      lineClamp,
      lineHeight,
      list,
      loader: Loader,
      onSort,
      priorities,
      row,
      rowHeight,
      separator,
      sort,
      styles,
      textColor,
      titles,
    } = this.props;

    /** Head Component */
    const HeadComponent = defineComponentAsFunction(head, Head);

    const propsPassedToHeadComponent = {
      breakpoints,
      cellPadding,
      center,
      colWidths,
      headCell,
      headHeight,
      onSort,
      priorities,
      sort,
      textColor,
      titles,
    };

    /** Row Component */
    const selectRowComp = () => {
      if (isLoading && Loader) {
        return <Loader />;
      }
      if (!list) {
        return null;
      }
      if (row) {
        return list.map(data => row({ ...data, id: data.id || uuidv4() }));
      }
      return list.map((data, index) => {
        const id = data.id || uuidv4();
        const items = selectItems({ data, keys, separator });

        return (
          <Row
            breakpoints={breakpoints}
            cellPadding={cellPadding}
            center={center}
            colWidths={colWidths}
            colored={setBackgroundColor(index, colored)}
            data={data}
            emptyCellContent={emptyCellContent}
            fontSize={fontSize}
            id={id}
            items={items}
            key={id}
            lineClamp={lineClamp}
            lineHeight={lineHeight}
            priorities={priorities}
            rowFeedback
            rowHeight={rowHeight}
            selected={rowId === id}
            textColor={textColor}
            toggleCard={this.toggleCard}
          />
        );
      });
    };

    /** render */
    return (
      <TableWrapper style={styles && styles.table}>
        {HeadComponent(propsPassedToHeadComponent)}

        {selectRowComp()}

        {card && (
          <CardWrapper isOpen={cardIsOpen} cardWidth={cardWidth}>
            {card({ data: cardData, close: this.closeCard })}
          </CardWrapper>
        )}
      </TableWrapper>
    );
  }
}

export default Table;
