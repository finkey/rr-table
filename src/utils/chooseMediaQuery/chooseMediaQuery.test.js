import { DEFAULT_MEDIA_QUERY } from 'config/constants/mediaQueries';
import chooseMediaQuery from './index';

describe('chooseMediaQuery', () => {
  const breakpoints = [300, 500, 900];

  it('should return null when breakpoints is undefined', () => {
    const mediaQuery = chooseMediaQuery();
    expect(mediaQuery).toBe(null);
  });

  it('should return (min-width: 0) when priority is NOT bigger than 1', () => {
    const mediaQuery = chooseMediaQuery(breakpoints, 1);
    expect(mediaQuery).toBe(DEFAULT_MEDIA_QUERY);
  });

  it('should return last breakpoint query when priority is undefined', () => {
    const mediaQuery = chooseMediaQuery(breakpoints);
    expect(mediaQuery).toBe('(max-width: 900px)');
  });
  it('should return first breakpoint query when priority is 2', () => {
    const mediaQuery = chooseMediaQuery(breakpoints, 2);
    expect(mediaQuery).toBe('(max-width: 300px)');
  });
  it('should return second breakpoint query when priority is 3', () => {
    const mediaQuery = chooseMediaQuery(breakpoints, 3);
    expect(mediaQuery).toBe('(max-width: 500px)');
  });
  it('should return first breakpoint query when priority is 4', () => {
    const mediaQuery = chooseMediaQuery(breakpoints, 4);
    expect(mediaQuery).toBe('(max-width: 900px)');
  });
  it('should return last breakpoint query when priority is too hight', () => {
    const mediaQuery = chooseMediaQuery(breakpoints, 6);
    expect(mediaQuery).toBe('(max-width: 900px)');
  });
});
