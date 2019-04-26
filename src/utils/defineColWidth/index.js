const defineColWidth = (width) => {
  const doesNotFinishByNumberRegex = new RegExp(/\D$/);
  if (width === null || width === undefined) {
    return undefined;
  }

  if (doesNotFinishByNumberRegex.test(width)) {
    return width;
  }

  return `${width * 100}%`;
};

export default defineColWidth;
