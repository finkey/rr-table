import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import Cell from 'components/Cell';

import { defineColWidth } from 'utils';
import { grey, primary, lightGrey } from 'config/styles/colorPalette';
import 'config/styles/default.css';

/** Styles */
const Wrapper = styled.div`
  background-color: ${({ backgroundColor, selected, selectedRowColor }) => (selected ? selectedRowColor || primary : backgroundColor)};
  box-sizing: border-box;
  color: ${({ selected, defaultTextColor, selectedTextColor }) => (selected ? selectedTextColor || 'white' : defaultTextColor)};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'normal')};
  display: flex;
  flex-wrap: nowrap;
  height: ${({ rowHeight }) => rowHeight};
  justify-content: space-evenly;
  width: 100%;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({
    rowFeedback, selected, clickable, hoveredRowColor,
  }) => rowFeedback && !selected && clickable && (hoveredRowColor || lightGrey)};
    color: ${({ selected, selectedTextColor, hoveredTextColor }) => (selected ? selectedTextColor : hoveredTextColor || 'inherit')};
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
  onClick,
  onSort,
  priorities,
  rowColor,
  rowFeedback,
  rowHeight,
  selected,
  sort,
  style,
  textColor,
}) => {
  const setBackgroundColor = () => {
    if (typeof colored === 'string') {
      return colored;
    }
    if (colored === true) {
      return grey;
    }
    if (typeof rowColor === 'string') {
      return rowColor;
    }
    if (typeof rowColor === 'object') {
      return rowColor.default;
    }

    return 'transparent';
  };

  const handleClick = () => {
    if (typeof onClick === 'function') {
      return onClick({
        breakpoints,
        data,
        id,
        items,
        priorities,
      });
    }
    return null;
  };

  const defineDefaultTextColor = () => {
    if (typeof textColor === 'string') {
      return textColor;
    }
    if (typeof textColor === 'object') {
      return textColor.default;
    }
    return 'inherit';
  };

  return (
    <Wrapper
      backgroundColor={setBackgroundColor()}
      clickable={typeof onClick === 'function'}
      defaultTextColor={defineDefaultTextColor()}
      hoveredRowColor={typeof rowColor === 'object' && rowColor.hovered}
      hoveredTextColor={typeof textColor === 'object' && textColor.hovered}
      onClick={handleClick}
      rowFeedback={rowFeedback}
      rowHeight={rowHeight}
      selected={selected}
      selectedRowColor={typeof rowColor === 'object' && rowColor.selected}
      selectedTextColor={typeof textColor === 'object' && textColor.selected}
      style={style}
    >
      {children
        || items.map((item, i) => {
          const cellId = uuidv4();
          const columnWidth = colWidths && colWidths[i];
          const width = defineColWidth(columnWidth);
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
              onSort={onSort}
              padding={cellPadding}
              priority={priorities && priorities[i]}
              sort={sort}
              // textColor={textColor}
              width={width}
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
  colWidths: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
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
      PropTypes.node,
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
  /** Colors of the row */
  rowColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      hovered: PropTypes.string,
      selected: PropTypes.string.isRequired,
    }),
  ]),
  /** user feedback */
  rowFeedback: PropTypes.bool,
  /** Height of the Row */
  rowHeight: PropTypes.string,
  /** row is selected */
  selected: PropTypes.bool,
  /** On row click custom func */
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  /** sorting function */
  onSort: PropTypes.func,
  /** sorting object */
  sort: PropTypes.shape({
    sortingKey: PropTypes.string,
    order: PropTypes.oneOf(['ASC', 'DESC']),
  }),
  /** Custom Row style */
  style: PropTypes.object,
  /** Colors of the displayed text */
  textColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      hovered: PropTypes.string,
      selected: PropTypes.string.isRequired,
    }),
  ]),
  /** Toggle the modal on the right */
  toggleCard: PropTypes.func,
};

Row.defaultProps = {
  rowHeight: '4em',
};

export default Row;
