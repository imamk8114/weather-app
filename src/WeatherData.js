import React from 'react';

function WeatherData(props) {
  const { weatherData } = props;
  console.log(weatherData.weather);
  return (
    <div>
      <h2>{weatherData.city}</h2>
      <h3>{weatherData.temp} °C</h3>

      <p>{weatherData.weather.description}</p>

      <div className='weather'>
       {Object.keys(weatherData.weather).map((key, i) => {
          if (weatherData.weather[key]) {
            return (
              <list className="weather_item" key={i}>
                {key} : {weatherData.weather[key]}
              </list>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default WeatherData;
