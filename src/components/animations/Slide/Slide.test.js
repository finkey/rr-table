import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Slide from './index';

describe('Slide', () => {
  test('should match snapshot', () => {
    const comp = renderer.create(<Slide />);
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
