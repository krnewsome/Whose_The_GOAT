/*---------- IMPORTS ----------*/
import React from 'react';

/*---------- NBAPLAYERCARD CLASS COMPONENT----------*/
class WeatherSection extends React.Component {

  // RENDER
  render(props){
    let weatherInfo;
    if(this.props.cityName){
    weatherInfo =
      <div className="card-header">
        <div className="container">
          <div className="row">
            <div className="col text-left"><strong><u>City Name:</u></strong> {this.props.cityName}</div>
            <div className="col text-left"><strong><u>Temperature:</u></strong> {this.props.weatherTemp}</div>
            <div className="w-100"></div>
            <div className="col text-left"><strong><u>Humidity:</u></strong> {this.props.weatherHumidity}</div>
            <div className="col text-left"><strong><u>Description:</u></strong> {this.props.weatherDescription}</div>
          </div>
        </div>
      </div>
    }

    return (
      <div className="container-fluid">
        <div  key= '1' className="card text-white bg-dark mb-3 " style={{height: 'auto', width: 'auto'}}>
        {weatherInfo}
        </div>
      </div>
    );// END OF RETURN
  }// END OF RENDER
}// END OF WEATHERSECTION CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default WeatherSection;
