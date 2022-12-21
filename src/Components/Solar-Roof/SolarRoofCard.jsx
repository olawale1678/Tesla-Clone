import React from 'react'
import { GiSolarPower } from 'react-icons/gi'
import { Fade } from 'react-reveal'
import { NavLink } from 'react-router-dom'
import classes from './SolarRoof.module.css'

const SolarRoofCard = () => {
  return (
    <>
        <section className={classes.solarRoof}>
            <div className={classes.solarRoofMain}>
                <div style = {window.innerWidth < 775 ? {backgroundImage: `url('/images/solar-roof-hero-mobile.webp')`} : {backgroundImage: `url('/images/solar-roof-hero.webp')`}} className={classes['solarRoofMain-header']}>
                    <div className={classes['solarRoofMain-header-text']}>
                        <h1>Solar Roof</h1>
                        <p>Transform your roof and produce clean energy</p>
                    </div>

                    <div className={classes['solarRoofMain-header-units']}>
                        <Fade bottom>
                            <div className={classes['solarRoofMain-header-unit']}>
                                <h1><GiSolarPower/></h1>
                                <p>Beautiful Solar</p>
                            </div>
                            <div className={classes['solarRoofMain-header-unit']}>
                                <h1>25-Years</h1>
                                <p>Tile Warranty</p>
                            </div>
                            <div className={classes['solarRoofMain-header-unit']}>
                                <h1>24/7</h1>
                                <p>Outage Protection</p>
                            </div>
                            <div className={classes['solarRoofMain-header-unit']}>
                                <h1>1,020 hp</h1>
                                <p>Peak Power</p>
                            </div>

                            <div className={classes['solarRoofMain-header-units-btn']}>
                                <button><NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink></button>
                            </div>
                        </Fade>                   
                    </div>
                </div>
                
                <div className={classes.future}>
                    <div style = { window.innerWidth <= 775 ? {backgroundImage: `url('/images/solar-roof-mobile.webp')`} : {backgroundImage: `url('/images/solar-roof.jpg')`}} className={classes['solarRoofMain-future']}></div>
                </div>
            </div>

            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Design</p>
                        <h1>Complement Your Home’s Aesthetic</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. <a href="#">Schedule a virtual consultation</a> with an Energy Advisor to learn more.</p>
                    </div>
                </div>
            </Fade>
                
            <div className={classes.range}>
                <Fade bottom>
                    <div className={classes['range-right']}>
                        <div className={classes['range-right-text']}>
                            <h4>Energy Storage</h4>
                            <h1>Protection Against Outages</h1>
                            <p>Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</p>
                        </div>

                        <div className={classes['range-right-btn']}>
                            <button><NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink></button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </Fade>
                
                <div style={{backgroundImage: 'url(/images/solar-parking.webp)'}} className={classes['range-left']}>
                </div>
            </div>

            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Installation</p>
                        <h1>Trusted Expertise</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. <a href="#">Chat with an Energy Advisor</a> to ask any questions about Solar Roof.</p>
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
                            <button><NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink></button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </Fade>
                
                <div style={{backgroundImage: 'url(/images/inverter.png)'}} className={classes['range-left']}>
                </div>
            </div>

            <div style={window.innerWidth <= 775 ? {backgroundImage: 'url(/images/phone-mobile.jpg)'} : {backgroundImage: 'url(/images/phone.jpg)'}} className={classes['phone-img']}></div>
            
            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Control</p>
                        <h1>Monitor and Optimize</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.</p>
                    </div>
                </div>
            </Fade>
            
            <div className={classes.range}>
                <Fade bottom>
                    <div className={classes['range-right']}>
                        <div className={classes['range-right-text']}>
                            <h4>Value</h4>
                            <h1>Pay Less for Electricity</h1>
                            <p>Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill.</p>
                        </div>

                        <div className={classes['range-right-btn']}>
                            <button><NavLink to='/Solar Roof/custom solar order'>Order Now</NavLink></button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </Fade>
                
                <div style={{backgroundImage: 'url(/images/solar-roof.webp)'}} className={classes['range-left']}>
                </div>
            </div>

            <div className={classes.description}>
                <div style={{backgroundImage: 'url(/images/panel.png)'}} className={classes['description-left']}></div>

                <Fade bottom>
                    <div className={classes['description-right']}>
                        <div className={classes['description-right-heading']}>
                            <h1>Solar Roof Specs</h1>
                        </div>

                        <div className={classes['description-right-units']}>
                            <div className={classes['description-right-units-right']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Wattage</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>400 W</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Operating Temperature</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>-40°F up to +185°F</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Dimensions</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>74.4" x 41.2" x 1.57" (including frame)</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Design</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>Black anodized aluminum alloy frame Black solar cells and backsheet</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Warranty</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>25-year performance guarantee</p>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['description-right-units-left']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Certifications</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>IEC / UL 61730, CEC Listed, IEC 61215</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Inverter Power</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>3.8kW / 7.6kW 97.5% efficiency</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Inverter Dimensions</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>26" x 16" x 6"</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>Inverter Warranty</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>12.5 years </p>
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

export default SolarRoofCard
