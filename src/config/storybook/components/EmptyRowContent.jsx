import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyRowContent = ({ children }) => <Wrapper>{children}</Wrapper>;

EmptyRowContent.proptypes = {
  children: PropTypes.string,
};

export default EmptyRowContent;
