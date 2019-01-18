import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Media from 'react-media';

import { chooseMediaQuery } from 'utils';
import { DEFAULT_MEDIA_QUERY } from 'config/constants/mediaQueries';
import Sort from '../Sort';

/** Styles */
const Cell = styled.div`
  width: ${({ width }) => width};
  border: 2px solid red;
  height: 100%;
`;

const Title = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: 0 auto;
  max-height: 100%;
  overflow: hidden;
  padding: ${({ padding }) => padding};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-overflow: ellipsis;
  width: 100%;
  height: 100%;
  color: ${({ color }) => color};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeadCell = ({
  breakpoints,
  center,
  fontSize,
  key,
  onSort,
  padding,
  priority,
  sort,
  style,
  textColor,
  title,
  width,
}) => {
  const isSortable = typeof onSort === 'function' && typeof sort === 'object' && typeof sort.sortingKey === 'string';

  // sort comes from the backend, it is an object : {sortingKey: 'blabla', order: 'ASC}
  const onDefaultSort = () => {
    if (sort) {
      if (sort.order === 'ASC') {
        return onSort(sort.sortingKey, 'DESC');
      }
      return onSort(sort.sortingKey, 'ASC');
    }
    return null;
  };

  return (
    <Media
      key={key}
      query={breakpoints ? chooseMediaQuery(breakpoints, priority) : DEFAULT_MEDIA_QUERY}
    >
      {matches => (matches ? null : (
        <Cell onClick={onDefaultSort} width={width}>
          <Title
            center={center}
            color={textColor}
            fontSize={fontSize}
            padding={padding}
            style={style}
          >
            {title}
          </Title>
          {title && isSortable && <Sort onSort={onSort} sortingKey={sort.sortingKey} />}
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
  /** id of the row */
  key: PropTypes.string,
  /** sorting function */
  onSort: PropTypes.func,
  /** Cell Padding */
  padding: PropTypes.string,
  /** List of priorities */
  priority: PropTypes.number,
  /** sorting object */
  sort: PropTypes.shape({
    sortingKey: PropTypes.string,
    order: PropTypes.oneOf(['ASC', 'DESC']),
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

HeadCell.defaultProps = {
  fontSize: 'inherit',
  padding: '4px 100px',
  width: '100%',
};

export default HeadCell;
