# frontend-project-lvl2

[![Node.js CI](https://github.com/Evgenymir/frontend-project-lvl2/workflows/Node.js%20CI/badge.svg)](https://github.com/Evgenymir/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/8219f5a032473ffec1d0/maintainability)](https://codeclimate.com/github/Evgenymir/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8219f5a032473ffec1d0/test_coverage)](https://codeclimate.com/github/Evgenymir/frontend-project-lvl2/test_coverage)
[![Build Status](https://travis-ci.org/Evgenymir/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/Evgenymir/frontend-project-lvl2)

### Установка
```
$ sudo npm install -g frontend-project-lvl2-bespalov
```
[![asciicast](https://asciinema.org/a/njwAMZhOGP2HM4FRf5tJhrlY5.svg)](https://asciinema.org/a/njwAMZhOGP2HM4FRf5tJhrlY5)

### Сравнить json файлы
```
$ gendiff file1.json file2.json
```
[![asciicast](https://asciinema.org/a/5XRd6VxFxgH1Fw9P6AkCr5yYM.svg)](https://asciinema.org/a/5XRd6VxFxgH1Fw9P6AkCr5yYM)

### Сравнить yaml файлы
```
$ gendiff file1.yaml file2.yaml
```
[![asciicast](https://asciinema.org/a/m4oSaq25pIVNRy4EbvHz4cqhZ.svg)](https://asciinema.org/a/m4oSaq25pIVNRy4EbvHz4cqhZ)

### Сравнить ini файлы
```
$ gendiff file1.ini file2.ini
```
[![asciicast](https://asciinema.org/a/eFmi865kemsLxEaosaCQnyr8p.svg)](https://asciinema.org/a/eFmi865kemsLxEaosaCQnyr8p)

### Рекурсивное сравнение файлов
```
$ gendiff file1.json file2.json
```
[![asciicast](https://asciinema.org/a/ZXu7BFPzF3g9H5o1gobfMYDun.svg)](https://asciinema.org/a/ZXu7BFPzF3g9H5o1gobfMYDun)

### Вывод через формат plain
```
$ gendiff -f plain file1.json file2.json
или
$ gendiff --format plain file1.json file2.json

```
[![asciicast](https://asciinema.org/a/K2KFze0snPCcDUxNvp5D1EoS9.svg)](https://asciinema.org/a/K2KFze0snPCcDUxNvp5D1EoS9)

### Вывод через формат json
```
$ gendiff -f json file1.json file2.json
или
$ gendiff --format json file1.json file2.json
```
[![asciicast](https://asciinema.org/a/qOHhSaqOvWZh9S9MOMQZSkMgB.svg)](https://asciinema.org/a/qOHhSaqOvWZh9S9MOMQZSkMgB)