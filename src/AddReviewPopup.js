// AddReviewPopup.js
import React, { useState } from 'react';

function AddReviewPopup({ onClose, movies }) {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movies.includes(selectedMovie)) {
      alert('This movie has not been added yet.');
      return;
    }
    // Proceed with submitting the review
    // ...
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add new review</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Select a movie</label>
            <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
              <option value="">Select a movie</option>
              {movies.map((movie) => (
                <option key={movie} value={movie}>{movie}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Your name</label>
            <input type="text" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} />
          </div>
          <div>
            <label>Rating out of 10</label>
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
          </div>
          <div>
            <label>Review comments</label>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
          </div>
          <div className="button-group">
            <button type="submit">Add review</button>
            <button onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReviewPopup;
