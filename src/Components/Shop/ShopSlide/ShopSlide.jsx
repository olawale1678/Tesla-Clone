import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ShopSlide.module.css'

const ShopSlide = ({item}) => {
  return (
    <>
        <div className={classes['shop-item']}>
            <img src={item.img} />
            <h1>{item.title}</h1>
        </div>
    </>
  )
}

export default ShopSlide
