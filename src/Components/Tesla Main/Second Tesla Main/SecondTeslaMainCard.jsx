import React from 'react'
import { Fade } from 'react-reveal'
import { NavLink } from 'react-router-dom'
import classes from './SecondTeslaMain.module.css'

const SecondTeslaMainCard = ({item}) => {
  return (
    <>
        <section style={{backgroundImage: `url(${item.img})`}} className={classes.main}>
            <div className={classes['main-text']}>
                <h1>
                    {item.title}
                </h1>

                <p>{item.desc}</p>
            </div>

            <div className={classes['main-btn']}>
                <Fade left>
                    <button><NavLink to={`/${item.title}/custom solar order`}>{item.btnOne}</NavLink></button>
                </Fade>
                {
                    item.btnTwo && <Fade right><button>{item.btnTwo}</button></Fade>
                }
            </div>
        </section> 
    </>
  )
}

export default SecondTeslaMainCard
