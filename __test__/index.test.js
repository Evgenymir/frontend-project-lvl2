import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const getFormat = (name, format) => path.resolve(__dirname, `__fixtures__/${name}${format}`);
const expected = (format) => fs.readFileSync(path.resolve(__dirname, `__fixtures__/expected${format}`), 'utf-8');

test.each(['.json', '.yaml', '.ini'])(
  'makeDifference %s',
  (format) => {
    expect(makeDifference(getFormat('before', format), getFormat('after', format), 'normal')).toBe(expected('normal'));
    expect(makeDifference(getFormat('before', format), getFormat('after', format), 'plain')).toBe(expected('plain'));
    expect(makeDifference(getFormat('before', format), getFormat('after', format), 'json')).toBe(expected('json'));
  },
);
