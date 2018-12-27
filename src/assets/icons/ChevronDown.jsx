import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ height, width, fill }) => (
  <svg height={height} width={width} viewBox="0 0 24 24">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={fill} />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

ChevronDown.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

ChevronDown.defaultProps = {
  fill: 'currentColor',
};

export default ChevronDown;
