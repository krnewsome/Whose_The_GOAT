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
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.searchTag.value);
    let zipCodeText = e.target.children[0].children[0]
    if(isValidZip){
      this.getWeather(this.searchTag.value)
      zipCodeText.style.color = 'grey';
      e.currentTarget.reset();
    } else {
    zipCodeText.style.color = 'red';
    }
  };// END OF HANDLE SUBMIT

  // GET weather function
  getWeather = (zip) =>{
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey.key}`)
      .then(res => res.json())
      .then(weather => {
        let fahrenheitTemp = Math.ceil(((weather.main.temp - 273.15)*1.8) + 32);

        this.setState({
          weatherTemp: fahrenheitTemp + "\xB0 F",
          weatherHumidity:weather.main.humidity +"%",
          weatherDescription:weather.weather[0].description,
          cityName: weather.name,
        })// END OF SET STATE
      })// END OF THEN
      .catch(err => {
        this.setState({
          weatherTemp: 'Not Found',
          weatherHumidity: 'Not Found',
          weatherDescription: 'Not Found',
          cityName: 'Not Found',
        })
      })
  }// END OF GET WEATHER FUNCTION

  // RENDER
  render(){

    return [
      <nav key = '1' id= 'navBar' className="navbar navbar-dark fixed-top ">
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
      <div key = '2' className="container-fluid">
        <div className="card-header">
          <div className="input-group input-group-sm mb-3">
        </div>
        <form
          className = 'searchForm'
          onSubmit={this.handleSubmit}
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
