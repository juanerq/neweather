import {createAutocomplete} from '@algolia/autocomplete-core'
import { useEffect, useState, useMemo, useRef } from 'react'

import reverseGeoCoding from '../helpers/reverseGeoCoding'
import useGeoLocation from '../hooks/useGeoLocation'
import "leaflet-control-geocoder/dist/Control.Geocoder.modern";
import L from "leaflet";

import AutocompleteItem from './AutocompleteItem';
import './Search.css';


const Search = ({ choose = 'btnSearch1', setLocation, setInfo}) => {
  const [location, ] = useGeoLocation()
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })
  
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

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Buscar sitio...',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'search-cities',
      getItems: ({ query }) => {
        if(!!query) {
          return fetch(`http://api.weatherapi.com/v1/search.json?key=54ea0ee335b44b6595b215631222205&q=${query}`)
          .then(res => res.json())
          .then(res => res.splice(0,4))
          .catch(console.log())
        }
      }
    }],
    ...{ choose, setLocation, setInfo}
  }), [choose, setLocation, setInfo])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })
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
          inputRef.current.value = `${CntryName} ${City}`
        }
      })
    }

  },[location, setLocation, choose])
  
  const handlerSearchButton = (e) => {
    e.preventDefault()

    const geocoder = L.Control.Geocoder.nominatim();
    if (inputRef.current.value)
      geocoder.geocode(inputRef.current.value, (results) => {
        let r = results[0];
        if (r) {
          setLocation(r?.center)
        }
      })
    
    setInfo(inputRef.current.value)
  }

  const handlerSearch = ({lat, lng, url}) => {
    setLocation({lat, lng})
    setInfo(url)
    setAutocompleteState({
      collections: [],
      isOpen: false
    })
  }

  return (
    <form 
      className='search' 
      style={{flexDirection: direction}} 
      ref={formRef} {...formProps}>
      <div>
        <article>
          <input
            type='text' 
            autoComplete='off' 
            ref={inputRef} {...inputProps}
          />
        </article>
        {
            autocompleteState.isOpen && (
              <div ref={panelRef} {...autocomplete.getPanelProps()}>
                {
                  autocompleteState.collections.map((collection, index) => {
                    const {items} = collection

                    return (
                      <section key={`citie-${index}`}>
                        {items.length > 0 && (
                          <ul {...autocomplete.getLabelProps()} className='list-results'>
                            {
                              items.map((item, index) => (
                                <AutocompleteItem key={index} {...item} handlerSearch={handlerSearch}/>
                              ))
                            }
                          </ul>
                        )}
                      </section>
                    )
                  })
                }
              </div>
            )
          }
      </div>

      <button className={choose} onClick={handlerSearchButton}> {text} </button>
    </form>
  )
}

export default Search