import fs from 'fs';
import path from 'path';
import parser from './parsers';

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
  const data1 = analysisFile(pathOne);
  const data2 = analysisFile(pathTwo);
  const data1Keys = Object.keys(data1);
  const data2Keys = Object.keys(data2);
  const listKeys = [...data1Keys];

  data2Keys.forEach((key) => {
    if (!data1Keys.includes(key)) {
      listKeys.push(key);
    }
  });

  const result = listKeys.map((key) => {
    if (data1[key] === data2[key]) {
      return `   ${key}: ${data1[key]}`;
    }
    if (key in data1 && !(key in data2)) return `- ${key}: ${data1[key]}`;
    if (key in data2 && !(key in data1)) return `+ ${key}: ${data2[key]}`;
    return `+ ${key}: ${data2[key]}\n - ${key}: ${data1[key]}`;
  });
  return `{\n${result.join('\n ')}\n}`;
};

export default makeDifference;
