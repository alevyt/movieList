// Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (movieInput) => {
    // Perform search logic and get results

    const apiKey = '4603613e';
    
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieInput}`)
        .then(response => response.json())
        .then((data) => {
          onSearch(data.Search);
        })
        .catch(error => {
            console.error('Error:', error);
        });
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
