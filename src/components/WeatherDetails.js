import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { WiWindy, WiHumidity, WiCloud } from "react-icons/wi";

const WeatherDetails = () => {
  const { weather, render } = useContext(WeatherContext);
  return render ? (
    <div className="details">
      <p>{weather.name}</p>
      <div className="weather-container">
        <div className="weather-main">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather main"
            width="150px"
            height="150px"
          />
          <div className="temp-and-description">
            <p className="temp">
              {(weather.main.temp - 273.15).toString().slice(0, 5)}°C
            </p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        </div>
        <div className="weather-details">
          <div className="wind">
            <div><WiWindy size={80}/></div>
            <div className="details-text">{((weather.wind.speed)*(3.6)).toString().slice(0,5)} km/h</div>
          </div>
          <div className="humidity">
            <div><WiHumidity size={80}/></div>
            <div className="details-text">{weather.main.humidity}%</div>
          </div>
          <div className="cloud">
            <div><WiCloud size={80}/></div>
            <div className="details-text">{weather.clouds.all}%</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default WeatherDetails;
