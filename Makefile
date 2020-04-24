install:
	npm install

start:
	npm run babel-node src/bin/gendiff.js before.json after.json

publish:
	npm publish --dry-run

lint:
	npm run eslint .
