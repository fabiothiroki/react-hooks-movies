
const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchMovies = (search = 'man') => (
  fetch(`${MOVIE_API_URL}&s=${search}`)
  .then(response => response.json())
);