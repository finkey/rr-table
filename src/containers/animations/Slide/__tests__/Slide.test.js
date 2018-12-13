import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SlideTransition from '../SlideTransition';
import SlideComp from '../SlideComp';

describe('"Slide" animation test suite', () => {
  test('"SlideComp" should match snapshot', () => {
    const comp = renderer.create(<SlideComp />);
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('"SlideTransition" should match snapshot', () => {
    const comp = renderer.create(
      <SlideTransition>{status => <SlideComp status={status} />}</SlideTransition>,
    );
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
