const setWidthRatio = (widthRatios, index) => {
  if (Array.isArray(widthRatios) && typeof index === 'number') {
    return `${widthRatios[index] * 100}%`;
  }
  return null;
};

export default setWidthRatio;
