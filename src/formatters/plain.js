const getPath = (origin, name) => (origin.length === 0 ? name : `${origin}.${name}`);

const convert = (value) => {
  if (value instanceof Object) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const plain = (arr) => {
  const stringBuilder = (data, path) => data.map(({
    state, name, currentData, removedData,
  }) => {
    const newOrigin = getPath(path, name);
    if (state === 'compare' && currentData instanceof Array) {
      return stringBuilder(currentData, newOrigin);
    }
    if (state === 'removed') {
      return `Property '${newOrigin}' was removed`;
    }
    if (state === 'added') {
      return `Property '${newOrigin}' was added with value: ${convert(currentData)}`;
    }
    if (state === 'modified') {
      return `Property '${newOrigin}' was updated. From ${convert(removedData)} to ${convert(currentData)}`;
    }
    return false;
  }).filter((item) => item).join('\n');
  return stringBuilder(arr, '');
};

export default plain;
