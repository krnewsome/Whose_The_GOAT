import React from 'react';
import {Link} from 'react-router-dom';
import WeatherSection from './WeatherSection';
const apiKey = require("../config")


/* NavBar Component */
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

   };
  }

  componentDidMount(){
  }

  onSearchChange = e => {
    this.setState({ weatherZip: e.target.value });
  };//end of onSearchChange

  handleSubmit = e => {
    e.preventDefault();
    this.getWeather(this.searchTag.value)
    e.currentTarget.reset();
  };//end of handleSubmit
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
      })
    })

  }

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
      <div class="container-fluid">
        <div className="card-header">
          <div class="input-group input-group-sm mb-3">
        </div>
        <form
          className = 'searchForm'
          onSubmit={this.handleSubmit}
          key= "2"
        >
          <div class="input-group-prepend">
          <button class="input-group-text" type="submit" id="inputGroup-sizing-sm">Enter Zip Code </button>
          <input
              type="text"
              class="form-control"
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
    ];
  }
}

export default NavBar;
