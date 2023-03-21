import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          type={movie.Type}
          poster={movie.Poster}
          onMovieClick={props.onMovieClick}
        />
      ))}
    </div>
  );
}

export default MovieList;
