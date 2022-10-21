export const sortBy = (array, key) => {
  return array.sort((a, b) => a[key].localeCompare(b[key]));
};
