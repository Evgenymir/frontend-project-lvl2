import normal from './normal';
import plain from './plain';

const formatters = {
  plain,
  normal,
};

export default (data, format) => formatters[format](data);
