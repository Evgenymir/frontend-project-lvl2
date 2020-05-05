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
      state, name, currentData, removedData,
    }) => {
      if (state === 'compare' && currentData instanceof Array) {
        return `${indent}  ${name}: {\n${stringBuilder(currentData, indentCounter + 2)}\n${indent}  }`;
      }
      if (state === 'unmodified') {
        return `${indent}  ${name}: ${convertToString(currentData, indent)}`;
      }
      if (state === 'removed') {
        return `${indent}- ${name}: ${convertToString(removedData, indent)}`;
      }
      if (state === 'added') {
        return `${indent}+ ${name}: ${convertToString(currentData, indent)}`;
      }
      return `${indent}+ ${name}: ${convertToString(currentData, indent)}\n${indent}- ${name}: ${convertToString(removedData, indent)}`;
    }).join('\n');
  };
  return `{\n${stringBuilder(arr, 1)}\n}`;
};

export default normal;
