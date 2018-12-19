import selectValueWithSring from '../selectValueWithSring';
import selectValueWithFunction from '../selectValueWithFunction';
import selectValueInArray from '../selectValueInArray';
import selectValueInObject from '../selectValueInObject';

const selectValue = ({ key, data, separator = ' - ' }) => {
  /** No key / no data */
  if (!key || !data) {
    return null;
  }

  /** Key is a string */
  if (typeof key === 'string') {
    return selectValueWithSring({ key, data, separator });
  }

  /** Key is a function */
  if (typeof key === 'function') {
    return selectValueWithFunction({ key, data });
  }

  /** Key is an array */
  if (Array.isArray(key)) {
    return selectValueInArray({ key, data, separator });
  }

  /** Key is an object */
  if (typeof key === 'object') {
    return selectValueInObject({ key, data, separator });
  }

  return null;
};

export default selectValue;
