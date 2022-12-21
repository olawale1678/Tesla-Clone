import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Model3Card from './Model3Card'

const Model3 = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <Model3Card/>
      <Footer/>
    </>
  )
}

export default Model3
