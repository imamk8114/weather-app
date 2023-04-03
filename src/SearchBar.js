import React, { useState } from 'react';
import WeatherData from './WeatherData';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function handleSearch() {
    try {
      const apiKey = 'b88860b80aa59ba2546bca339b6fd14a';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      const main = {
        sky:data.weather.main,
        icon: data.weather.icon,
        description: data.weather.description,
        wind_speed: data.wind.speed,
        lat:data.coord.lat,
        lon:data.coord.lon
      };

      const weather ={
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        feels_like: data.main.feels_like,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity:data.main.humidity
      }

      setWeatherData({ city: data.name, main, weather });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && <WeatherData weatherData={weatherData} />}
    </div>
  );
}

export default SearchBar;
