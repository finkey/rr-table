import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #9fa8da;
  padding: 2rem;
  color: ${({ color }) => color};
`;

const ExempleComponent = ({ color, text }) => <Wrapper color={color}>{text}</Wrapper>;

ExempleComponent.propTypes = { text: PropTypes.string, color: PropTypes.string };

export default ExempleComponent;
