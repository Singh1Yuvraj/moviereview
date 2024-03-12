// AddMoviePopup.js
import './AddMoviePopup.css';
import axios from 'axios';
import React, { useState } from 'react';

function AddMoviePopup({ onClose ,onAddMovie}) {
  const [movies, setMovies] = useState({name:"", releaseDate:""});
  
  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    
    setMovies({ ...movies, [name]: value });
  }
  const handleAddMovie = async (e) => {
    e.preventDefault();
    // const updatedMovies = [...movies, { ...newMovie, id: Date.now() }];
    try {
     let res =await axios.post("http://localhost:5000/add-movie", movies);
     setMovies({name:"", releaseDate:""})
    } catch (error) {
      console.log(error);
    }
    // setMovies(updatedMovies);
    
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add new movie</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Name "name='name' required onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Release date:</label>
            <input type="text" placeholder="Release date" name ='releaseDate'onChange={handleInputChange} />
          </div>
          <div className="button-group">
            <button type="submit" onClick={handleAddMovie}>Create movie</button>
            <button onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMoviePopup;
