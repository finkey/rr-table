import { isValidElement } from 'react';

const defineComp = (component, defaultComponent) => {
  if (isValidElement(component)) {
    return () => component;
  }

  if (typeof component === 'function') {
    return component;
  }

  if (isValidElement(defaultComponent)) {
    return () => defaultComponent;
  }

  if (typeof defaultComponent === 'function') {
    return defaultComponent;
  }
};

export default defineComp;
