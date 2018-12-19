import normalize from './index';

describe('normalize', () => {
  it('should return normalized value (when value is a string)', () => {
    const value = 'hello';
    const normalizer = v => v.toUpperCase();
    const normalizedValue = normalize(value, normalizer);
    const expected = 'HELLO';
    expect(normalizedValue).toEqual(expected);
  });

  it('should return normalized value (when value is a number)', () => {
    const value = 42;
    const normalizer = v => v * 2;
    const normalizedValue = normalize(value, normalizer);
    const expected = 84;
    expect(normalizedValue).toEqual(expected);
  });
});
