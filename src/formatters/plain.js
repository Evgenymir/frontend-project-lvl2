const getPath = (origin, name) => (origin.length === 0 ? name : `${origin}.${name}`);
const convert = (value) => {
  if (value instanceof Object) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const plain = (items) => {
  const buildsString = (data, path) => data.map(({
    state, name, newValue, oldValue,
  }) => {
    const key = getPath(path, name);
    switch (state) {
      case 'compare':
        return buildsString(newValue, key);
      case 'removed':
        return `Property '${key}' was removed`;
      case 'added':
        return `Property '${key}' was added with value: ${convert(newValue)}`;
      case 'modified':
        return `Property '${key}' was updated. From ${convert(oldValue)} to ${convert(newValue)}`;
      case 'unmodified':
        return false;
      default:
        throw new Error(`Unknown state: ${state}`);
    }
  }).filter((item) => item).join('\n');
  return buildsString(items, '');
};

export default plain;
