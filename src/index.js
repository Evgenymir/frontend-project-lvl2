import fs from 'fs';
import path from 'path';
import parser from './parsers';
import render from './render';

const analysisFile = (filePath) => {
  const analysisFileData = fs.readFileSync(path.resolve(filePath), 'utf-8', (error, data) => {
    if (error) {
      throw new Error(error);
    }
    return data;
  });
  const extnameFile = path.extname(filePath);
  return parser(extnameFile)(analysisFileData);
};

const makeDifference = (pathOne, pathTwo) => {
  const getKeys = (dataOne, dataTwo) => {
    const data1Keys = Object.keys(dataOne);
    const data2Keys = Object.keys(dataTwo);
    const result = [...data1Keys];

    data2Keys.forEach((key) => {
      if (!result.includes(key)) {
        result.push(key);
      }
    });

    return result;
  };

  const diff = (dataBefore, dataAfter) => getKeys(dataBefore, dataAfter).map((key) => {
    if ((typeof dataBefore[key] === 'object') && (typeof dataAfter[key] === 'object')) {
      return {
        state: 'compare', name: key, currentData: diff(dataBefore[key], dataAfter[key]),
      };
    }
    if (dataBefore[key] === dataAfter[key]) {
      return {
        state: 'unmodified', name: key, currentData: dataBefore[key],
      };
    }
    if (key in dataBefore && !(key in dataAfter)) {
      return {
        state: 'removed', name: key, removedData: dataBefore[key],
      };
    }
    if (key in dataAfter && !(key in dataBefore)) {
      return {
        state: 'added', name: key, currentData: dataAfter[key],
      };
    }
    return {
      state: 'modified', name: key, currentData: dataAfter[key], removedData: dataBefore[key],
    };
  });

  const data1 = analysisFile(pathOne);
  const data2 = analysisFile(pathTwo);
  return render(diff(data1, data2));
};

export default makeDifference;
