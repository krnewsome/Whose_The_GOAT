import React from 'react';
import {Link} from 'react-router-dom';
import WeatherSection from './WeatherSection'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-warning fixed-top">
      <Link className="navbar-brand" to="/">
        G.O.A.T
      </Link>
      <WeatherSection />
    </nav>
  );
}

export default NavBar;
