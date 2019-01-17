import { isValidElement } from 'react';

const bla = (comp, defaultComp) => {
  if (isValidElement(comp)) {
    return comp;
  }

  if (typeof comp === 'function') {
    // console.log('-- head children', comp().props.children);
    return comp();
  }

  if (isValidElement(defaultComp)) {
    return defaultComp;
  }

  if (typeof defaultComp === 'function') {
    return defaultComp();
  }

  return null;
};

export default bla;
