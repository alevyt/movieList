// movie-card.js

class MovieCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;
        shadow.innerHTML = `
            <style>
                /* Style for the movie card container */
                .movie-card {
                    display: inline-block;
                    width: 200px;
                    border: 1px solid #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    background-color: #fff;
                    transition: transform 0.2s; /* Smooth hover effect */
                    text-align: center; /* Center the content horizontally */
                }
                
                /* Poster image at the top, full width */
                img {
                    width: 100%;
                    display: block; /* Removes extra space under the image */
                }
                
                /* Style for the movie information (title, director, etc.) */
                .movie-info {
                    padding: 10px;
                }
                
                /* Hover effect */
                .movie-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                }
                
                h2 {
                    font-size: 1.5rem;
                }
                
                p {
                    margin: 8px 0;
                }
            </style>
            <div class="movie-card">
                <img src="${this.getAttribute('poster')}" alt="${this.getAttribute('title')} Poster">
                <div class="movie-info">
                    <h2>${this.getAttribute('title')}</h2>
                    <p><strong>Director:</strong> ${this.getAttribute('director')}</p>
                    <p><strong>Length:</strong> ${this.getAttribute('runtime')}</p>
                    <p><strong>Actors:</strong> ${this.getAttribute('actors')}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-card', MovieCard);

export default MovieCard;
