import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import classes from './ModelS.module.css'
import ModelSCard from './ModelSCard'

const ModelS = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={classes.models}>
        <NavBar/>
        <ModelSCard/>
        <Footer/>     
      </div>
    </>
  )
}

export default ModelS
