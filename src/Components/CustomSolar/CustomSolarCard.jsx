import React from 'react'
import { SlGlobe } from 'react-icons/sl'
import UniversalLogo from '../UniversalLogo/UniversalLogo'
import classes from './CustomSolar.module.css'
import {FiCrosshair} from 'react-icons/fi'

const CustomSolarCard = ({reformItem}) => {
  return (
    <>
      <section className={classes.overview}>
        <section className={classes['overview-nav']}>
          <div className={classes.nav}>
            <UniversalLogo/>

            <div className={classes['overview-location']}>
              <SlGlobe className={classes.icon}/>
              <a href="#">US</a>
            </div>
          </div>
        </section>        

        <section role='none' className={classes['overview-body']}>        
          <div className={classes['overview-left']}>
            <div>
              <div style={{backgroundImage: `url(${reformItem.img})`}} className={classes['overview-left-img']}></div>
            </div>
          </div>

          <div className={classes['overview-right']}>
            <h1>Clean Power,Outage Protection</h1>

            <div className={classes['overview-right-forms']}>
              <label htmlFor="home">Home Address</label>
              <div className={classes['overview-right-form']}>
                <input id='home' type="text" />
                <div className={classes['overview-right-form-icon']}>
                  <FiCrosshair/>
                </div>
              </div>

              <label htmlFor="bill">Average Electric Bill</label>
              <div className={classes['overview-right-form']}>
                <input id='bill' type="text" />
                <div style={{fontSize: '1.1rem'}} className={classes['overview-right-form-icon']}>
                  /mo
                </div>
              </div>
            </div>

            <div className={classes['overview-right-link']}>
              <a href="#">My home is new or being built</a>
            </div>

            <div className={classes['overview-right-btn']}>
              <button type="submit">Next</button>
            </div>
            
            <p>We won't spam you in any way</p>
          </div>
        </section>
      </section>
      
    </>
  )
}

export default CustomSolarCard
