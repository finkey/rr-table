import selectItems from './index';

describe('selectItems', () => {
  const data = {
    name: 'Anne',
    surname: 'bella',
    info: { age: 35, color: 'blue' },
    company: { job: 'singer' },
    pets: ['dog', 'cat'],
  };

  it('should return [data] when data is a string', () => {
    const items = selectItems({ data: 'hello' });
    expect(items).toEqual(['hello']);
  });

  it('should return an array of only the strings from the data when there is no keys', () => {
    const expected = ['Anne', 'bella'];
    const items = selectItems({ data });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys', () => {
    const keys = ['name', 'surname', 'info.age', 'company.job', 'pets[0]'];
    const expected = ['Anne', 'bella', 35, 'singer', 'dog'];
    const items = selectItems({ data, keys });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys - one cell should accept an array of string', () => {
    const keys = ['name', 'surname', 'info.age', 'company.job', 'pets'];
    const separator = ', ';
    const expected = ['Anne', 'bella', 35, 'singer', 'dog, cat'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys - one cell should accept an array of numbers', () => {
    const dataWithNumbers = {
      name: 'Anne',
      surname: 'bella',
      info: { age: 35 },
      company: { job: 'singer' },
      ca: [50000, 120000],
    };

    const keys = ['name', 'surname', 'info.age', 'company.job', 'ca'];
    const expected = ['Anne', 'bella', 35, 'singer', '50000 - 120000'];
    const items = selectItems({ data: dataWithNumbers, keys });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys - one cell should accept an array of numbers in keys', () => {
    const dataWithNumbers = {
      name: 'Anne',
      surname: 'bella',
      info: { age: 35 },
      company: { job: 'singer' },
      ca: { min: 30000, max: 200000 },
    };
    const keys = ['name', 'surname', 'info.age', 'company.job', ['ca.min', 'ca.max']];
    const expected = ['Anne', 'bella', 35, 'singer', '30000 - 200000'];
    const items = selectItems({ data: dataWithNumbers, keys });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys - when key is an object it should display the "display" key and if it is undefined display the replacement', () => {
    const keys = [
      'name',
      'surname',
      'info.age',
      'company.job',
      { display: 'color', replaceBy: 'info.color' },
      'pets',
    ];
    const separator = ', ';
    const expected = ['Anne', 'bella', 35, 'singer', 'blue', 'dog, cat'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });

  it('should return an array of values of the listed keys - when key is an object it should display the "display" key and if it is undefined display the first replacement in the list that is not undefined', () => {
    const keys = [
      'name',
      'surname',
      'info.age',
      'company.job',
      { display: 'color', replaceBy: ['company.color', 'info.color'] },
      'pets',
    ];
    const separator = ', ';
    const expected = ['Anne', 'bella', 35, 'singer', 'blue', 'dog, cat'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });

  it('should normalize the text when the key is an object and has a "normalize" key', () => {
    const normalizeFunc = text => text.toUpperCase();
    const keys = [
      { display: 'name', normalize: normalizeFunc },
      'surname',
      'info.age',
      'company.job',
      { display: 'color', replaceBy: ['company.color', 'info.color'] },
      'pets',
    ];
    const separator = ', ';
    const expected = ['ANNE', 'bella', 35, 'singer', 'blue', 'dog, cat'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });

  it('should normalize the text when the key is an object and has a "normalize" key and display is an array', () => {
    const normalizeFunc = text => text.toUpperCase();
    const keys = [
      { display: 'name', normalize: normalizeFunc },
      'surname',
      'info.age',
      'company.job',
      { display: 'color', replaceBy: ['company.color', 'info.color'] },
      { display: ['pets[0]', 'pets[1]'], normalize: normalizeFunc },
    ];
    const separator = ', ';
    const expected = ['ANNE', 'bella', 35, 'singer', 'blue', 'DOG, CAT'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });

  it('should return the right value when key is a function', () => {
    const normalizeFunc = text => text.toUpperCase();
    const keys = [
      { display: 'name', normalize: normalizeFunc },
      'surname',
      'info.age',
      'company.job',
      { display: 'color', replaceBy: ['company.color', 'info.color'] },
      d => d.pets.join(', ').toUpperCase(),
    ];
    const separator = ', ';
    const expected = ['ANNE', 'bella', 35, 'singer', 'blue', 'DOG, CAT'];
    const items = selectItems({ data, keys, separator });
    expect(items).toEqual(expected);
  });
});
