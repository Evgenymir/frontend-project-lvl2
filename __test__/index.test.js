import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const dataOne = path.resolve(__dirname, '__fixtures__/before.json');
const dataTwo = path.resolve(__dirname, '__fixtures__/after.json');
const expected = fs.readFileSync(path.resolve(__dirname, '__fixtures__/expectedjson'), 'utf-8');

test('makeDifference', () => {
  expect(makeDifference(dataOne, dataTwo)).toBe(expected);
});
