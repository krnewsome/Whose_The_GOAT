import React from 'react';
import {Link} from 'react-router-dom';
import WeatherSection from './WeatherSection';

/* NavBar Component */
class NavBar extends React.Component  {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     weather: '',
   };
  }

  componentDidMount(){
  }

  render(){
    return (
      <nav className="navbar navbar-dark bg-warning fixed-top">
        <Link className="navbar-brand" to="/">
          G.O.A.T
        </Link>
        <WeatherSection weather= {this.state.weather}  />
      </nav>
    );
  }
}

export default NavBar;
