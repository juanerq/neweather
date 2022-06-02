import React from 'react'
import { useFetchWeather } from '../hooks/useFetchWeather'
import './InfoTemp.css'
import { getImgInfoFromUrl } from '../assets/getIcon'

const InfoTemp = ({ site }) => {

  const { data } = useFetchWeather(site)
  const { icon = '', conditionText, country, feelsLike, humidity, locationName, temperature = 0, windSpeed } = data
  
  let iconPixel = icon && getImgInfoFromUrl(icon)

  return (
    <section className='info'>
      <div className='temperature'>
        <span>{`${temperature}°`}</span>
        <img src={iconPixel} alt='weather'/>
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