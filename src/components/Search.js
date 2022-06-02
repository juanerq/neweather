import { useEffect,  useRef } from 'react'
import reverseGeoCoding from '../helpers/reverseGeoCoding'
import useGeoLocation from '../hooks/useGeoLocation'
import "leaflet-control-geocoder/dist/Control.Geocoder.modern";
import './Search.css';


const Search = ({ choose = 'btnSearch1', setSite }) => {
  const [location, ] = useGeoLocation()

  console.log(location)
  
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

  const inputRef = useRef(null)

  useEffect(() => {
    
    if(location.loaded){
      const latLng = location.coordinates
      
      reverseGeoCoding(latLng?.lng, latLng?.lat).then(location => {
        if(location.CntryName) {
          const {CntryName, City} = location
          inputRef.current.value = `${CntryName} ${City}`
        }
      })
    }

  },[location])
  
  const handlerSearchButton = (e) => {
    e.preventDefault()

    if (inputRef.current.value) {
      setSite(inputRef.current.value)
      inputRef.current.value = '';
    }
    
  }

  return (
    <form 
      className='search' 
      style={{flexDirection: direction}} 
      onSubmit={handlerSearchButton}
    >
        <article>
          <input
            type='text' 
            autoComplete='off' 
            placeholder='Buscar sitio...'
            ref={inputRef}
            required
          />
        </article>

      <button className={choose} > {text} </button>
    </form>
  )
}

export default Search