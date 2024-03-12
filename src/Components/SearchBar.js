// SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for your favourite movie"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
