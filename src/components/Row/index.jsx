import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import Cell from 'components/Cell';

import { lightGrey, grey, primary } from 'config/styles/colorPalette';
import 'config/styles/default.css';

/** Styles */
const Wrapper = styled.div`
  background-color: ${({ backgroundColor, selected }) => (selected ? primary : backgroundColor)};
  color: ${({ selected }) => (selected ? '#ffffff' : 'inherit')};
  display: flex;
  flex-wrap: nowrap;
  height: ${({ rowHeight }) => rowHeight};
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  border: ${({ rowFeedback }) => rowFeedback && '2px solid transparent'};

  box-sizing: border-box;

  transition: all 0.2s ease;

  &:hover {
    border: ${({ rowFeedback }) => rowFeedback && `2px solid ${grey}`};
  }
`;

/** Component */
const Row = ({
  breakpoints,
  cellPadding,
  center,
  children,
  colWidths,
  colored,
  data,
  emptyCellContent,
  fontSize,
  id,
  items,
  lineClamp,
  lineHeight,
  priorities,
  rowFeedback,
  rowHeight,
  selected,
  sort,
  style,
  textColor,
  toggleCard,
}) => {
  const setBackgroundColor = () => {
    if (typeof colored === 'string') {
      return colored;
    }
    if (colored === true) {
      return grey;
    }
    return 'transparent';
  };

  return (
    <Wrapper
      rowHeight={rowHeight}
      backgroundColor={setBackgroundColor()}
      rowFeedback={rowFeedback}
      selected={selected}
      onClick={() => toggleCard({
        breakpoints,
        data,
        id,
        items,
        priorities,
      })
      }
      style={style}
    >
      {children
        || items.map((item, i) => {
          const cellId = uuidv4();
          const columnWidth = colWidths && colWidths[i];
          return (
            <Cell
              breakpoints={breakpoints}
              center={center}
              data={item}
              emptyCellContent={emptyCellContent}
              fontSize={fontSize}
              id={cellId}
              key={cellId}
              lineClamp={lineClamp}
              lineHeight={lineHeight}
              padding={cellPadding}
              priority={priorities && priorities[i]}
              sort={sort}
              textColor={textColor}
              width={columnWidth && `${columnWidth * 100}%`}
            />
          );
        })}
    </Wrapper>
  );
};

/** PropTypes */
Row.propTypes = {
  /** List of media queries breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Cell Padding */
  cellPadding: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]), // TODO
  /** List of columns widths */
  colWidths: PropTypes.arrayOf(PropTypes.number),
  /** Color one line out of two (set to true or set color) */
  colored: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Data as an object */
  data: PropTypes.object,
  /** Text or Component to display when cell is empty */
  emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Text font-size */
  fontSize: PropTypes.string,
  /** Row id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** List of the data */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sortingKey: PropTypes.string,
      }),
    ]),
  ),
  /** Number of lines before ellipsis */
  lineClamp: PropTypes.number,
  /** Height of a line */
  lineHeight: PropTypes.number,
  /** List of column display priorities */
  priorities: PropTypes.arrayOf(PropTypes.number),
  /** user feedback */
  rowFeedback: PropTypes.bool,
  /** Height of the Row */
  rowHeight: PropTypes.string,
  /** row is selected */
  selected: PropTypes.bool,
  /** sorting function */
  sort: PropTypes.func,
  /** Custom Row style */
  style: PropTypes.object,
  /** Color of the displayed text */
  textColor: PropTypes.string,
  /** Toggle the modal on the right */
  toggleCard: PropTypes.func,
};

Row.defaultProps = {
  rowHeight: '4em',
};

export default Row;
