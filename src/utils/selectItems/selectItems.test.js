import selectItems from './index';

describe('selectItems', () => {
  it('should return [data] when data is a string', () => {
    const data = 'hello';
    const items = selectItems({ data });
    expect(items).toEqual([data]);
  });
  it('should return an array of only the strings from the data when there is no keys', () => {
    const data = { name: 'Anne', surname: 'bella', info: { age: 35 } };
    const expected = ['Anne', 'bella'];
    const items = selectItems({ data });
    expect(items).toEqual(expected);
  });
  it('should return an array of values of the listed keys', () => {
    const data = {
      name: 'Anne',
      surname: 'bella',
      info: { age: 35 },
      company: { job: 'singer' },
      pets: ['dog', 'cat'],
    };
    const keys = ['name', 'surname', 'info.age', 'company.job', 'pets[0]'];
    const expected = ['Anne', 'bella', 35, 'singer', 'dog'];
    const items = selectItems({ data, keys });
    expect(items).toEqual(expected);
  });
  it('should return an array of values of the listed keys - one cell should accept an array of string', () => {
    const data = {
      name: 'Anne',
      surname: 'bella',
      info: { age: 35 },
      company: { job: 'singer' },
      pets: ['dog', 'cat'],
    };
    const keys = ['name', 'surname', 'info.age', 'company.job', 'pets'];
    const separator = ', ';
    const expected = ['Anne', 'bella', 35, 'singer', 'dog, cat'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });
});
