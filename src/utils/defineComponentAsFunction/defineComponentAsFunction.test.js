import React from 'react';
// import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ExempleComponent, ExempleDefaultComponent } from '../mocks';
import defineComponentAsFunction from './index';

describe('defineComponentAsFunction', () => {
  const passedProps = { text: 'hello', color: 'papayawhip' };

  it('should return a function that returns component when component isValidElement', () => {
    const component = <ExempleComponent {...passedProps} />;
    const definedComponent = defineComponentAsFunction(component);
    const Comp = renderer.create(definedComponent());
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return component when component is a function', () => {
    const component = ExempleComponent;
    const definedComponent = defineComponentAsFunction(component);
    const Comp = renderer.create(definedComponent({ ...passedProps }));
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a function that returns defaultComponent when defaultComponent isValidElement and component is undefined', () => {
    const component = undefined;
    const defaultComp = <ExempleDefaultComponent {...passedProps} />;
    const definedComponent = defineComponentAsFunction(component, defaultComp);
    const Comp = renderer.create(definedComponent());
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return defaultComponent when defaultComponent is a function and component is undefined', () => {
    const component = undefined;
    const defaultComp = ExempleDefaultComponent;
    const definedComponent = defineComponentAsFunction(component, defaultComp);
    const Comp = renderer.create(definedComponent({ ...passedProps }));
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
