import {useState} from 'react'
import './Weather.css'
import Search from '../components/Search'
import InfoTemp from '../components/InfoTemp'

import MapView from '../components/MapView'

const Weather = () => {
  const [location, setLocation] = useState({lat:0, lng:0} )

  return (
    <>
      <div className='weather'>
        <nav>
          <h1 className='title' translate='no'>NEWEATHER</h1>
          <Search choose={'btnSearch2'} setLocation={setLocation}/>
        </nav>
        <main className='contInfo'>
            <InfoTemp />
        </main>
      </div>
      <MapView latLng={location}/>
    </>
    
  )
}

export default Weather