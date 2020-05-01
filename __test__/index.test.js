import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const dataOne = path.resolve(__dirname, '__fixtures__/before.json');
const dataTwo = path.resolve(__dirname, '__fixtures__/after.json');

const dataOneYaml = path.resolve(__dirname, '__fixtures__/before.yaml');
const dataTwoYaml = path.resolve(__dirname, '__fixtures__/after.yaml');

const expected = fs.readFileSync(path.resolve(__dirname, '__fixtures__/expected'), 'utf-8');

test('makeDifference', () => {
  expect(makeDifference(dataOne, dataTwo)).toBe(expected);
  expect(makeDifference(dataOneYaml, dataTwoYaml)).toBe(expected);
});
