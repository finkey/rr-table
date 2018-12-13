import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Styles */
const Wrapper = styled.div`
  width: ${({ width }) => width};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  overflow-x: hidden;
`;

/** Component */
const CardWrapper = ({ children, width = '400px' }) => <Wrapper width={width}>{children}</Wrapper>;

/** PropTypes */
CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardWrapper;
