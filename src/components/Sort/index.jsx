import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { grey } from 'config/styles/colorPalette';
import { ChevronUp, ChevronDown } from 'assets/icons';
import { ASC, DESC } from 'config/constants/sortOrders';

/** Styles */
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

const ICON_WIDTH = 18;
const ICON_HEIGHT= 18;

/** Component */
const Sort = ({ onSort, sortingKey }) => {
  const handleSortASC = (e) => {
    e.stopPropagation();
    onSort(sortingKey, ASC);
  };

  const handleSortDESC = (e) => {
    e.stopPropagation();
    onSort(sortingKey, DESC);
  };
  return (
    <SortWrapper>
      <IconWrapper onClick={handleSortASC}>
        <ChevronUp width={ICON_WIDTH} height={ICON_HEIGHT} />
      </IconWrapper>
      <IconWrapper onClick={handleSortDESC}>
        <ChevronDown width={ICON_WIDTH} height={ICON_HEIGHT} />
      </IconWrapper>
    </SortWrapper>
  );
};

/** Props Types */
Sort.propTypes = {
  /** sorting function */
  onSort: PropTypes.func.isRequired,
  /** key to sort */
  sortingKey: PropTypes.string.isRequired,
};

export default Sort;
