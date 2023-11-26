// MainPage.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

const MainPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (results, input) => {
    setSearchResults(results);
    setSearchInput(input);
  };

  return (
    <div className="main-page">
      <Header />
      <Search onSearch={handleSearch} />
      {searchResults.Search && searchResults.Search.length > 0 && <SearchResults searchResults={searchResults} searchInput={searchInput} />}
    </div>
  );
};

export default MainPage;
