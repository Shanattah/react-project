import React, { useState } from "react";

function Form(props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  function handleQueryChange(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
    props.onSearch(newQuery, type);
  }

  function handleTypeChange(event) {
    const newType = event.target.value;
    setType(newType);
    props.onSearch(query, newType);
  }

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={handleQueryChange} />
        <select value={type} onChange={handleTypeChange}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
