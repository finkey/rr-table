import { DEFAULT_MEDIA_QUERY } from 'config/constants/mediaQueries';

const chooseMediaQuery = (breakpoints, priority) => {
  if (!breakpoints || !Array.isArray(breakpoints)) {
    return null;
  }
  if (!priority || priority > breakpoints.length + 2) {
    return `(max-width: ${breakpoints[breakpoints.length - 1]}px)`;
  }
  if (priority <= 1) {
    return DEFAULT_MEDIA_QUERY;
  }

  return `(max-width: ${breakpoints[priority - 2]}px)`;
};

export default chooseMediaQuery;
