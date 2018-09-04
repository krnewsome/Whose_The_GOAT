import React from 'react';

function WeatherSection(props) {
  return [
    <div  key= '1' className="card text-white bg-dark mb-3" style={{height: 4 + "rem", width: 25 + "rem"}}>
      <div className="card-header">Forcast: {props.weather}</div>
      <div className="card-body" >
      </div>
    </div>
  ];
}

export default WeatherSection;
