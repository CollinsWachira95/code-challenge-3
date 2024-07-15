document.addEventListener("DOMContentLoaded", () => {
    // Function to get all elements
    function getElements() {
      return {
        titleElement: document.getElementById("movie-title"),
        posterElement: document.getElementById("movie-poster"),
        runtimeElement: document.getElementById("movie-runtime"),
        showtimeElement: document.getElementById("movie-showtime"),
        ticketsElement: document.getElementById("movie-tickets"),
        purchaseButton: document.getElementById("buy-ticket"),
        movieList: document.getElementById("films")
      };
    }
  
    const elements = getElements();
  
    // Fetch and display details of the first movie
    function loadFirstMovie() {
      fetch('http://localhost:3000/films/1')
        .then(response => response.json())
        .then(movie => showMovieDetails(movie))
        .catch(error => console.error('Error loading initial movie:', error));
    }
  
    // Show movie details
    function showMovieDetails(movie) {
      elements.titleElement.textContent = movie.title;
      elements.posterElement.src = movie.poster;
      elements.runtimeElement.textContent = `Runtime: ${movie.runtime} minutes`;
      elements.showtimeElement.textContent = `Showtime: ${movie.showtime}`;
      elements.ticketsElement.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
      elements.purchaseButton.dataset.movieId = movie.id;
  
      // Enable or disable the "Buy Ticket" button based on availability
      if (movie.capacity - movie.tickets_sold > 0) {
        elements.purchaseButton.disabled = false;
        elements.purchaseButton.textContent = "Buy Ticket";
      } else {
        elements.purchaseButton.disabled = true;
        elements.purchaseButton.textContent = "Sold Out";
      }
    }
  
    // Fetch and display all movies in the list
    function loadMovies() {
      fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(movies => showMovieList(movies))
        .catch(error => console.error('Error loading movies:', error));
    }
  
    // Show the list of movies
    function showMovieList(movies) {
      elements.movieList.innerHTML = ''; // Clear existing list
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.classList.add('film-item');
        if (movie.capacity - movie.tickets_sold === 0) {
          li.classList.add('sold-out');
        }
        li.addEventListener('click', () => loadMovieDetails(movie.id));
        elements.movieList.appendChild(li);
      });
    }
  
    // Fetch and display details of a selected movie
    function loadMovieDetails(movieId) {
      fetch(`http://localhost:3000/films/${movieId}`)
        .then(response => response.json())
        .then(movie => showMovieDetails(movie))
        .catch(error => console.error('Error fetching movie details:', error));
    }
  
    // Handle the "Buy Ticket" button click
    elements.purchaseButton.addEventListener('click', () => {
      const movieId = elements.purchaseButton.dataset.movieId;
      fetch(`http://localhost:3000/films/${movieId}`)
        .then(response => response.json())
        .then(movie => {
          if (movie.capacity - movie.tickets_sold > 0) {
            movie.tickets_sold += 1;
            updateTicketsOnServer(movie);
          }
        })
        .catch(error => console.error('Error purchasing ticket:', error));
    });
  
    // Update movie tickets on the server and re-display details
    function updateTicketsOnServer(movie) {
      fetch(`http://localhost:3000/films/${movie.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tickets_sold: movie.tickets_sold })
      })
        .then(response => response.json())
        .then(updatedMovie => showMovieDetails(updatedMovie))
        .catch(error => console.error('Error updating tickets on server:', error));
    }
  
    // Initial fetch calls
    loadFirstMovie();
    loadMovies();
  });
  