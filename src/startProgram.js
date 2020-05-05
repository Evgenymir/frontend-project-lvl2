import { program } from 'commander';
import packageJson from '../package.json';
import makeDifference from './index';

export default () => {
  program
    .version(packageJson.version)
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format', 'normal')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(makeDifference(firstConfig,
      secondConfig, program.format)))
    .parse(process.argv);
};
