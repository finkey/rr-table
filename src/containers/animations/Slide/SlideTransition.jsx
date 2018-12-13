import React from 'react';
import Transition from 'react-transition-group/Transition';

const SlideTransition = ({ children, isOpen, delay = 300 }) => (
  <Transition
    in={isOpen}
    timeout={{
      enter: 0,
      exit: delay,
    }}
  >
    {status => children(status)}
  </Transition>
);

export default SlideTransition;
