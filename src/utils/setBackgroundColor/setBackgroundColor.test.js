import setBackgroundColor from './index';

describe('setBackgroundColor', () => {
  const color = 'blue';

  it('should return false when no argument is provided', () => {
    const backgroundColor = setBackgroundColor();
    expect(backgroundColor).toBe(false);
  });

  it('should return false when index is undefined', () => {
    const backgroundColor = setBackgroundColor(undefined, 'blue');
    expect(backgroundColor).toBe(false);
  });

  it('should return false when colored is undefined', () => {
    const backgroundColor = setBackgroundColor(1, undefined);
    expect(backgroundColor).toBe(false);
  });

  it('should return true when colored is true and index is odd', () => {
    const backgroundColor = setBackgroundColor(1, color);
    expect(backgroundColor).toBe(color);
  });

  it('should return false when colored is true and index is even', () => {
    const backgroundColor = setBackgroundColor(2, color);
    expect(backgroundColor).toBe(false);
  });

  it('should return colored when colored is a string and index is odd', () => {
    const backgroundColor = setBackgroundColor(1, color);
    expect(backgroundColor).toBe(color);
  });

  it('should return false when colored is a string and index is even', () => {
    const backgroundColor = setBackgroundColor(2, color);
    expect(backgroundColor).toBe(false);
  });

  it('should return colored.color when colored is an object and index and colored.parity are even', () => {
    const colored = { parity: 'even', color };
    const backgroundColor = setBackgroundColor(2, colored);
    expect(backgroundColor).toBe(color);
  });

  it('should return colored.color when colored is an object and index and colored.parity are even numbers', () => {
    const colored = { parity: 2, color };
    const backgroundColor = setBackgroundColor(6, colored);
    expect(backgroundColor).toBe(color);
  });

  it('should return false when colored is an object and colored.parity is an even number and index is an odd number', () => {
    const colored = { parity: 2, color };
    const backgroundColor = setBackgroundColor(3, colored);
    expect(backgroundColor).toBe(false);
  });

  it('should return colored.color when colored is an object and index and colored.parity are odd', () => {
    const colored = { parity: 'odd', color };
    const backgroundColor = setBackgroundColor(3, colored);
    expect(backgroundColor).toBe(color);
  });

  it('should return colored.color when colored is an object and index and colored.parity are even numbers', () => {
    const colored = { parity: 1, color };
    const backgroundColor = setBackgroundColor(5, colored);
    expect(backgroundColor).toBe(color);
  });

  it('should return false when colored is an object and colored.parity is an odd number and index is an even number', () => {
    const colored = { parity: 3, color };
    const backgroundColor = setBackgroundColor(4, colored);
    expect(backgroundColor).toBe(false);
  });
});
