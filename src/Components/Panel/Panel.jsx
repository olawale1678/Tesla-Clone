import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import PanelCard from './PanelCard'

const Panel = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <NavBar/>
        <PanelCard/>
        <Footer/>
    </>
  )
}

export default Panel
