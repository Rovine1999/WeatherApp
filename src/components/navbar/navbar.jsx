import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link>Weather</Link>
        
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/current-weather">Current Weather</Link>
            
         
          </li>
          <li className="nav-item">
            <Link to="/forecast">Forecast</Link>
              
          </li>
          <li className="nav-item">
            <Link>Cities</Link>
          
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
