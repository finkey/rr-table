import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { defineText } from 'utils';
import {
  ASC, DESC, NOT_SORTED, DEFAULT_PADDING,
} from 'config/constants';
import Sort from '../Sort';
import DefaultCell from '../Cell';

/** Styles */
const Cell = styled(DefaultCell)`
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
`;

const Title = styled.div`
  align-items: center;
  color: ${({ color }) => color};
  display: flex;
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  max-height: 100%;
  overflow: hidden;
  padding: ${({ padding }) => padding || DEFAULT_PADDING};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-overflow: ellipsis;
  width: 100%;
`;

const HeadCell = ({
  breakpoints,
  center,
  children,
  fontSize,
  id,
  onSort,
  padding,
  priority,
  sortingState,
  style,
  textColor,
  title,
  width = '100%',
}) => {
  const onDefaultSort = () => {
    if (typeof title === 'object' && title.sortingKey) {
      switch (sortingState.order) {
        case ASC:
          onSort(title.sortingKey, DESC);
          break;
        default:
          onSort(title.sortingKey, ASC);
      }
    }
  };

  const isSortable = typeof onSort === 'function' && typeof title.sortingKey === 'string';
  const text = defineText(title, children);
  return (
    <Cell
      breakpoints={breakpoints}
      center={center}
      fontSize={fontSize}
      handleClick={onDefaultSort}
      isSortable={isSortable}
      key={id}
      padding={padding}
      priority={priority}
      width={width}
    >
      <Title
        center={center}
        color={textColor}
        fontSize={fontSize}
        padding={padding}
        style={style}
      >
        {text}
      </Title>
      {title && isSortable && <Sort onSort={onSort} sortingKey={title.sortingKey} />}
    </Cell>
  );
};

/** PropTypes */
HeadCell.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** List of breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Title font-size */
  fontSize: PropTypes.string,
  /** id of the cell */
  id: PropTypes.string.isRequired,
  /** sorting function */
  onSort: PropTypes.func,
  /** Cell Padding */
  padding: PropTypes.string,
  /** List of priorities */
  priority: PropTypes.number,
  /** Sorting state */
  sortingState: PropTypes.shape({
    sortingKey: PropTypes.string.isRequired,
    order: PropTypes.oneOf([ASC, DESC, NOT_SORTED]).isRequired,
  }),
  /** Custom row style */
  style: PropTypes.object,
  /** Color of the displayed text */
  textColor: PropTypes.string,
  /** Column Title */
  title: PropTypes.string,
  /** Column width */
  width: PropTypes.string,
};

export default HeadCell;
