// src/components/MovieCard/MovieCard.js
import React from 'react';
import './MovieCard.css'; // Import the CSS file for styling

const MovieCard = ({ movieData }) => {
  const { Poster, Title, Year, imdbID, Type } = movieData;
  const cardTypeClass = Type.toLowerCase();

  return (
    <div className={`movie-card ${cardTypeClass}`}>
      <img src={Poster} alt={`${Title} Poster`} className="poster" />
      <div className="info">
        <h3>{Title}</h3>
        <p>{`(${Year})`}</p>
      </div>
    </div>
  );
};

export default MovieCard;
