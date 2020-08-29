import React, { useContext } from "react";
import {WeatherContext} from '../contexts/WeatherContext';
import { WiCelsius } from "react-icons/wi";


const WeatherDetails = () => {
  const {weather,render} = useContext(WeatherContext);
  return render ? (
    <div className="weather-container">
      <WiCelsius size={100}/>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather main"/>
      <p className="red">{weather.name}</p>
      <p>{weather.main.temp}</p>
    </div>
  ) : null;
} 

export default WeatherDetails;