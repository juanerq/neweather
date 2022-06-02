import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Weather from '../containers/Weather'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather' element={<Weather />}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter