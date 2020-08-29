import React, { useContext } from "react";
import {WeatherContext} from '../contexts/WeatherContext';
import { WiCelsius } from "react-icons/wi";


const WeatherDetails = () => {
  const {weather,render} = useContext(WeatherContext);
  return render ? (
    <div className="weather-container">
      <div className="weather-main">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather main" width="150px" height="150px"/>
        <div className="temp-and-description">
          <p className="temp">{(weather.main.temp-273.15).toString().slice(0,5)}°</p>
          <p className="description">{weather.weather[0].description}</p>
        </div>
        
      </div>
      <div className="weather-details">
        
        <p>{weather.name}</p>        
      </div>
    </div>
  ) : null;
} 

export default WeatherDetails;