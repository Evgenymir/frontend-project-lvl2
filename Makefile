install:
	npm install

start:
	npm run babel-node src/bin/gendiff.js before.ini after.ini

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test

test-coverage:
	npm run test -- --coverage

watch:
	npx jest --watch

.PHONY: test