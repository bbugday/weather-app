import React, { createContext, useEffect, useState } from "react";
import Axios from 'axios';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {

  const [weather,setWeather] = useState();
  const [province,setProvince] = useState('');
  const [render,setRender] = useState(false);

  useEffect( () => {
    async function fetchData(){
     const request = Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=${process.env.REACT_APP_API_KEY}`);
     const response = await request; 
     setWeather(response.data);
     setRender(true);
    }
    fetchData();
  },[province]);

  //will trigger the callback only after the first render
  useEffect(() => {
    setProvince('istanbul');
  }, [])


  return (
    <WeatherContext.Provider value={{ weather, setWeather,province,setProvince,render }}>
      {props.children}
    </WeatherContext.Provider>
  )

}

export default WeatherContextProvider;