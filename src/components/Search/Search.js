// Search.js
import React, { useState } from 'react';
import { fetchData } from '../api';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (movieInput) => {
    // Perform search logic and get results

    fetchData(searchQuery).then(data => {
      onSearch(data, searchQuery);
    })
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  };

  return (
    <div className="search">
      <input
        id="searchField"
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
