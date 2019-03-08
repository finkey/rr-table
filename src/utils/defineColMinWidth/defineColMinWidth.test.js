import defineColMinWidth from './index';

describe('defineColMinWidth', () => {
  it('should return "inherit" when given "xxx%"', () => {
    const width = '100%';
    const colMinWidth = defineColMinWidth(width);
    const expected = 'inherit';
    expect(colMinWidth).toBe(expected);
  });

  it('should return "inherit" when given "a number"', () => {
    const width = 2;
    const colMinWidth = defineColMinWidth(width);
    const expected = 'inherit';
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "px"', () => {
    const width = '200px';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "em"', () => {
    const width = '15em';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "rem"', () => {
    const width = '10rem';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "pt"', () => {
    const width = '100pt';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "pc"', () => {
    const width = '30pc';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });

  it('should return "width" when given a width in "vw"', () => {
    const width = '25vw';
    const colMinWidth = defineColMinWidth(width);
    const expected = width;
    expect(colMinWidth).toBe(expected);
  });
});
