install:
	npm install

start:
	npm run babel-node src/bin/gendiff.js before.yaml after.yaml

publish:
	npm publish --dry-run

lint:
	npm run eslint .

test:
	npm run test

test-coverage:
	npm run test -- --coverage

watch:
	npx jest --watch

.PHONY: test