import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index';

const getFixturePath = (filename) => path.resolve(__dirname, '__fixtures__', filename);
const getFixtureFile = (name, format) => getFixturePath(`${name}.${format}`);
const getExpectedResult = (format) => fs.readFileSync(getFixturePath(`expected${format}`), 'utf-8');
const formats = ['tree', 'plain', 'json'];
const extensions = ['json', 'yaml', 'ini'];

formats.forEach((format) => {
  test.each(extensions)(
    `makeDifference extension: %s, format: ${format}`,
    (extension) => {
      const actualValue = makeDifference(getFixtureFile('before', extension), getFixtureFile('after', extension), format);
      const expectedValue = getExpectedResult(format);

      expect(actualValue).toBe(expectedValue);
    },
  );
});
