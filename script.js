import MovieCard from "./movie-card.js";

function displayMovieResults(data) {
    const movieResults = document.getElementById('movieResults');
    movieResults.innerHTML = ''; // Clear previous results

    if (data.Response === "True") {
        console.log('data', data);
        const movies = data.Search;
        movies.forEach(async movie => {
            // Create an instance of the MovieCard element
            const movieCard = new MovieCard();

            // Set the attributes for the MovieCard element
            movieCard.setAttribute('title', movie.Title);
            movieCard.setAttribute('year', movie.Year);
            movieCard.setAttribute('director', movie.Director);
            movieCard.setAttribute('runtime', movie.Runtime);
            movieCard.setAttribute('actors', movie.Actors);
            movieCard.setAttribute('poster', movie.Poster);

            // Append the MovieCard to the results container
            movieResults.appendChild(movieCard);
        });
    } else {
        movieResults.textContent = "No results found.";
    }
}

function searchMovie() {
    const apiKey = '4603613e'; // Replace with your API key
    const movieInput = document.getElementById('movieInput').value;

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieInput}`)
        .then(response => response.json())
        .then(displayMovieResults)
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('searchButton').addEventListener('click', searchMovie);
