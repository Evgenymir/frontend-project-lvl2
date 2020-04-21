import { program } from 'commander';
import packageJson from '../package.json';

const startProgramHelp = () => {
  program
    .version(packageJson.version)
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(firstConfig, secondConfig))
    .parse(process.argv);
};

export default startProgramHelp;
