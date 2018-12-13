import React from 'react';
import styled from 'styled-components';
import Slide from '../animations/Slide';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 400px;
  overflow-x: hidden;
`;

const CardContainer = ({ children, isOpen }) => (
  <Wrapper>
    <Slide isOpen={isOpen}>{children}</Slide>
  </Wrapper>
);

export default CardContainer;
