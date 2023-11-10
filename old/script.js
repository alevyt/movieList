import MovieCard from "./movie-card.js";

let currentPage = 1;

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
            movieCard.setAttribute('imdbID', movie.imdbID);

            // Append the MovieCard to the results container
            movieResults.appendChild(movieCard);


            const pages = data.totalResults / 10;

            if (pages > 1) {
                createPagination(pages, currentPage);
            }

        });
    } else {
        movieResults.textContent = "No results found.";
    }
}

function searchMovie(page) {
    const apiKey = '4603613e';
    const movieInput = document.getElementById('movieInput').value;
    const year = document.getElementById('year-filter').value;

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieInput}${year.trim() !== '' ? '&y=' + year : ''}${page?'&page='+page:''}`)
        .then(response => response.json())
        .then(displayMovieResults)
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('searchButton').addEventListener('click', () => {searchMovie()});

// Function to generate pagination buttons with ellipsis for long page lists TODO: must be reworked
function createPagination(totalPages) {
    console.log(`pagination: ${currentPage}/${totalPages}`);
    const paginationElement = document.getElementById("pageList");

    paginationElement.innerHTML = "";

    const maxVisibleButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    const hasLeftEllipsis = startPage > 2;
    const hasRightEllipsis = endPage < totalPages - 1;

    // Previous button
    if (currentPage > 1) {
        const prevButton = document.createElement("li");
        const prevLink = document.createElement("a");
        // prevLink.href = "#";
        prevLink.textContent = "Previous";
        prevLink.addEventListener("click", () => changePage(currentPage -= 1, totalPages));
        prevButton.appendChild(prevLink);
        paginationElement.appendChild(prevButton);
    }

    if (hasLeftEllipsis) {
        const leftEllipsis = document.createElement("li");
        const leftEllipsisLink = document.createElement("a");
        leftEllipsisLink.textContent = "...";
        leftEllipsis.appendChild(leftEllipsisLink);
        paginationElement.appendChild(leftEllipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        // link.href = "#";
        link.textContent = i;

        if (i === currentPage) {
            link.classList.add("active", "selected");
        }

        link.addEventListener("click", () => { currentPage = i; changePage(i, totalPages)});

        li.appendChild(link);
        paginationElement.appendChild(li);
    }

    if (hasRightEllipsis) {
        const rightEllipsis = document.createElement("li");
        const rightEllipsisLink = document.createElement("a");
        rightEllipsisLink.textContent = "...";
        rightEllipsis.appendChild(rightEllipsisLink);
        paginationElement.appendChild(rightEllipsis);
    }

    // Next button
    if (currentPage < totalPages) {
        const nextButton = document.createElement("li");
        const nextLink = document.createElement("a");
        // nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", () => changePage(currentPage += 1, totalPages));
        nextButton.appendChild(nextLink);
        paginationElement.appendChild(nextButton);
    }
}

// Function to change the current page
function changePage(pageNumber, totalPages) {
    // Example action to change the page
    // Replace this with your logic to handle the page change
    console.log("Changing to page:", pageNumber);
    // For example, you might load new data or update the UI here
    searchMovie(currentPage)
    // createPagination(totalPages, pageNumber); // Re-render the pagination with the new page
}
