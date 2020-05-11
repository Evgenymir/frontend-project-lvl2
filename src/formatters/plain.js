const getPath = (origin, name) => (origin.length === 0 ? name : `${origin}.${name}`);

const convert = (value) => {
  if (value instanceof Object) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const plain = (arr) => {
  const stringBuilder = (data, path) => data.map(({
    state, name, savedData, removedData,
  }) => {
    const key = getPath(path, name);
    if (state === 'compare' && savedData instanceof Array) {
      return stringBuilder(savedData, key);
    }
    if (state === 'removed') {
      return `Property '${key}' was removed`;
    }
    if (state === 'added') {
      return `Property '${key}' was added with value: ${convert(savedData)}`;
    }
    if (state === 'modified') {
      return `Property '${key}' was updated. From ${convert(removedData)} to ${convert(savedData)}`;
    }
    return false;
  }).filter((item) => item).join('\n');
  return stringBuilder(arr, '');
};

export default plain;
