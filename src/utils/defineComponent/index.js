const defineComponent = ({ component, passedProps, defaultComp }) => {
  console.log('typeof defaultComp', typeof defaultComp);
  if (typeof component === 'function') {
    return component(passedProps);
  }
  if (typeof component === 'object') {
    return component;
  }

  if (typeof defaultComp === 'function') {
    return defaultComp(passedProps);
  }

  if (typeof defaultComp === 'object') {
    return defaultComp;
  }

  return defaultComp;
};

export default defineComponent;
