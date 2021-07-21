//Base URL
const base_url = "https://api.themoviedb.org/3/movie/";

// Movies
const movies = `{movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

// Popular movies
const popular_movies = `popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

export const popularMoviesURL = () => `${base_url}${popular_movies}`;
