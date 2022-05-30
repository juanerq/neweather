import { Marker, useMap } from 'react-leaflet'
import Icon from './Icon'

const LocationMarker = ({ location }) => {
  const map = useMap();
  if (location) map.flyTo(location, 9);

  return location ? (
    <Marker draggable position={location} icon={Icon} />
  ) : null;
}

export default LocationMarker