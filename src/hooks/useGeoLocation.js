import { useEffect, useContext } from "react";
import { PositionContext } from "../components/PositionContext";

const useGeoLocation = () => {
  const { location, setLocation } = useContext(PositionContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLocation( e => ({
        ...e,
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
      }))
    })
  }, [setLocation])

  return [location, setLocation]
}

export default useGeoLocation