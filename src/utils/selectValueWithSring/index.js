import get from 'lodash/fp/get';

const selectValueWithSring = ({ key, data, separator }) => {
  if (typeof key === 'string' && data) {
    let value = get(key)(data);
    if (Array.isArray(value)) {
      value = value.join(separator);
    }
    return value;
  }
  return null;
};

export default selectValueWithSring;
