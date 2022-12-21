import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ShopCard from './ShopCard'
import ShopNav from './ShopNav/ShopNav'

const Shop = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ShopNav/>
      <ShopCard/>
      <Footer/>
    </>
  )
}

export default Shop
