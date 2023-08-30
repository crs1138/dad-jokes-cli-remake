import { stdout } from 'node:process';

const handler = async () => {
    stdout.write('hello world' + '\n');
};

const command = ['hello'];
const describe = 'Displays a hello message';

export const helloCommand = { command, describe, handler };
