// src/components/SearchResults/SearchResults.js
import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="results-container">
        {results.map((result) => (
          <MovieCard key={result.imdbID} movieData={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
