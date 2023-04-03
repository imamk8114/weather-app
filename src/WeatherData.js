import React from 'react';

function WeatherData(props) {
  const { weatherData } = props;

  return (
    <div>
      <h2>{weatherData.city}</h2>
      <h3>{weatherData.weather.temp} °C</h3>
      <img
        alt={weatherData.main.description}
      />
      <p>{weatherData.main.description}</p>
      <div>
       {weatherData.weather.array.forEach(([key,value]) => {
            <list>
                {key} : {value}
            </list>
       })}
      </div>
    </div>
  );
}

export default WeatherData;
