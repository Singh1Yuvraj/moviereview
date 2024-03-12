// AddMoviePopup.js
import './AddMoviePopup.css';
import React from 'react';

function AddMoviePopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add new movie</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Release date:</label>
            <input type="text" placeholder="Release date" />
          </div>
          <div className="button-group">
            <button type="submit">Create movie</button>
            <button onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMoviePopup;
