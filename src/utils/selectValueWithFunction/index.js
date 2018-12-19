const selectValueWithFunction = ({ key, data }) => {
  if (typeof key === 'function') {
    return key(data);
  }
  return null;
};

export default selectValueWithFunction;
