// api.js

export const fetchData = (movieInput = '', page = 1) => {
    const apiUrl = `https://www.omdbapi.com/?apikey=4603613e&s=${movieInput}&page=${page}`;
  
    return fetch(apiUrl)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error so that it can be handled by the caller
      });
  };

export const fetchMovieDetails = async (imdbID) => {
    // Make API request with imdbID
    const response = await fetch(`https://www.omdbapi.com/?apikey=4603613e&i=${imdbID}`);
    const data = await response.json();
    
    // Update state with fetched details
    return data;
  };
  