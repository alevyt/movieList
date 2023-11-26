// MovieDetails.js
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../../api';
import './MovieDetails.css'; // Import the CSS file for styling

const MovieDetails = ({ imdbID, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(imdbID);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [imdbID]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-modal" onClick={onClose}>
      <div className="movie-details-content" onClick={(e) => e.stopPropagation()}>
        <h2>{details.Title}</h2>
        <div className="details-content">
          <img src={details.Poster} alt={`${details.Title} Poster`} className="poster" />
          <div className="info">
            <p><strong>Year:</strong> {details.Year}</p>
            <p><strong>Director:</strong> {details.Director}</p>
            <p><strong>Actors:</strong> {details.Actors}</p>
            <p><strong>Country:</strong> {details.Country}</p>
            <p><strong>Genre:</strong> {details.Genre}</p>
            <p><strong>Plot:</strong> {details.Plot}</p>
            <p><strong>Ratings:</strong></p>
            <ul>
              {details.Ratings.map((rating, index) => (
                <li key={index}>{`${rating.Source}: ${rating.Value}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
