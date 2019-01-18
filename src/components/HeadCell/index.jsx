import React from 'react';
import PropTypes from 'prop-types';

const HeadCell = ({ title }) => {
  console.log('HeadCell');
  return <div>{title}</div>;
};

HeadCell.propTypes = {
  title: PropTypes.string,
};

export default HeadCell;
