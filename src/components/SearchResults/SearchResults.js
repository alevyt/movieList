// src/components/SearchResults/SearchResults.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './SearchResults.css'; // Assuming you have a CSS file for styling
import { fetchData } from '../api';

const SearchResults = ({ searchResults, searchInput }) => {
  const itemsPerPage = 10; // Number of movie cards per page
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchResults) {
      
      const calculatedTotalPages = Math.ceil(searchResults.totalResults / itemsPerPage);
      setTotalPages(calculatedTotalPages);
      setCurrentPage(0); // Reset the current page when search results change
    }
  }, [searchResults, itemsPerPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);

    // Fetch data for the selected page
    fetchPage(selectedPage + 1); // Adding 1 because API pages are often 1-indexed
  };

  const fetchPage = (pageNumber) => {
    fetchData(searchInput, pageNumber).then(data => {

    })
    // Make a new request for the specified page

  };

  if (!searchResults || !searchResults.Search) {
    return null; // or a loading indicator, or an empty state
  }

  const offset = currentPage * itemsPerPage;
  const paginatedResults = searchResults.Search.slice(offset, offset + itemsPerPage);

  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <div className="cards-container">
        {paginatedResults.map((result) => (
          <MovieCard key={result.imdbID} movieData={result} />
        ))}
      </div>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default SearchResults;
