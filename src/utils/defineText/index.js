const defineText = (data) => {
  if (typeof data === 'string' || typeof data === 'number') {
    return data;
  }
  if (data && typeof data === 'object') {
    return data.title && typeof data.title === 'string' && data.title;
  }
  return null;
};

export default defineText;
