import React,{useContext,useState} from 'react';
import {WeatherContext} from '../contexts/WeatherContext';

const WeatherForm = () => {

  const {setProvince} = useContext(WeatherContext);
  const [provinceForm, setProvinceForm] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    setProvince(provinceForm);
    setProvinceForm('');
  }

  
  return(
    <form className="weather-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="City Name" value={provinceForm} onChange={(e) => setProvinceForm(e.target.value)} required />
    </form>
  );
}

export default WeatherForm;