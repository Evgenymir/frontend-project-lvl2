import { keys, union } from './utils';

const genDiff = (dataBefore, dataAfter) => union(keys(dataBefore), keys(dataAfter)).map((key) => {
  const has = Object.prototype.hasOwnProperty;

  if (has.call(dataBefore, key) && !has.call(dataAfter, key)) {
    return {
      state: 'removed', name: key, removedData: dataBefore[key],
    };
  }
  if (has.call(dataAfter, key) && !has.call(dataBefore, key)) {
    return {
      state: 'added', name: key, savedData: dataAfter[key],
    };
  }
  if (dataBefore[key] === dataAfter[key]) {
    return {
      state: 'unmodified', name: key, savedData: dataBefore[key],
    };
  }
  if ((typeof dataBefore[key] === 'object') && (typeof dataAfter[key] === 'object')) {
    return {
      state: 'compare', name: key, savedData: genDiff(dataBefore[key], dataAfter[key]),
    };
  }
  return {
    state: 'modified', name: key, savedData: dataAfter[key], removedData: dataBefore[key],
  };
});

export default genDiff;
