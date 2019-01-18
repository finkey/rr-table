import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { defineComponentAsFunction } from 'utils';
import { grey } from 'config/styles/colorPalette';
import HeadCell from 'components/HeadCell';

/** Styles */
const Wrapper = styled.div`
  box-shadow: 0px 5px 2px ${grey};
  display: flex;
  flex-wrap: nowrap;
  height: ${({ height }) => height};
  justify-content: space-evenly;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
  align-items: center;
  border: 5px solid green;
  box-sizing: border-box;
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
  sort,
  styles,
  textColor,
  titles,
}) => {
  const Cell = defineComponentAsFunction(headCell, HeadCell);
  return (
    <Wrapper height={height} style={styles && styles.head} id={id}>
      {titles
        && titles.map((title, i) => Cell({
          breakpoints,
          padding: cellPadding,
          center,
          fontSize,
          key: uuidv4(),
          onSort,
          priority: priorities && priorities[i],
          sort,
          style: styles && styles.headCell,
          textColor,
          title,
          width: colWidths && `${colWidths[i] * 100}%`,
        }))}
    </Wrapper>
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
  /** Column Titles */
  titles: PropTypes.arrayOf(PropTypes.string),
};

Head.defaultProps = {
  height: '4rem',
};

export default Head;
