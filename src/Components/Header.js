// Header.js
import React from 'react';

function Header({ onAddMovie, onAddReview }) {
  return (
    <header className="header">
      <h1>MOVIECRITIC</h1>
      <nav>
        <ul>
          <li><button className="button-primary-1"onClick={onAddMovie}>Add new movie</button></li>
          <li><button className="button-primary-2" onClick={onAddReview}>Add new review</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
