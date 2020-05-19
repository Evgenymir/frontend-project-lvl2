import tree from './tree';
import plain from './plain';
import json from './json';

const formatters = {
  plain,
  tree,
  json,
};

export default (data, format) => formatters[format](data);
