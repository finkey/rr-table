import get from 'lodash/fp/get';
import selectValueInArray from '../selectValueInArray';

const selectValueInObject = ({ key, data, separator }) => {
  if (typeof key === 'object' && !Array.isArray(key) && data) {
    let value;
    if (typeof key.display === 'string') {
      value = get(key.display)(data);
    }

    if (!value && typeof key.replaceBy === 'string') {
      value = get(key.replaceBy)(data);
    }

    if (!value && Array.isArray(key.replaceBy)) {
      const replacementKey = key.replaceBy.find(k => get(k)(data) !== undefined);
      value = get(replacementKey)(data);
    }

    if (Array.isArray(key.display)) {
      value = selectValueInArray({ key: key.display, data, separator });
    }

    if (typeof key.normalize === 'function') {
      value = key.normalize(value);
    }
    return value;
  }
  return null;
};

export default selectValueInObject;
