import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {

  const [weather,setWeather] = useState({wind:{"speed":6.7,"deg":230}});
  

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  )

}

export default WeatherContextProvider;