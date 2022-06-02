import { useContext ,useEffect, useState } from "react"
import { PositionContext } from "../components/PositionContext"
import { getWeateher } from "../helpers/get-weather"

export const useFetchWeather = () => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  const { location, setLocation } = useContext(PositionContext)
  const site = location.site
  
  useEffect(() => {
    getWeateher(site)
      .then(data => {
        
        const { location: elements, current } = data
        const { country, name, lat, lon } = elements
        const { condition, humidity, feelslike_c, temp_c, wind_kph } = current
        const { text, icon } = condition

        const body = {
          conditionText: text,
          icon: icon,
          country,
          locationName: name,
          humidity,
          feelsLike: feelslike_c,
          temperature: temp_c,
          windSpeed: wind_kph,
          lat,
          lon
        }
        setState({
          data: body,
          loading: false
        })

        setLocation(e =>({...e, coordinates: {lat, lon}}))

      })
  }, [site, setLocation])
  
  return state
}