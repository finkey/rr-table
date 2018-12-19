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

// let item = get(key)(data);
// if (Array.isArray(item)) {
//   item = item.join(separator || ' - ');
// }

// if (typeof key === 'object' && !Array.isArray(key)) {
//   let replacementItem = '';
//   if (Array.isArray(key.replaceBy)) {
//     const replacementKey = key.replaceBy.find(k => get(k)(data) !== undefined);
//     replacementItem = get(replacementKey)(data);
//   } else {
//     replacementItem = get(key.replaceBy)(data);
//   }

//   if (typeof key.normalize === 'function') {
//     item = key.normalize(item);
//   }

//   item = get(key.display)(data) || replacementItem;

//   if (Array.isArray(key.display)) {
//     const keysToDisplay = key.display.map(k => get(k)(data));
//     item = keysToDisplay.join(separator || ' - ');
//   }

//   if (Array.isArray(item)) {
//     item = item.join(separator || ' - ');
//   }
// }

// if (Array.isArray(key)) {
//   const keysToDisplay = key.map(k => get(k)(data));
//   item = keysToDisplay.join(separator || ' - ');
// }

// items = [...items, item];
// return null;
