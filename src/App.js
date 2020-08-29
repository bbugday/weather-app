import React from 'react';
import './css/App.css';
import WeatherContextProvider from './contexts/WeatherContext';
import WeatherDetails from './components/WeatherDetails';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm/>
        <WeatherDetails/>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
