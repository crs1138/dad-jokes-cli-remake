import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { helloCommand } from './commands/hello.js';
import { randomJokeCommand } from './commands/randomJoke.js';
import { searchJokeCommand } from './commands/searchJoke.js';

export async function run(args) {
    return await yargs(hideBin(args))
        .command(helloCommand)
        .command(randomJokeCommand)
        .command(searchJokeCommand)
        .version()
        .help()
        .alias({ version: 'v', help: 'h' }).argv;
}
