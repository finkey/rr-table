import React from 'react';
import SlideTransition from './SlideTransition';
import SlideComp from './SlideComp';

const Slide = ({ children, isOpen, delay }) => (
  <SlideTransition isOpen={isOpen} delay={delay}>
    {status => <SlideComp status={status}>{children}</SlideComp>}
  </SlideTransition>
);

export default Slide;
