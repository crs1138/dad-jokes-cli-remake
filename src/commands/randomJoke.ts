// @ts-check
import { stdout } from 'node:process';
import { getRandomJoke } from '../services/dadJokesService.js';

const command = ['random', '$0'];
const describe = `Prints a random joke`;

const handler = async () => {
    const jokeResponse = await getRandomJoke();
    if (jokeResponse) {
        const { joke } = jokeResponse;
        stdout.write(joke + '\n');
    }
};
export const randomJokeCommand = { command, describe, handler };
