import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = ({ formData, handleChange, displayImages, setImages }) => {
  const [capitalizedTerm, setCapitalizedTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = formData;
    const capitalized = temp.charAt(0).toUpperCase() + temp.slice(1);
    setCapitalizedTerm(capitalized);
    setImages([]);
    displayImages();
  };

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <p id="logo-text">Image Plaza</p>
        </div>
        <form onSubmit={handleSubmit} className='search'>
          <div className="search">
            <input
              type="text"
              id="search-input"
              placeholder="Enter query"
              onChange={handleChange}
              value={formData}
            />
          </div>
          <div className="submit">
            <button id="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="result">
        <p id="result-text">
          Showing {formData === "" ? "Random" : capitalizedTerm} results...
        </p>
      </div>
    </>
  );
};

export default Navbar;
