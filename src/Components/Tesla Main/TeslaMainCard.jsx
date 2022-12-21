import React from 'react'
import classes from './TeslaMain.module.css'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

const TeslaMainCard = ({item}) => {
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
                    <button><NavLink to={`/${item.title}/customOrder`}>{item.btnOne}</NavLink></button>
                </Fade>
                {
                    item.btnTwo && <Fade right><button>{item.btnTwo}</button></Fade>
                }
            </div>
        </section> 
    </>
  )
}

export default TeslaMainCard
