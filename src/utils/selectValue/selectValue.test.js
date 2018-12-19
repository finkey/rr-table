import selectValue from './index';

describe('selectValue', () => {
  const data = {
    name: 'Popins',
    age: 42,
    surname: 'Marie',
    pets: ['cat', 'dog'],
  };
  it('should return null when there is no key', () => {
    const value = selectValue({ key: undefined, data });
    expect(value).toEqual(null);
  });

  it('should return null when there is no data', () => {
    const key = 'name';
    const value = selectValue({ key, data: undefined });
    expect(value).toEqual(null);
  });

  it('should return the right value when the key is a string', () => {
    const key = 'name';
    const expected = 'Popins';
    const value = selectValue({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the right value when the key is a string (and value is a number)', () => {
    const key = 'age';
    const expected = 42;
    const value = selectValue({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the joinded values as a string when the key is an array', () => {
    const key = ['surname', 'name'];
    const expected = 'Marie - Popins';
    const value = selectValue({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the joinded values as a string when the key is an array with the right separator', () => {
    const key = ['surname', 'name', 'age'];
    const separator = ', ';
    const expected = 'Marie, Popins, 42';
    const value = selectValue({ key, data, separator });
    expect(value).toEqual(expected);
  });

  it('should return the joinded values as a string when the key is a string and the value is an array', () => {
    const key = 'pets';
    const separator = ', ';
    const expected = 'cat, dog';
    const value = selectValue({ key, data, separator });
    expect(value).toEqual(expected);
  });

  it('should return the joinded values as a string when the key is an array and some values are arrays', () => {
    const key = ['surname', 'name', 'pets'];
    const expected = 'Marie - Popins - cat - dog';
    const value = selectValue({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the result of the function', () => {
    const key = d => d.name.toUpperCase();
    const value = selectValue({ key, data });
    const expected = 'POPINS';
    expect(value).toEqual(expected);
  });
});
