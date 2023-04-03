import React, { useState } from 'react';
import WeatherData from './WeatherData';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'b88860b80aa59ba2546bca339b6fd14a';

  async function handleSearch() {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      const weather ={
        lat:data.coord.lat,
        lon:data.coord.lon,
        sky:data.weather.main,
        description: data.weather.description,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity:data.main.humidity,
        wind_speed: data.wind.speed
      }

      setWeatherData({ city: data.name, temp:data.main.temp, weather });
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
