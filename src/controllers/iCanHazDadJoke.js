export const getJoke = async (resource, options = {}) => {
    try {
        const response = await fetch(resource, options);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }

        const { joke } = await response.json();
        return joke;
    } catch (err) {
        console.error(err.message, err.cause);
    }
};

export const getJokes = async (resource, options = {}) => {
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
