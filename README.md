# code-challenge-3
Flatdango
Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater. The application displays a list of available movies and detailed information about each movie, including the poster, runtime, showtime, and available tickets. Users can select a movie from the list to view its details and purchase tickets if they are available.

Features
Display a list of all available movies.
Show details of the first movie when the page loads.
Allow users to view details of any movie by clicking on it from the list.
Enable users to purchase tickets for a movie.
Update ticket availability in real-time.
Indicate when a movie is sold out.
Project Setup
Prerequisites
Node.js installed on your machine.
JSON Server installed globally or locally in your project.
Installation
Clone the repository to your local machine.

bash
Navigate to the project directory.

bash
cd flatdango
Install the necessary dependencies.


Copy code
npm install
Start the JSON server with the provided db.json file.
 json-server --watch db.json
Open index.html in your web browser to view the application.

Usage
Viewing Movies
When the page loads, the details of the first movie in the database are displayed.
The left sidebar contains a list of all available movies. Clicking on a movie title will display the details of that movie.
Purchasing Tickets
If tickets are available for a selected movie, the "Buy Ticket" button will be enabled.
Clicking the "Buy Ticket" button will decrease the number of available tickets and update the display in real-time.
If a movie is sold out, the "Buy Ticket" button will be disabled and display "Sold Out".
Code Overview
HTML Structure
The index.html file contains the basic structure of the application, including elements for displaying movie details and a list of movies.

CSS Styling
The styles.css file contains the styling for the application, including layout, fonts, and responsiveness.

JavaScript Functionality
The script.js file contains the JavaScript code that powers the application. Key functions include:

getElements(): Retrieves and returns all necessary DOM elements.
loadFirstMovie(): Fetches and displays details of the first movie.
showMovieDetails(movie): Displays details of a given movie.
loadMovies(): Fetches and displays the list of all movies.
showMovieList(movies): Displays the list of movies in the sidebar.
loadMovieDetails(movieId): Fetches and displays details of a selected movie.
updateTicketsOnServer(movie): Updates the ticket count on the server and redisplays the movie details.
JSON Server
The db.json file contains the movie data used by the JSON server. This file is used to simulate a backend database for the application.

Example Movie Data
Here is an example of the movie data structure in db.json:

json
[
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    "id": "2",
    "title": "Manos: The Hands Of Fate",
    "runtime": "118",
    "capacity": 50,
    "showtime": "06:45PM",
    "tickets_sold": 44,
    "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  }
]
Contributions
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes or improvements.

AUTHOR : COLLINS WACHIRA


