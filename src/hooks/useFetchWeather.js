import { useEffect, useState } from "react"
import { getWeateher } from "../helpers/get-weather"

export const useFetchWeather = (site) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getWeateher(site)
      .then(data => {
        
        const { location, current } = data
        const { country, /*localtime,*/ name } = location
        const { condition, humidity, feelslike_c, /*is_day,*/ temp_c, wind_kph, /*wind_dir*/ } = current
        const { text, icon } = condition

        const body = {
          conditionText: text,
          icon: icon,
          country,
          //localtime,
          locationName: name,
          humidity,
          // isDay: is_day,
          feelsLike: feelslike_c,
          temperature: temp_c,
          windSpeed: wind_kph,
          //windDir: wind_dir
        }
        setState({
          data: body,
          loading: false
        })

      })
  }, [site])
  
  return state
}