const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const moviesList = document.getElementById('moviesList');

// const apiKey = 'da5b5545'; 

input.addEventListener("keypress", function(event) {
    
//     if (event.key === "Enter") {
      
//     }
//   });

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

