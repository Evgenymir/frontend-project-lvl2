import { program } from 'commander';
import packageJson from '../package.json';
import makeDifference from './index';

export default () => {
  program
    .version(packageJson.version)
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format', 'tree')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => {
      const result = makeDifference(firstConfig, secondConfig, program.format);
      console.log(result);
    })
    .parse(process.argv);
};
