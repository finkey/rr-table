const setWidthRatio = (widthRatios, index) => {
  if (Array.isArray(widthRatios) && typeof index === 'number') {
    const regex = new RegExp(/\D$/);
    const width = widthRatios[index];

    if (!width) {
      return undefined;
    }

    if (regex.test(width)) {
      return width;
    }

    if (typeof width === 'number') {
      return `${width * 100}%`;
    }
  }
  return null;
};

export default setWidthRatio;
