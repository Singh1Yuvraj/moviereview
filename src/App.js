// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import AddMoviePopup from './AddMoviePopup';
import AddReviewPopup from './AddReviewPopup';

// Movie component to display each movie
const Movie = ({ movie, onDelete }) => (
  <div className="movie">
    <h3>{movie.title}</h3>
    <p>Released: {movie.releaseDate}</p>
    <p>Rating: {movie.rating}/10</p>
    <button onClick={() => onDelete(movie.id)}>Delete</button>
  </div>
);

function App() {
  const [showAddMoviePopup, setShowAddMoviePopup] = useState(false);
  const [showAddReviewPopup, setShowAddReviewPopup] = useState(false);
  const [movies, setMovies] = useState([]);

  // Load movies from local storage on initial render
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  // Save movies to local storage when movies state changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: Date.now() }];
    setMovies(updatedMovies);
    setShowAddMoviePopup(false);
  };

  const handleAddReview = () => {
    setShowAddReviewPopup(true);
  };

  const deleteMovie = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <Header onAddMovie={() => setShowAddMoviePopup(true)} onAddReview={handleAddReview} />
      {showAddMoviePopup && <AddMoviePopup onAddMovie={handleAddMovie} onClose={() => setShowAddMoviePopup(false)} />}
      {showAddReviewPopup && <AddReviewPopup onClose={() => setShowAddReviewPopup(false)} movies={movies} />}
      <MovieList movies={movies} onDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
