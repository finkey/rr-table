import React from 'react';

const defineText = (data, children = null) => {
  if (typeof data === 'string' || typeof data === 'number') {
    return data;
  }

  if (data && typeof data === 'object' && React.isValidElement(data)) {
    return data;
  }

  if (data && typeof data === 'object' && data.title && typeof data.title === 'string') {
    return data.title;
  }

  if (typeof children === 'string') {
    return children;
  }

  return null;
};

export default defineText;
