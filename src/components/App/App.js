import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from "./reducer";
import { fetchMovies } from '../../api/api'; 
import Movie from "../Movie/Movie";
import './App.css';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovies()
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const { movies, errorMessage, loading } = state;

  return (
    <div className="wrapper">
      <h2><strong>Movies</strong></h2>
      <div className="cards">
      {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}

      </div>
    </div>
  );
}

export default App;
