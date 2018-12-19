import selectValueWithFunction from './index';

describe('selectValueWithFunction', () => {
  const data = {
    name: 'Anne',
    surname: 'bella',
    pets: ['cat', 'dog'],
    age: 32,
  };

  it('should return the result of the function', () => {
    const key = d => d.name.toUpperCase();
    const value = selectValueWithFunction({ key, data });
    const expected = 'ANNE';
    expect(value).toEqual(expected);
  });

  it("should return null if key isn't a function", () => {
    const key = 'notAFunction';
    const value = selectValueWithFunction({ key, data });
    expect(value).toEqual(null);
  });
});
