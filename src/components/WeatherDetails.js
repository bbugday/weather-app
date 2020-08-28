import React, { useContext } from "react";
import {WeatherContext} from '../contexts/WeatherContext';

const WeatherDetails = () => {
  const {weather,render} = useContext(WeatherContext);
  return render ? (
    <div>
      <p>{weather.name}</p>
      <p>{weather.main.temp}</p>
    </div>
  ) : null;
} 

export default WeatherDetails;