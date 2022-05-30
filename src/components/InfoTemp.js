import React from 'react'
import { useFetchWeather } from '../hooks/useFetchWeather'
import './InfoTemp.css'

const InfoTemp = () => {

  const { data } = useFetchWeather('bogota Colombia')
  console.log(data)

  const { icon, conditionText, country, feelsLike, humidity, locationName, temperature, windSpeed } = data

  return (
    <section className='info'>
      <div className='temperature'>
        <span>{`${temperature}°`}</span>
        <img src={icon} alt='weather'/>
        <span>{conditionText}</span>
      </div>
      <p>{`${country}, ${locationName}`}</p>
      <div>
        <p>Humidity: <span>{humidity}%</span></p>
        <p>WindSpeed: <span>{windSpeed}km/h</span></p>
        <p>FeelsLike: <span>{feelsLike}°</span></p>
      </div>
    </section>
  )
}

export default InfoTemp