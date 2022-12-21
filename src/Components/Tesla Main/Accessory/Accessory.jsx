import React from 'react'
import classes from './Accessory.module.css'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'

const Accessory = () => {
  return (
    <>
        <section style={{backgroundImage: `url(${'/images/accessories.jpg'})`}} className={classes.main}>
            <div className={classes['main-text']}>
                <h1>
                    Accessories
                </h1>
            </div>

            <div className={classes['main-btn']}>
                <Fade left>
                    <button><NavLink to='/shop'>Shop Now</NavLink></button>
                </Fade>
            </div>
        </section> 
    </>
  )
}

export default Accessory
