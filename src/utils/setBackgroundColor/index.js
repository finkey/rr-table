const setBackgroundColor = (index, colored) => {
  if ((!index && index !== 0) || !colored) {
    return false;
  }
  if (typeof colored === 'object') {
    if (colored.parity === 'even' || colored.parity % 2 === 0) {
      return index % 2 === 0 ? colored.color || true : false;
    }
    if (colored.parity === 'odd' || colored.parity % 2 !== 0) {
      return index % 2 !== 0 ? colored.color || true : false;
    }
  }
  if (typeof colored === 'string') {
    if (index % 2 !== 0) {
      return colored;
    }
    return false;
  }
  if (colored === true && index % 2 === 0) {
    return true;
  }
  return false;
};

export default setBackgroundColor;
