import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ModelyCard from './ModelyCard'

const Modely = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <NavBar/>
        <ModelyCard/>
        <Footer/>
    </>
  )
}

export default Modely
