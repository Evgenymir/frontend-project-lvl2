import fs from 'fs';
import path from 'path';
import parse from './parsers';
import render from './formatters';
import genDiff from './diff';

const parseFile = (filePath) => {
  const analysisFileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const extnameFile = path.extname(filePath).slice(1);
  return parse(extnameFile, analysisFileData);
};

const makeDifference = (pathOne, pathTwo, format) => {
  const dataBefore = parseFile(pathOne);
  const dataAfter = parseFile(pathTwo);
  return render(genDiff(dataBefore, dataAfter), format);
};

export default makeDifference;
