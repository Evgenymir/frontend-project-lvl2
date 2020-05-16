import { keys, union, has } from 'lodash';

const genDiff = (dataBefore, dataAfter) => union(keys(dataBefore), keys(dataAfter)).map((key) => {
  if (has(dataBefore, key) && !has(dataAfter, key)) {
    return {
      state: 'removed', name: key, oldValue: dataBefore[key],
    };
  }
  if (has(dataAfter, key) && !has(dataBefore, key)) {
    return {
      state: 'added', name: key, newValue: dataAfter[key],
    };
  }
  if (dataBefore[key] === dataAfter[key]) {
    return {
      state: 'unmodified', name: key, oldValue: dataBefore[key],
    };
  }
  if ((typeof dataBefore[key] === 'object') && (typeof dataAfter[key] === 'object')) {
    return {
      state: 'compare', name: key, newValue: genDiff(dataBefore[key], dataAfter[key]),
    };
  }
  return {
    state: 'modified', name: key, newValue: dataAfter[key], oldValue: dataBefore[key],
  };
});

export default genDiff;
