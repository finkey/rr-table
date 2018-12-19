const normalize = (value, normalizer) => {
  if (normalizer) {
    return normalizer(value);
  }
  return value;
};

export default normalize;
