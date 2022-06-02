import React, { useContext } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import 'leaflet/dist/leaflet.css'
import './MapView.css'
import { PositionContext } from './PositionContext'

const MapView = () => {

  const { location } = useContext(PositionContext)

  const ZOOM_LEVEL = 7
  return (
  <div className='mapview'>
    <MapContainer zoom={ZOOM_LEVEL} center={location.coordinates} >
      <TileLayer url="https://api.mapbox.com/styles/v1/juanerq/cl3qrtpca000516o3p6rshczh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVhbmVycSIsImEiOiJjbDNxcndkbXcxYXcwM2xwYTZrcnNrN3FpIn0.oj6BG5fMC3HkQiOo7uBPKA"/>
      <LocationMarker location={location.coordinates} />
    </MapContainer>
  </div>
  )
}

export default MapView