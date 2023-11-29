const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const moviesList = document.getElementById('moviesList');

// const apiKey = 'da5b5545'; 

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  
  
  if (!searchTerm) {
    return;
  }

  fetch(`https://www.omdbapi.com/?apikey=da5b5545&s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'False') {
        alert('No movies found.');
        return;
      }

      const movies = data.Search;

      moviesList.innerHTML = '';
      searchInput.value = '';

      movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesList.appendChild(movieCard);
      });
    });
});

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.Poster;

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.Title;

  const movieLink = document.createElement('a');
  movieLink.href = `details.html?imdbID=${movie.imdbID}`;
  movieLink.appendChild(movieTitle);

  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieLink);

  return movieCard;
}








// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const filterButton = document.getElementById('filterButton');
// const moviesList = document.getElementById('moviesList');
// const movieDetails = document.getElementById('movieDetails');

// const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your OMDb API key

// let showDetails = false; // Flag to control whether to show full details or just links

// searchButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.trim();
//   if (!searchTerm) {
//     return;
//   }

//   fetch(`https://www.omdbapi.com/?apikey=<span class="math-inline">\{apiKey\}&s\=</span>{searchTerm}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.Response === 'False') {
//         alert('No movies found.');
//         return;
//       }

//       const movies = data.Search;
//       moviesList.innerHTML = '';
//       movies.forEach(movie => {
//         const movieCard = createMovieCard(movie);
//         moviesList.appendChild(movieCard);
//       });
