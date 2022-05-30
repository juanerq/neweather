import React from 'react'
// import './WeatherInfo.css'

export const WeatherInfo = ({ weather }) => {
  console.log(weather);

  return (
    <div className='container-info'>
      <h1>{weather.locationName}</h1>
      <h2>{weather.temperature}º</h2>
		  <h3>{weather.conditionText}</h3>
      <img src='//cdn.weatherapi.com/weather/128x128/night/116.png' alt={weather.conditionText}></img>
    </div>
  )
}