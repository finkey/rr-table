import selectValueWithSring from './index';

describe('selectValueWithSring', () => {
  it('should return null when there is no key', () => {
    const data = { name: 'Anne', surname: 'bella' };
    const key = undefined;
    const value = selectValueWithSring({ key, data });
    expect(value).toEqual(null);
  });

  it('should return null when there is no data', () => {
    const data = undefined;
    const key = 'name';
    const value = selectValueWithSring({ key, data });
    expect(value).toEqual(null);
  });

  it('should return the right value when the key is a string', () => {
    const data = { name: 'Anne', surname: 'bella' };
    const key = 'name';
    const expected = 'Anne';
    const value = selectValueWithSring({ key, data });
    expect(value).toEqual(expected);
  });

  it('should return the right value when the key is a string (and value is a number)', () => {
    const data = { name: 'Anne', age: 42 };
    const key = 'age';
    const expected = 42;
    const value = selectValueWithSring({ key, data });
    expect(value).toEqual(expected);
  });
});
