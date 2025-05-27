import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/current-weather/current-weather'
import { weather_url, weather_key } from './api'
import Forecast from './components/forecast-weather/forecast'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${weather_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_key}&units=metric`);
    const forecastWeatherFetch = fetch(`${weather_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_key}&units=metric`);
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      }
      ).catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  )
}

export default App
