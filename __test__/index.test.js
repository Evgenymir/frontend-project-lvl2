import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const getFormat = (name, format) => path.resolve(__dirname, `__fixtures__/${name}${format}`);
const expected = fs.readFileSync(path.resolve(__dirname, '__fixtures__/expected'), 'utf-8');
const expectedPlain = fs.readFileSync(path.resolve(__dirname, '__fixtures__/expectedPlain'), 'utf-8');

test.each(['.json', '.yaml', '.ini'])(
  'makeDifference normal %s',
  (format) => {
    expect(makeDifference(getFormat('before', format),
      getFormat('after', format), 'normal')).toBe(expected);
  },
);

test.each(['.json', '.yaml', '.ini'])(
  'makeDifference plain %s',
  (format) => {
    expect(makeDifference(getFormat('before', format),
      getFormat('after', format), 'plain')).toBe(expectedPlain);
  },
);
