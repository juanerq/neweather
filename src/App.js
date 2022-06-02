import React, { useState } from 'react'
import './App.css'
import { PositionContext } from './components/PositionContext';
import AppRouter from './router/AppRouter';

function App() {

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: 4.6769958, lng: -74.0887461},
    site: 'Colombia, Bogota'
  });

  return (
    <PositionContext.Provider value={{location, setLocation}}>
      <AppRouter />
    </PositionContext.Provider>
  );
}

export default App;