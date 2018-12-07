import Bla from './bla';

describe('Bla', () => {
  it('should multiply by 2', () => {
    const value = Bla(5);
    expect(value).toBe(10);
  });
});
