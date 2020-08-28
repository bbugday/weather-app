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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a Province" value={provinceForm} onChange={(e) => setProvinceForm(e.target.value)} required />  
      <input type="submit" value="change province"/>
    </form>
  );
}

export default WeatherForm;