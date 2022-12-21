import React from 'react'
import NavBar from '../../NavBar/NavBar'
import SecondTeslaMainCard from './SecondTeslaMainCard'
import secondTeslaData from './SecondTeslaMainD'

const SecondTeslaMain = () => {
  return (
    <>
      <NavBar/>
      {
        secondTeslaData.map((item) => {
          return <div key={item.id}><SecondTeslaMainCard item = {item}/></div>
        })
      }
    </>
  )
}

export default SecondTeslaMain
