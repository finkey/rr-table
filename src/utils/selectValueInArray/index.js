import get from 'lodash/fp/get';

const selectValueInArray = ({ key, data, separator = ' - ' }) => {
  if (Array.isArray(key) && data) {
    const values = key.map((k) => {
      const value = get(k)(data);
      if (Array.isArray(value)) {
        return value.join(separator);
      }
      return value;
    });
    return values.join(separator);
  }
  return null;
};

export default selectValueInArray;
