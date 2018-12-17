import get from 'lodash/fp/get';

const selectItems = ({ data, keys, separator }) => {
  if (typeof data === 'string') {
    return [data];
  }

  if (!keys) {
    const values = Object.values(data);
    return values.filter(v => typeof v === 'string');
  }

  let items = [];

  keys.map((key) => {
    let item = get(key)(data);
    if (Array.isArray(item)) {
      item = item.join(separator || ' - ');
    }

    if (typeof key === 'object' && !Array.isArray(key)) {
      let replacementItem = '';
      if (Array.isArray(key.replaceBy)) {
        const replacementKey = key.replaceBy.find(k => get(k)(data) !== undefined);
        replacementItem = get(replacementKey)(data);
      } else {
        replacementItem = get(key.replaceBy)(data);
      }
      item = get(key.display)(data) || replacementItem;
    }

    if (Array.isArray(key)) {
      const bla = key.map(k => get(k)(data));
      item = bla.join(separator || ' - ');
    }

    items = [...items, item];
    return null;
  });

  return items;
};

export default selectItems;
