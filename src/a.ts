#!/usr/bin/env node -r ts-node/register

import * as yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .scriptName('a.ts')
  .usage('$0 [name]')
  .command(
    '$0 [name]',
    'Test application',
    (commandYargs) => 
    commandYargs.positional('name', { description: 'Your name', type: 'string' }).demandOption('name'),
    (argv) => {
      console.log(`Hello ${argv.name}`);
    }
  )
  .demandCommand(1)
  .strictCommands()
  .help()
  .wrap(yargs.terminalWidth())
  .alias('help', 'h')
  .parseSync();
