const defineComponent = ({ component, passedProps, defaultComp }) => {
  switch (typeof component) {
    case 'function':
      return component(passedProps);

    case 'object':
      return component;

    default:
      return defaultComp;
  }
};

export default defineComponent;
