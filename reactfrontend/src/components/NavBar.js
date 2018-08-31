import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-warning fixed-top">
      <Link className="navbar-brand" to="/">
        G.O.A.T
      </Link>
    </nav>
  );
}

export default NavBar;
