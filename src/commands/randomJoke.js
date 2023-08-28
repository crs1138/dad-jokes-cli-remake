import { stdout } from 'node:process';
import { getRandomJoke } from '../services/dadJokesService.js';

const command = ['random'];
const describe = `Prints a random joke`;

const handler = async () => {
    const joke = await getRandomJoke();
    stdout.write(joke + '\n');
};
export const randomJokeCommand = { command, describe, handler };
