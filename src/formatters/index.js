import normal from './normal';
import plain from './plain';
import json from './json';

const formatters = {
  plain,
  normal,
  json,
};

export default (data, format) => formatters[format](data);
