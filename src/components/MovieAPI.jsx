import React, { useState, useEffect } from "react";
import Form from "./Form";
import MovieList from "./MovieList";

const apiKey = "baad570d";

function MovieAPI() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=${type}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search || []);
          } else {
            setError(data.Error);
            setMovies([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setMovies([]);
    }
  }, [query, type]);

  return (
    <div>
      <Form onSearch={setQuery} onTypeChange={setType} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default MovieAPI;
