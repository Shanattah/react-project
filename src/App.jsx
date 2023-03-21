import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieAPI from "./components/MovieAPI";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Header />
      <MovieAPI
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        movies={movies}
      />
      <Footer />
    </div>
  );
}

export default App;
