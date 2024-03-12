import React from 'react';

function MovieList({ movies }) {
  // Display only the first 6 movies
  const displayedMovies = movies.slice(0, 6);

  return (
    <div className="movie-list">
      {displayedMovies.map((movie) => (
        <div key={movie.id} className="movie">
          <h3>{movie.title || 'Untitled Movie'}</h3>
          <p>Released: {movie.releaseDate || 'Unknown Release Date'}</p>
          <p>Rating: {movie.rating ? `${movie.rating}/10` : 'No Rating'}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
