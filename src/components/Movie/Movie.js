import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <figure className="card">
      <img 
        src={poster}
        alt={`The movie titled: ${movie.Title}`}
      />
      <figcaption>{movie.Title}</figcaption>
    </figure> 
  );
};

export default Movie;