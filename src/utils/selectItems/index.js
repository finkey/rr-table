import selectValue from '../selectValue';

const selectItems = ({ data, keys, separator }) => {
  if (typeof data === 'string') {
    return [data];
  }

  if (!keys) {
    const values = Object.values(data);
    return values.filter(v => typeof v === 'string');
  }

  let items = [];

  keys.map((k) => {
    const value = selectValue({ key: k, data, separator });
    items = [...items, value];
    return null;
  });

  return items;
};

export default selectItems;
