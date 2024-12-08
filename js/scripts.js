const API_KEY = '1cf50e6248dc270629e802686245c2c8'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fetch popular movies from TMDB
async function fetchMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    document.getElementById('movies').innerHTML = `<p>Error fetching movies. Please try again later.</p>`;
  }
}

// Display movies on the page
function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies');
  moviesContainer.innerHTML = movies
    .map(
      (movie) => `
      <div class="movie">
        <img src="${IMG_BASE_URL + movie.poster_path}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>⭐ ${movie.vote_average}</p>
      </div>
    `
    )
    .join('');
}

// Load movies on page load
fetchMovies();
