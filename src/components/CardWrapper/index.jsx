import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from 'components/animations/Slide';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 400px;
  overflow-x: hidden;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const CardWrapper = ({ children, isOpen }) => (
  <Wrapper isOpen={isOpen}>
    <Slide delay={5000} isOpen={isOpen}>
      {children}
    </Slide>
  </Wrapper>
);

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

export default CardWrapper;