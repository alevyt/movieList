// src/components/MovieCard/MovieCard.js
import React, { useState } from 'react';
import './MovieCard.css'; // Import the CSS file for styling

import MovieDetails from './MovieDetails/MovieDetails';


const MovieCard = ({ movieData }) => {
  const { Poster, Title, Year, imdbID, Type } = movieData;
  const cardTypeClass = Type.toLowerCase();

  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(true);
  };

  return (
    <div className={`movie-card ${cardTypeClass}`} onClick={handleCardClick}>
      <img src={Poster} alt={`${Title} Poster`} className="poster" />
      <div className="info">
        <h3>{Title}</h3>
        <p>{`(${Year})`}</p>
      </div>
      {showDetails && <MovieDetails imdbID={imdbID} />}
    </div>
  );
};

export default MovieCard;
