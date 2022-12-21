import React from 'react'
import classes from './Panel.module.css'
import {GiSolarPower} from 'react-icons/gi'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import {BsCurrencyDollar} from 'react-icons/bs'

const PanelCard = () => {
  return (
    <>
        <section className={classes.panel}>
            <div className={classes.panelMain}>
                <div style = {window.innerWidth <= 840 ? {backgroundImage: `url('/images/panel-house-mobile.jpg')`} : {backgroundImage: `url('/images/panel-house.jpg')`}} className={classes['panelMain-header']}>
                    <div className={classes['panelMain-header-text']}>
                        <h1>Solar for Existing Roofs</h1>
                        <p>Lowest Cost Solar Panels in America-Money-back guarantee</p>
                    </div>

                    <div className={classes['panelMain-header-units']}>
                        <Fade bottom>
                            <div className={classes['panelMain-header-unit']}>
                                <h1><GiSolarPower/></h1>
                                <p>Convert Sunlight to Energy</p>
                            </div>
                            <div className={classes['panelMain-header-unit']}>
                                <h1>25-Years</h1>
                                <p>Tile Warranty</p>
                            </div>
                            <div className={classes['panelMain-header-unit']}>
                                <h1>24/7</h1>
                                <p>Energy Monitoring</p>
                            </div>
                            <div className={classes['panelMain-header-unit']}>
                                <h1><BsCurrencyDollar/></h1>
                                <p>Guaranteed Lowest Price for Solar</p>
                            </div>

                            <div className={classes['panelMain-header-units-btn']}>
                                <button><NavLink to='/Solar Panels/custom solar order'>Order Now</NavLink></button>
                            </div>
                        </Fade>                   
                    </div>
                </div>
                
                <div className={classes.future}>
                    <div style = {window.innerWidth <= 750 ? {backgroundImage: `url('/images/panel-hero-mobile.jpg')`} : {backgroundImage: `url('/images/panel-hero.jpg')`}} className={classes['panelMain-future']}></div>
                </div>
            </div>

            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Power On</p>
                        <h1>Order and Installation</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Solar Panels/custom solar order'>Order Now</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>From permitting on, we'll take care of everything. After you order we'll gather remote aerial imagery for your home and design your system</p>
                    </div>
                </div>
            </Fade>
                  
            <div className={classes.range}>
                <Fade bottom>
                    <div className={classes['range-right']}>
                        <div className={classes['range-right-text']}>
                            <h4>Efficiency</h4>
                            <h1>Maximum Solar Production</h1>
                            <p>Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures <a href="#"> Tesla Solar Inverter</a> continues to improve with each over-the-air software update.</p>
                        </div>

                        <div className={classes['range-right-btn']}>
                            <button><NavLink to='/Solar Panels/custom solar order'>Order Now</NavLink></button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </Fade>
                
                <div style={{backgroundImage: 'url(/images/inverter.png)'}} className={classes['range-left']}>
                </div>
            </div>
            
            <div style={{backgroundImage: 'url(/images/phone.jpg)'}} className={classes['phone-img']}></div>

            
            <div className={classes.description}>
                <div style={{backgroundImage: 'url(/images/panel-plate.jpg)'}} className={classes['description-left']}></div>

                <Fade bottom>
                    <div className={classes['description-right']}>
                        <div className={classes['description-right-heading']}>
                            <h1>Solar Panel Specs</h1>
                        </div>

                        <div className={classes['description-right-units']}>
                            <div className={classes['description-right-units-right']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Tile and Power Warranty</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>25 years</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Solar Glass Tiles</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>72 W</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Steel Tiles</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>Corrosion and weather resistant</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Wind Rating</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>Class F (highest rating)</p>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['description-right-units-left']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Fire Rating</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>Class A (highest rating)</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Hail Rating</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>Class 3</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Roof Pitch</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>≥ 2:12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.descBtn}>
                        <button>Compare</button>
                    </div>
                </Fade>
            </div>
        </section> 
    </>
  )
}

export default PanelCard
