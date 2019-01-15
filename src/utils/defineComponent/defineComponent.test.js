import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ExempleComponent, ExempleDefaultComponent } from '../mocks';
import defineComponent from './index';

describe('defineComponent', () => {
  const passedProps = { text: 'hello', color: 'papayawhip' };

  it('should return component when component is an object', () => {
    const component = <ExempleComponent {...passedProps} />;
    const definedComponent = defineComponent({ component });
    const Comp = renderer.create(definedComponent);
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a call to the function with the passedProps when component is a function', () => {
    const component = ExempleComponent;
    const definedComponent = defineComponent({ component, passedProps });
    const Comp = renderer.create(definedComponent);
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a call to the function with the passedProps when component is a function (render props)', () => {
    const component = ({ text }) => <p>{text}</p>;
    component.propTypes = { text: PropTypes.string };
    const definedComponent = defineComponent({ component, passedProps });
    const Comp = renderer.create(definedComponent);
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return default component when component is not provided', () => {
    const defaultComp = (
      <ExempleDefaultComponent text={passedProps.text} color={passedProps.color} />
    );
    const definedComponent = defineComponent({ passedProps, defaultComp });
    const Comp = renderer.create(definedComponent);
    const tree = Comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
