import selectValueInArray from './index';

describe('selectValueInArray', () => {
  const data = {
    name: 'Jordan',
    surname: 'Michael',
    age: 35,
    pets: ['cat', 'dog'],
  };
  it('should return the joined values as a string', () => {
    const key = ['surname', 'name'];
    const expected = 'Michael - Jordan';
    const values = selectValueInArray({ key, data });
    expect(values).toEqual(expected);
  });

  it("should replace the undefined value by `replaceBy` when it's a string", () => {
    const key = ['surname', 'name', 'pets'];
    const expected = 'Michael - Jordan - cat - dog';
    const values = selectValueInArray({ key, data });
    expect(values).toEqual(expected);
  });

  it('should return null when there is no data', () => {
    const key = ['surname', 'name', 'pets'];
    const values = selectValueInArray({ key, data: undefined });
    expect(values).toEqual(null);
  });

  it('should return null when there is no key', () => {
    const values = selectValueInArray({ key: undefined, data });
    expect(values).toEqual(null);
  });
});
