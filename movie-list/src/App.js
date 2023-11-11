// MainPage.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

const MainPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="main-page">
      <Header />
      <Search onSearch={handleSearch} />
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
};

export default MainPage;
