import setWidthRatio from './index';

describe('setWidth', () => {
  const widthRatios = [2, 1, 0.4, 1.5];

  it('should return width as % with the right ratio - 0', () => {
    const index = 0;
    const width = setWidthRatio(widthRatios, index);
    const expected = '200%';
    expect(width).toBe(expected);
  });

  it('should return width as % with the right ratio - 1', () => {
    const index = 1;
    const width = setWidthRatio(widthRatios, index);
    const expected = '100%';
    expect(width).toBe(expected);
  });

  it('should return width as % with the right ratio - 2', () => {
    const index = 2;
    const width = setWidthRatio(widthRatios, index);
    const expected = '40%';
    expect(width).toBe(expected);
  });

  it('should return width as % with the right ratio - 3', () => {
    const index = 3;
    const width = setWidthRatio(widthRatios, index);
    const expected = '150%';
    expect(width).toBe(expected);
  });
});
