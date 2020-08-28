import React,{useContext,useState} from 'react';
import {WeatherContext} from '../contexts/WeatherContext';
import Axios from 'axios';

const WeatherForm = () => {

  const {weather,setWeather} = useContext(WeatherContext);
  const [province,setProvince] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${province}&appid=49327d17c5063ead0f914b5580e31576`)
    const response = await request;
    setWeather(response.data);
  }

  
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a Province" value={province} onChange={(e) => setProvince(e.target.value)} required />  
      <input type="submit" value="change province"/>
    </form>
  );
}

export default WeatherForm;