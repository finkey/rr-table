import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClampLines from 'react-clamp-lines';

import { ChevronUp, ChevronDown } from 'assets/icons';
import { grey } from 'config/styles/colorPalette';
import EmptyCell from './EmptyCell';

/** Style */
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: 0 auto;
  max-height: 100%;
  overflow: hidden;
  padding: ${({ padding }) => padding};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-overflow: ellipsis;
  width: 100%;
`;

const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding-right: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;

  &:hover {
    color: ${grey};
  }
`;

/** Component */
const DefaultCell = ({
  center,
  className,
  emptyCellContent,
  fontSize,
  lineClamp,
  lineHeight,
  onSort,
  padding,
  sort,
  sortable,
  sortingKey,
  style,
  text,
}) => {
  // sort comes from the backend, it is an object : {sortingKey: 'blabla', order: 'ASC}
  const onDefaultSort = () => {
    if (sort) {
      if (sort.order === 'ASC') {
        return onSort(sortingKey, 'DESC');
      }
      return onSort(sortingKey, 'ASC');
    }
    return null;
  };

  return (
    <Wrapper onClick={onDefaultSort}>
      <Content
        center={center}
        className={className}
        fontSize={fontSize}
        lineClamp={lineClamp}
        lineHeight={lineHeight}
        padding={padding}
        style={style}
      >
        {text ? (
          <ClampLines text={text.toString()} lines={lineClamp} buttons={false} delay={0} />
        ) : (
          <EmptyCell center={center}>{emptyCellContent}</EmptyCell>
        )}
      </Content>
      {text && sortable && (
        <SortWrapper>
          <IconWrapper
            onClick={(e) => {
              e.stopPropagation();
              onSort(sortingKey, 'ASC');
            }}
          >
            <ChevronUp width={18} />
          </IconWrapper>
          <IconWrapper
            onClick={(e) => {
              e.stopPropagation();
              onSort(sortingKey, 'DESC');
            }}
          >
            <ChevronDown width={18} />
          </IconWrapper>
        </SortWrapper>
      )}
    </Wrapper>
  );
};

/** Prop types */
DefaultCell.propTypes = {
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Custom style with className */
  className: PropTypes.string,
  /** Text or Component to display when cell is empty */
  emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Font-size */
  fontSize: PropTypes.string,
  /** Number of lines before ellipsis */
  lineClamp: PropTypes.number,
  /** Height of a line */
  lineHeight: PropTypes.number,
  /** Padding */
  padding: PropTypes.string,
  /** onSort function */
  onSort: PropTypes.func,
  /** is sortable */
  sortable: PropTypes.bool,
  /** key of the column to sort by */
  sortingKey: PropTypes.string,
  /** sorting object */
  sort: PropTypes.shape({
    sortingKey: PropTypes.string,
    order: PropTypes.oneOf(['ASC', 'DESC']),
  }),
  /** Custom style */
  style: PropTypes.object,
  /** Text to display in the cell */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DefaultCell.defaultProps = {
  fontSize: 'inherit',
  lineClamp: 2,
  lineHeight: 1.4,
  padding: '4px 10px',
  sortable: false,
};

export default DefaultCell;
