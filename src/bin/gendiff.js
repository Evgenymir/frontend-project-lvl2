#!/usr/bin/env node

import { program } from 'commander';
import packageJson from '../../package.json';

const startProgramHelp = () => {
  program
    .version(packageJson.version)
    .description('Compares two configuration files and shows a difference.')
    .parse(process.argv);

  console.log('you ordered a pizza with:');
};

startProgramHelp();
