import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const getFixturePath = (name, format) => path.resolve(__dirname, `__fixtures__/${name}.${format}`);
const getExpectedResult = (format) => fs.readFileSync(path.resolve(__dirname, `__fixtures__/expected${format}`), 'utf-8');

test.each(['json', 'yaml', 'ini'])(
  'makeDifference %s',
  (format) => {
    expect(makeDifference(getFixturePath('before', format), getFixturePath('after', format), 'normal')).toBe(getExpectedResult('normal'));
    expect(makeDifference(getFixturePath('before', format), getFixturePath('after', format), 'plain')).toBe(getExpectedResult('plain'));
    expect(makeDifference(getFixturePath('before', format), getFixturePath('after', format), 'json')).toBe(getExpectedResult('json'));
  },
);
