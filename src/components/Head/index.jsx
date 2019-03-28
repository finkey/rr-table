import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { defineComponentAsFunction, defineColWidth } from 'utils';
import { ASC, DESC, NOT_SORTED } from 'config/constants/sortOrders';
import { grey } from 'config/styles/colorPalette';
import HeadCell from 'components/HeadCell';

/** Styles */
const HeadWrapper = styled.div`
  align-items: center;
  box-shadow: 0px 5px 2px ${grey};
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  height: ${({ height }) => height || '4rem'};
  justify-content: space-evenly;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
`;

/** Component */
const Head = ({
  breakpoints,
  cellPadding,
  center,
  colWidths,
  fontSize,
  headCell,
  height,
  id,
  onSort,
  priorities,
  sortingState,
  styles,
  textColor,
  titles,
}) => {
  const Cell = defineComponentAsFunction(headCell, HeadCell);
  const columnWidth = colWidths && colWidths[i];
  const width = defineColWidth(columnWidth);

  return (
    <HeadWrapper height={height} style={styles && styles.head} id={id}>
      {titles.map((title, i) => Cell({
        breakpoints,
        center,
        fontSize,
        key: uuidv4(),
        onSort,
        padding: cellPadding,
        priority: priorities && priorities[i],
        sortingState,
        style: styles && styles.headCell,
        textColor,
        title,
        width,
      }))}
    </HeadWrapper>
  );
};

/** PropTypes */
Head.propTypes = {
  /** List of breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Cell Padding */
  cellPadding: PropTypes.string,
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** List of columns widths */
  colWidths: PropTypes.arrayOf(PropTypes.number),
  /** Title font-size */
  fontSize: PropTypes.string,
  /** Header Cells Component */
  headCell: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Height of the Head row */
  height: PropTypes.string,
  /** id of the row */
  id: PropTypes.string,
  /** sorting function */
  onSort: PropTypes.func,
  /** List of priorities */
  priorities: PropTypes.arrayOf(PropTypes.number),
  /** Sorting state */
  sortingState: PropTypes.shape({
    sortingKey: PropTypes.string.isRequired,
    order: PropTypes.oneOf([ASC, DESC, NOT_SORTED]).isRequired,
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
  /** Column Titles */
  titles: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sortingKey: PropTypes.string,
      }),
    ]),
  ).isRequired,
};

export default Head;
