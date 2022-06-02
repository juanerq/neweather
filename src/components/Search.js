import { useEffect,  useRef } from 'react'
import reverseGeoCoding from '../helpers/reverseGeoCoding'
import useGeoLocation from '../hooks/useGeoLocation'
import "leaflet-control-geocoder/dist/Control.Geocoder.modern";
import './Search.css';
import { NavLink } from 'react-router-dom';


const Search = ({ choose = 'btnSearch1' }) => {
  const [location, setLocation] = useGeoLocation()
  
  const buttons = {
    'btnSearch1': {
      button: <NavLink to='/weather'><button className={choose} > Buscar </button></NavLink>,
      direction: 'column'
    },
    'btnSearch2':{
      button: <button className={choose} ><i className='fa-solid fa-magnifying-glass'></i></button>,
      direction: 'row'
    }
  }

  const { button, direction } = buttons[choose]

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

    const InputCon = inputRef.current.value
    if (InputCon) {
      setLocation(e => ({
        ...e,
        site: InputCon
      }))
      inputRef.current.value = '';
    }
    console.log(location)
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

      {button}
    </form>
  )
}

export default Search