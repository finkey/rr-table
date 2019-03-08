const defineColMinWidth = (width) => {
  const doesNotFinishByNumberOrPercentRegex = new RegExp(/(?!%|\d).$/);

  if (doesNotFinishByNumberOrPercentRegex.test(width)) {
    return width;
  }
  return 'inherit';
};

export default defineColMinWidth;
