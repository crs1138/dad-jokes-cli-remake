import { getJoke, getJokes } from '../controllers/iCanHazDadJoke.js';

const defaultOptions = {
    headers: {
        method: 'GET',
        'User-Agent': 'Dad Jokes CLI - remake (https://github.com/crs1138/dad-jokes-cli-remake)',
        Accept: 'application/json',
    },
};

export const getRandomJoke = async () => {
    const dadJokesUrl = new URL('https://icanhazdadjoke.com/');
    return await getJoke(dadJokesUrl, defaultOptions);
};

export const getSearchForJoke = async (term) => {
    const searchDadJokesUrl = new URL('https://icanhazdadjoke.com/search');
    searchDadJokesUrl.searchParams.set('term', term);
    searchDadJokesUrl.searchParams.set('page', 1);
    searchDadJokesUrl.searchParams.set('limit', 1);
    const url = searchDadJokesUrl.toString();
    return await getJokes(url, defaultOptions);
};
