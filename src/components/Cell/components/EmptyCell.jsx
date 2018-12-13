import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Style */
const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

/** Component */
const EmptyCell = ({ children }) => {
  if (typeof children === 'string') {
    return <Wrapper>{children}</Wrapper>;
  }
  if (typeof children === 'function') {
    const EmptyCellContent = children;
    return <EmptyCellContent />;
  }
  return children;
};

/** Prop types */
EmptyCell.propTypes = {
  /** Text or Component to display when cell is empty */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

EmptyCell.defaultProps = {
  children: '-',
};

export default EmptyCell;
