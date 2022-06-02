const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

const reverseGeoCoding = async (lng = 0, lat = 0) => {
  const { address } = await ( await fetch(GEOCODE_URL+`${lng},${lat}`)).json()

  return address ?? false
}

export default reverseGeoCoding