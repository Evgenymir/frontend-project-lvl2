const convert = (data, indent) => {
  if (!(data instanceof Object)) {
    return data;
  }

  return Object.entries(data).map(([key, value]) => `{\n${indent}      ${key}: ${value}\n${indent}  }`);
};
const tab = '  ';
const tabsCount = 2;

const normal = (items) => {
  const buildsString = (data, indentCounter) => {
    const indent = tab.repeat(indentCounter);
    return data.map(({
      state, name, newValue, oldValue,
    }) => {
      switch (state) {
        case 'compare':
          return `${indent}  ${name}: {\n${buildsString(newValue, indentCounter + tabsCount)}\n${indent}  }`;
        case 'unmodified':
          return `${indent}  ${name}: ${convert(oldValue, indent)}`;
        case 'removed':
          return `${indent}- ${name}: ${convert(oldValue, indent)}`;
        case 'added':
          return `${indent}+ ${name}: ${convert(newValue, indent)}`;
        default:
          return `${indent}+ ${name}: ${convert(newValue, indent)}\n${indent}- ${name}: ${convert(oldValue, indent)}`;
      }
    }).join('\n');
  };
  return `{\n${buildsString(items, 1)}\n}`;
};

export default normal;
