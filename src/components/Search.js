import { useEffect,  useRef, useState } from 'react'
import reverseGeoCoding from '../helpers/reverseGeoCoding'
import useGeoLocation from '../hooks/useGeoLocation'
import "leaflet-control-geocoder/dist/Control.Geocoder.modern";
import './Search.css';
import { Navigate } from 'react-router-dom';


const Search = ({ choose = 'btnSearch1' }) => {
  const [location, setLocation] = useGeoLocation()
  const [touch, setTouch] = useState(false)
  
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

  },[location, setLocation])
  
  const handlerSearchButton = (e) => {
    e.preventDefault()

    const InputCon = inputRef.current.value
    console.log(InputCon)
    if (InputCon) {
      setLocation(e => ({
        ...e,
        site: InputCon
      }))
      inputRef.current.value = '';
      setTouch(true)
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

      <button className={choose}> {text} </button>
      { 
       choose === 'btnSearch1' && touch 
       ? <Navigate to='/weather'/>
       : <></>
      }
    </form>
  )
}


export default Search