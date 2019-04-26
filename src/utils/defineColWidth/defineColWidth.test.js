import defineColWidth from './index';

describe('defineColWidth', () => {
  it('should return "100%" when given "1"', () => {
    const width = defineColWidth(1);
    const expected = '100%';
    expect(width).toBe(expected);
  });

  it('should return "200%" when given "2"', () => {
    const width = defineColWidth(2);
    const expected = '200%';
    expect(width).toBe(expected);
  });

  it('should return "150%" when given "1.5"', () => {
    const width = defineColWidth(1.5);
    const expected = '150%';
    expect(width).toBe(expected);
  });

  it('should return "250px" when given "250px"', () => {
    const width = defineColWidth('250px');
    const expected = '250px';
    expect(width).toBe(expected);
  });

  it('should return "25rem" when given "25rem"', () => {
    const width = defineColWidth('25rem"');
    const expected = '25rem"';
    expect(width).toBe(expected);
  });
});
