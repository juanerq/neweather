import React from 'react'
import './Home.css'
import Search from '../components/Search'
import Social from '../components/Social'

const Home = () => {
  
  return (
    <div className='home'>
      <h1 className='title' translate='no'>NEWEATHER</h1>
      <p> Averigua el clima de algún lugar del mundo </p>
      <Search choose={'btnSearch1'}/>
      <Social />
    </div>
  )
}

export default Home
