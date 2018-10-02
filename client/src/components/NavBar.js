/*--------- IMPORTS ----------*/
import React from 'react';
import {Link} from 'react-router-dom';
import WeatherSection from './WeatherSection';
const apiKey = require("../config");


/*--------- NAVBAR CLASS COMPONENT ----------*/
class NavBar extends React.Component  {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     cityName: '',
     weatherZip: '',
     weatherTemp:'',
     weatherHumidity: '',
     weatherDescription:'',
   };// END OF STATE
 }// END OF CONSTRUCTOR

  // onSearchChange function
  onSearchChange = e => {
    this.setState({ weatherZip: e.target.value });
  };// END OF ONSEARCHCHANGE

  // on handleSubmit function
  handleSubmit = e => {
    e.preventDefault();
    this.getWeather(this.searchTag.value)
    e.currentTarget.reset();
  };// END OF HANDLE SUBMIT

  // GET weather function
  getWeather = (zip) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey.key}`)
    .then(res => res.json())
    .then(weather => {
      console.log(weather.name)
      this.setState({
        weatherTemp:weather.main.temp,
        weatherHumidity:weather.main.humidity,
        weatherDescription:weather.weather[0].description,
        cityName: weather.name,
      })// END OF SET STATE
    })// END OF THEN
  }// END OF GET WEATHER FUNCTION

  // RENDER
  render(){

    return [
      <nav id= 'navBar' className="navbar navbar-dark fixed-top ">
        <Link className="navbar-brand" to="/">
          G.O.A.T
        </Link>
        <WeatherSection
          cityName= {this.state.cityName}
          weatherTemp= {this.state.weatherTemp}
          weatherHumidity= {this.state.weatherHumidity}
          weatherDescription= {this.state.weatherDescription}
        />
      </nav>,
      <div className="container-fluid">
        <div className="card-header">
          <div className="input-group input-group-sm mb-3">
        </div>
        <form
          className = 'searchForm'
          onSubmit={this.handleSubmit}
          key= "2"
        >
          <div className="input-group-prepend">
          <button className="input-group-text" type="submit" id="inputGroup-sizing-sm">Enter Zip Code </button>
          <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.searchTag = input}
              placeholder="Search for the weather forcast"
            >
            </input>
          </div>
          </form>
        </div>
      </div>
    ];// END OF RETURN
  }// END OF RENDER
}// END OF NAVBAR CLASS COMPONENT

/*--------- EXPORTS ----------*/
export default NavBar;
