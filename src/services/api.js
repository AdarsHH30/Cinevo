// Access the API Key from the environment variable
const API = import.meta.env.VITE_API_KEY;

console.log("API Key:", API);

const URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const getMovies = async () => {
    const response = await fetch(`${URL}/movie/popular?api_key=${API}`);
    const data = await response.json();
    return data.results;
};

// Search movies based on a query
export const searchMovies = async (query) => {
    if (!query) {
        throw new Error("Query parameter is required."); // Optional: Handle missing query
    }
    const response = await fetch(`${URL}/search/movie?api_key=${API}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
