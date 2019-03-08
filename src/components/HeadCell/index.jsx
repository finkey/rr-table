import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Media from 'react-media';

import { chooseMediaQuery, defineText, defineColMinWidth } from 'utils';
import {
  DEFAULT_MEDIA_QUERY, ASC, DESC, NOT_SORTED, DEFAULT_PADDING,
} from 'config/constants';
import Sort from '../Sort';

/** Styles */
const Cell = styled.div`
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
  display: flex;
  height: 100%;
  min-width: ${({ width }) => defineColMinWidth(width)};
  width: ${({ width }) => width || '100%'};
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
  fontSize,
  handleSort,
  key,
  padding,
  priority,
  onSort,
  sortingState,
  style,
  textColor,
  title,
  width,
}) => {
  const onDefaultSort = () => {
    if (typeof title === 'object' && title.sortingKey) {
      switch (sortingState.order) {
        case ASC:
          onSort(title.sortingKey, DESC);
          break;
        default:
          onSort(title.sortingKey, DESC);
      }
    }
  };

  const isSortable = typeof onSort === 'function' && typeof title.sortingKey === 'string';
  const text = defineText(title);

  return (
    <Media
      key={key}
      query={breakpoints ? chooseMediaQuery(breakpoints, priority) : DEFAULT_MEDIA_QUERY}
    >
      {matches => (matches ? null : (
        <Cell onClick={onDefaultSort} width={width} isSortable={isSortable}>
          <Title
            center={center}
            color={textColor}
            fontSize={fontSize}
            padding={padding}
            style={style}
          >
            {text}
          </Title>
          {title && isSortable && <Sort onSort={handleSort} sortingKey={title.sortingKey} />}
        </Cell>
      ))
      }
    </Media>
  );
};

/** PropTypes */
HeadCell.propTypes = {
  /** List of breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Title font-size */
  fontSize: PropTypes.string,
  /** sorting function */
  handleSort: PropTypes.func,
  /** id of the row */
  key: PropTypes.string,
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
