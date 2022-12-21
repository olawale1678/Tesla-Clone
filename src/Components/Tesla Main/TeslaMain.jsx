import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Accessory from './Accessory/Accessory'
import SecondTeslaMain from './Second Tesla Main/SecondTeslaMain'
import TeslaMainCard from './TeslaMainCard'
import TeslaData from './TeslaMainD'

const TeslaMain = () => {
  return (
    <>
      <NavBar/>
      {
        TeslaData.map((item) => {
          return <div key={item.id}><TeslaMainCard item = {item}/></div>
        })
      }
      <SecondTeslaMain/>
      <Accessory/>
      <Footer/>
    </>
  )
}

export default TeslaMain
