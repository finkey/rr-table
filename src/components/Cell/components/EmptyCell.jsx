import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Style */
const Wrapper = styled.div`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  width: 100%;
  height: 100%;
  padding-left: ${({ center }) => (center ? 0 : '20px')};
`;

/** Component */
const EmptyCell = ({ children, center }) => {
  if (typeof children === 'string') {
    return <Wrapper center={center}>{children}</Wrapper>;
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
  center: PropTypes.bool,
};

EmptyCell.defaultProps = {
  children: '-',
};

export default EmptyCell;
