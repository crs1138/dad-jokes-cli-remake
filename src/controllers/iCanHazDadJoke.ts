export type Joke = {
    id: string;
    joke: string;
    status: 200;
};

export const getJoke = async (resource: URL | string, options = {}): Promise<Joke | undefined> => {
    try {
        const response = await fetch(resource, options);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
    }
};

export const getJokes = async (resource, options = {}): Promise<Joke[] | undefined> => {
    try {
        const response = await fetch(resource, options);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        const { results } = await response.json();
        return results;
    } catch (err) {
        console.error(err.message, err.cause);
    }
};
