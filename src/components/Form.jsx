import React, { useState } from "react";

function Form({ onSearch, onTypeChange }) {
  const [searchValue, setSearchValue] = useState("Liza");
  const [typeValue, setTypeValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleTypeChange = (e) => {
    setTypeValue(e.target.value);
    onTypeChange(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select value={typeValue} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
