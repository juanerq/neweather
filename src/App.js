import React, { useState } from 'react'
import './App.css'
import { PositionContext } from './components/PositionContext';
import Home from './containers/Home'
// import Weather from './containers/Weather';

function App() {

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: 4.6769958, lng: -74.0887461},
  });

  return (
    <PositionContext.Provider value={{location, setLocation}}>
      <Home />
      {/* <Weather /> */}
    </PositionContext.Provider>
  );
}

export default App;