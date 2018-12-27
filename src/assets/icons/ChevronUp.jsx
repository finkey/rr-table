import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = ({ height, width, fill }) => (
  <svg height={height} width={width} viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill={fill} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

ChevronUp.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
};

ChevronUp.defaultProps = {
  fill: 'currentColor',
};

export default ChevronUp;
