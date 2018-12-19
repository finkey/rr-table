import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { setBackgroundColor, selectItems } from 'utils';
import CardWrapper from 'components/CardWrapper';
import Row from 'components/Row';
// import Card from 'components/Card';
import 'config/styles/default.css';

/** Styles */
const TableWrapper = styled.div`
  width: 100%;
`;

/** Component */
class Table extends React.Component {
  static propTypes = {
    // children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
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
    head: PropTypes.func,
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
    /** Color of the displayed text */
    textColor: PropTypes.string,
    /** List of Titles of the columns */
    titles: PropTypes.arrayOf(PropTypes.string),
    /** With default Card or not */
    // withCard: PropTypes.bool,
  };

  static defaultProps = {
    cardWidth: '500px',
  };

  state = {
    cardIsOpen: false,
    cardData: {},
    rowId: '' /* eslint-disable-line react/no-unused-state */,
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

  closeCard = () => this.setState({ cardIsOpen: false, rowId: '' }); /* eslint-disable-line react/no-unused-state */

  render() {
    const { cardIsOpen, cardData } = this.state;
    const {
      // children,
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
      isLoading,
      keys,
      lineClamp,
      lineHeight,
      list,
      loader: Loader,
      priorities,
      row,
      rowHeight,
      separator,
      textColor,
      titles,
    } = this.props;

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
            rowHeight={rowHeight}
            textColor={textColor}
            toggleCard={this.toggleCard}
          />
        );
      });
    };

    return (
      <TableWrapper>
        {head
          ? head({ titles, breakpoints, priorities })
          : titles && (
          <Row
            breakpoints={breakpoints}
            cellPadding={cellPadding}
            center={center}
            colWidths={colWidths}
            fontSize={fontSize}
            id="head"
            items={titles}
            priorities={priorities}
            style={{ boxShadow: '0px 5px 2px #e0e0e0', marginBottom: '5px' }}
            textColor={textColor}
            toggleCard={() => null}
          />
          )}

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
