import React from 'react';
import PropTypes from 'prop-types';

const HeadCell = ({ text }) => {
  console.log('HeadCell');
  return <div>{text}</div>;
};

HeadCell.propTypes = {
  text: PropTypes.string,
};

export default HeadCell;
