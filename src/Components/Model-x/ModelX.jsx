import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ModelxCard from './ModelxCard'

const ModelX = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <NavBar/>
        <ModelxCard/>
        <Footer/>
    </>
  )
}

export default ModelX
