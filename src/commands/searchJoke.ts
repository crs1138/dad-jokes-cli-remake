import { stdout } from 'node:process';
import { getSearchForJoke } from '../services/dadJokesService.js';

const command = ['search'];
const describe = `Search for joke containing <term>`;
const builder = (yargs) =>
    yargs.option('t', {
        alias: 'term',
        describe: `Use '--term <word>' Search for a joke containing the word.`,
    });
const handler = async ({ term }: { term: string }) => {
    const jokes = await getSearchForJoke(term);
    if (jokes && jokes.length > 0) {
        const [jokeObj] = jokes;
        const { joke } = jokeObj;
        stdout.write(`${joke}\n`);
    } else {
        stdout.write(`Sorry, no jokes containing ${term} found.\n`);
    }
};

export const searchJokeCommand = {
    command,
    describe,
    builder,
    handler,
};
