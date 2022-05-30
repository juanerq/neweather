import { useEffect, useState } from 'react'
import './Search.css';
import reverseGeoCoding from '../helpers/reverseGeoCoding'
import useGeoLocation from '../hooks/useGeoLocation'
import "leaflet-control-geocoder/dist/Control.Geocoder.modern";
import L from "leaflet";


const Search = ({ choose = 'btnSearch1', setLocation}) => {
  const [location, ] = useGeoLocation()
  const [inputValue, setInputValue] = useState('')

  const buttons = {
    'btnSearch1': {
      text: 'Buscar',
      direction: 'column'
    },
    'btnSearch2':{
      text: <i className='fa-solid fa-magnifying-glass'></i>,
      direction: 'row'
    }
  }

  const { text, direction } = buttons[choose]
  
  useEffect(() => {
    
    if(location.loaded) {
      const latLng = location.coordinates
      if(choose === 'btnSearch2') {
        setLocation(latLng)
      }
      reverseGeoCoding(latLng?.lng, latLng?.lat).then(location => {
    
        if(location.CntryName) {
          const {CntryName, City} = location
          setInputValue(`${CntryName} ${City}`)
        }
      })
    }

  },[location, setLocation])
  
  const handlerSearch = (e) => {
    e.preventDefault()

    const geocoder = L.Control.Geocoder.nominatim();
    if (inputValue)
      geocoder.geocode(inputValue, (results) => {
        let r = results[0];
        if (r) {
          setLocation(r?.center)
        }
      })
  }

  return (
    <form className='search' style={{flexDirection: direction}} onSubmit={handlerSearch}>
      <article>
        <input
          value={inputValue}
          type='text' 
          autoComplete='off' 
          placeholder='Buscar sitio...'
          onChange={(e) => setInputValue( e.target.value )}
        />
      </article>
      <button className={choose}> {text} </button>
    </form>
  )
}

export default Search