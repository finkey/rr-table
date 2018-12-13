import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { setBackgroundColor } from 'utils';
import CardContainer from 'containers/CardContainer';
import Row from 'components/Row';
// import Card from 'components/Card';
import 'config/styles/default.css';

/** Styles */
const TableWrapper = styled.div`
  width: 100vw;
`;

/** Component */
class Table extends React.Component {
  static propTypes = {
    // children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    /** List of breakpoints */
    breakpoints: PropTypes.arrayOf(PropTypes.number),
    /** Render Card Component */
    card: PropTypes.func,
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
    /** Keys to display */
    keys: PropTypes.arrayOf(PropTypes.string),
    /** Number of lines before ellipsis */
    lineClamp: PropTypes.number,
    /** Height of a line */
    lineHeight: PropTypes.number,
    /** List of data to display */
    list: PropTypes.arrayOf(PropTypes.object),
    /** Spread multiKeys in same cell on multiple lines */
    multiLineKeys: PropTypes.bool,
    /** List of priorities */
    priorities: PropTypes.arrayOf(PropTypes.number),
    /** Render Row Component */
    row: PropTypes.func,
    /** Height of the Row */
    rowHeight: PropTypes.string,
    /** Color of the displayed text */
    textColor: PropTypes.string,
    /** List of Titles of the columns */
    titles: PropTypes.arrayOf(PropTypes.string),
    /** With default Card or not */
    // withCard: PropTypes.bool,
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
        return { cardIsOpen: false, cardData: {}, rowId: '' };
      }
      return { cardData: data, rowId: id };
    });
  };

  closeCard = () => this.setState({ cardIsOpen: false, cardData: {}, rowId: '' });

  render() {
    const { cardIsOpen, cardData } = this.state;
    const {
      // children,
      breakpoints,
      card,
      cellPadding,
      center,
      colWidths,
      colored,
      emptyCellContent,
      fontSize,
      head,
      keys,
      lineClamp,
      lineHeight,
      list,
      multiLineKeys,
      priorities,
      row,
      rowHeight,
      textColor,
      titles,
    } = this.props;

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
          />
          )}

        {row
          ? list.map(data => row({ ...data, id: data.id || uuidv4() }))
          : list.map((data, index) => {
            const id = data.id || uuidv4();
            let items = [];
            if (keys) {
              keys.map((key) => {
                if (Array.isArray(key)) {
                  let sameLineItem = '';
                  const space = multiLineKeys ? '\n' : ''
                  sameLineItem = key.map(k => `${sameLineItem}${data[k] + space}`);
                  {/* let multiLineItems = [];
                  const multiLineItem = key.map((k) => {
                    multiLineItems = [...multiLineItems, data[k]];
                    return (
                      <React.Fragment>
                        {multiLineItems.map(i => (
                          <p>{i}</p>
                        ))}
                      </React.Fragment>
                    );
                  }); */}
                    const item = multiLineKeys ? <div style={{ whiteSpace: 'pre-line', height: '100%', width: '100%' }}>{sameLineItem}</div> : sameLineItem;
                  items = [
                    ...items,item
                  ];
                }
                items = [...items, data[key]];
                return null;
              });
            }

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
                items={keys ? items : Object.values(data)}
                key={id}
                lineClamp={lineClamp}
                lineHeight={lineHeight}
                priorities={priorities}
                rowHeight={rowHeight}
                textColor={textColor}
                toggleCard={this.toggleCard}
              />
            );
          })}

        {card && (
          <CardContainer isOpen={cardIsOpen}>
            {card({ data: cardData, close: this.closeCard })}
          </CardContainer>
        )}
      </TableWrapper>
    );
  }
}

export default Table;
