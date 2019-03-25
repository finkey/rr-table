import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { darkGrey } from 'config/styles/colorPalette';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkGrey};
`;

const EmptyDataRow = ({ children }) => <Wrapper>{children}</Wrapper>;

EmptyDataRow.propTypes = {
  children: PropTypes.string,
};

export default EmptyDataRow;
