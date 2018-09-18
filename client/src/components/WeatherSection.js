import React from 'react';

class WeatherSection extends React.Component {

render(props){
  let weatherInfo;
  if(this.props.cityName){
  weatherInfo =
    <div className="card-header">
      <div class="container">
        <div class="row">
          <div class="col text-left"><strong><u>City Name:</u></strong> {this.props.cityName}</div>
          <div class="col text-left"><strong><u>Temperature:</u></strong> {this.props.weatherTemp}</div>
          <div class="w-100"></div>
          <div class="col text-left"><strong><u>Humidity:</u></strong> {this.props.weatherHumidity}</div>
          <div class="col text-left"><strong><u>Description:</u></strong> {this.props.weatherDescription}</div>
        </div>
      </div>
    </div>
  }

  return (
    <div class="container-fluid">
      <div  key= '1' className="card text-white bg-dark mb-3 " style={{height: 'auto', width: 'auto'}}>
      {weatherInfo}
      </div>
    </div>
  );
}
}

export default WeatherSection;
