import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
