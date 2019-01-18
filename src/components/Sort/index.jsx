import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { grey } from 'config/styles/colorPalette';
import { ChevronUp, ChevronDown } from 'assets/icons';

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

/** Component */
const Sort = ({ onSort, sortingKey }) => (
  <SortWrapper>
    <IconWrapper
      onClick={(e) => {
        e.stopPropagation();
        onSort(sortingKey, 'ASC');
      }}
    >
      <ChevronUp width={ICON_WIDTH} />
    </IconWrapper>
    <IconWrapper
      onClick={(e) => {
        e.stopPropagation();
        onSort(sortingKey, 'DESC');
      }}
    >
      <ChevronDown width={ICON_WIDTH} />
    </IconWrapper>
  </SortWrapper>
);

/** Props Types */
Sort.propTypes = {
  /** sorting function */
  onSort: PropTypes.func.isRequired,
  /** key to sort */
  sortingKey: PropTypes.string.isRequired,
};

export default Sort;
