import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #26a69a;
  padding: 1rem;
  color: ${({ color }) => color};
`;

const ExempleDefaultComponent = ({ color, text }) => <Wrapper color={color}>{text}</Wrapper>;

ExempleDefaultComponent.propTypes = { text: PropTypes.string, color: PropTypes.string };

export default ExempleDefaultComponent;
