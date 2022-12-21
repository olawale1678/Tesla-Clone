import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import SolarRoofCard from './SolarRoofCard'

const SolarRoof = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <SolarRoofCard/>
      <Footer/>
    </>
  )
}

export default SolarRoof
