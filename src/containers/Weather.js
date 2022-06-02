import {useState} from 'react'
import './Weather.css'
import Search from '../components/Search'
import InfoTemp from '../components/InfoTemp'

import MapView from '../components/MapView'

const Weather = () => {
  const [site, setSite] = useState('Colombia, Bogota');

  return (
    <>
      <div className='weather'>
        <nav>
          <h1 className='title' translate='no'>NEWEATHER</h1>
          <Search choose={'btnSearch2'} setSite={setSite}/>
        </nav>
        <main className='contInfo'>
            <InfoTemp site={site}/>
        </main>
      </div>
      <MapView />
    </>
  )
}

export default Weather