function searchMovie() {
    const apiKey = '4603613e'; // Get your API key from OMDB or another movie API
    const movieInput = document.getElementById('movieInput').value;

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieInput}`)
        .then(response => response.json())
        .then(data => {
            console.log('results:', data);
            const movieResults = document.getElementById('movieResults');
            movieResults.innerHTML = ''; // Clear previous results

            if (data.Response === "True") {
                const movies = data.Search;
                movies.forEach(movie => {
                    const title = movie.Title;
                    const year = movie.Year;
                    const poster = movie.Poster;

                    const movieCard = document.createElement('div');
                    movieCard.classList.add('movie-card');
                    movieCard.innerHTML = `
                        <h2>${title} (${year})</h2>
                        <img src="${poster}" alt="${title} Poster">
                    `;
                    movieResults.appendChild(movieCard);
                });
            } else {
                movieResults.textContent = "No results found.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('searchButton').addEventListener('click', searchMovie);
