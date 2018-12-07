import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: ${({ border }) => border};
`;

const BorderWrapper = ({ children, border }) => {
  const setBorder = () => {
    if (typeof border === 'string') {
      return border;
    }
    if (border === false) {
      return '';
    }
    return '2px solid #e0e0e0';
  };
  return <Wrapper border={setBorder()}>{children}</Wrapper>;
};

BorderWrapper.propTypes = {
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node.isRequired,
};

export default BorderWrapper;
