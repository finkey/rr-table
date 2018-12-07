import React from 'react';
import PropTypes from 'prop-types';

const Bla = ({ children }) => <div>{children.toUpperCase()}</div>;

Bla.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Bla;
