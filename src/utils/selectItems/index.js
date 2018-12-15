import get from 'lodash/fp/get';

const selectItems = ({ data, keys, separator }) => {
  let items = [];

  if (typeof data === 'string') {
    items = [...items, data];
  } else if (keys) {
    keys.map((key) => {
      let item = get(key)(data);
      if (Array.isArray(item)) {
        item = item.join(separator || ' - ');
      }
      items = [...items, item];
      return null;
    });
  } else {
    const values = Object.values(data);
    items = values.filter(v => typeof v === 'string');
  }
  return items;
};

export default selectItems;
