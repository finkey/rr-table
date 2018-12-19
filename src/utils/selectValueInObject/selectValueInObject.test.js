import selectValueInObject from './index';

describe('selectValueInObject', () => {
  const data = {
    name: 'Jordan',
    surname: 'Michael',
    age: 35,
    pets: ['cat', 'dog'],
  };

  it('should return the right key normalized', () => {
    const key = { display: 'name', normalize: value => value && value.toUpperCase() };
    const expected = 'JORDAN';
    const value = selectValueInObject({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the right key normalized when display is an array', () => {
    const key = { display: ['surname', 'name'], normalize: value => value && value.toUpperCase() };
    const expected = 'MICHAEL - JORDAN';
    const value = selectValueInObject({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return replaceBy normalized when the value is undefined', () => {
    const key = {
      display: 'bla',
      normalize: value => value && value.toUpperCase(),
      replaceBy: 'name',
    };
    const expected = 'JORDAN';
    const value = selectValueInObject({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the first value of replaceBy as an array that is not undefined, normalized when the value is undefined', () => {
    const key = {
      display: 'bla',
      normalize: value => value && value.toUpperCase(),
      replaceBy: ['haha', 'name'],
    };
    const expected = 'JORDAN';
    const value = selectValueInObject({ key, data });
    expect(value).toEqual(expected);
  });
});
