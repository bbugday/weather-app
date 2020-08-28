import React, { useContext } from "react";
import {WeatherContext} from '../contexts/WeatherContext';

const WeatherDetails = () => {
  const {weather} = useContext(WeatherContext);
  return (
    <div>
      <p>{weather.name}</p>
      <p>{weather.main && weather.main.temp}</p>
    </div>
  )
}

export default WeatherDetails;