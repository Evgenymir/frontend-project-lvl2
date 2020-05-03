import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const getFormat = (name, format) => path.resolve(__dirname, `__fixtures__/${name}${format}`);
const expected = fs.readFileSync(path.resolve(__dirname, '__fixtures__/expected'), 'utf-8');

test.each(['.json', '.yaml', '.ini'])(
  'makeDifference %s',
  (format) => {
    expect(makeDifference(getFormat('before', format), getFormat('after', format))).toBe(expected);
  },
);
