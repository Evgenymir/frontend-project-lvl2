const convertToString = (data, indent) => {
  if (typeof data === 'object') {
    return Object.entries(data).map(([key, value]) => `{\n${indent}      ${key}: ${value}\n${indent}  }`);
  }
  return data;
};

const normal = (arr) => {
  const tab = '  ';
  const stringBuilder = (data, indentCounter) => {
    const indent = tab.repeat(indentCounter);
    return data.map(({
      state, name, savedData, removedData,
    }) => {
      if (state === 'compare' && savedData instanceof Array) {
        return `${indent}  ${name}: {\n${stringBuilder(savedData, indentCounter + 2)}\n${indent}  }`;
      }
      if (state === 'unmodified') {
        return `${indent}  ${name}: ${convertToString(savedData, indent)}`;
      }
      if (state === 'removed') {
        return `${indent}- ${name}: ${convertToString(removedData, indent)}`;
      }
      if (state === 'added') {
        return `${indent}+ ${name}: ${convertToString(savedData, indent)}`;
      }
      return `${indent}+ ${name}: ${convertToString(savedData, indent)}\n${indent}- ${name}: ${convertToString(removedData, indent)}`;
    }).join('\n');
  };
  return `{\n${stringBuilder(arr, 1)}\n}`;
};

export default normal;
