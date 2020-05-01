import yaml from 'js-yaml';

const parser = {
  '.json': JSON.parse,
  '.yaml': yaml.safeLoad,
};

export default (name) => parser[name];
