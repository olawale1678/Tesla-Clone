import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Model3.module.css'
import {GiSpeedometer} from 'react-icons/gi'
import { Fade } from 'react-reveal'
import {BsCloudSun} from 'react-icons/bs'
import { RiCameraLensFill } from 'react-icons/ri'
import spec from './Model3D'

const Model3Card = () => {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [color, setColor] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 830 && window.scrollY <= 6300) {
            setColor(true)
        } else{
            setColor(false)
        }

        if (window.scrollY >= 0 && window.scrollY < 830) {
            setTwo(0)
        } else if (window.scrollY >= 830 && window.scrollY < 1400) {
            setTwo(1)
        } else if (window.scrollY >= 1400 && window.scrollY < 2300) {
            setTwo(2)
        } else if (window.scrollY >= 2300 && window.scrollY < 3400) {
            setTwo(3)  
        } else if (window.scrollY >= 3400 && window.scrollY < 4200) {
            setTwo(4)   
        } else if (window.scrollY >= 4200 && window.scrollY < 5250) {
            setTwo(5)  
        } else if (window.scrollY >= 5250 && window.scrollY < 6300) {
            setTwo(6)  
        } else if (window.scrollY >= 6300 && window.scrollY < 7500) {
            setTwo(7) 
        } else if (window.scrollY >= 7500) {
            setTwo(8)  
        }
    })

    const scrollOne = () => {
        window.scrollTo(0, 0)
        setTwo(0)
    }

    const scrollTwo = () => {
        window.scrollTo(0, 830)
        setTwo(1)
    }

    const scrollThree = () => {
        window.scrollTo(0, 1400)
        setTwo(2)
    }

    const scrollFour = () => {
        window.scrollTo(0, 2300)
        setTwo(3)
    }

    const scrollFive = () => {
        window.scrollTo(0, 3400)
        setTwo(4)
    }

    const scrollSix = () => {
        window.scrollTo(0, 4900)
        setTwo(5)
    }

    const scrollSeven = () => {
        window.scrollTo(0, 5250)
        setTwo(6)
    }

    const scrollEight = () => {
        window.scrollTo(0, 6300)
        setTwo(7)
    }

    const scrollNine = () => {
        window.scrollTo(0, 7500)
        setTwo(8)
    }


    const addOne = () => {
        setOne(1)
    }

    const removeOne = () => {
        setOne(0)
    }

    const addTwo = () => {
        setOne(2)
    }

    const secondRestructure = spec.find((item, index) => {
        return index === one
    })

  return (
    <>
        <section className={classes.model3}>

            <section className={classes.sideBar}>
                <button className={ color ? classes.color : ''} onClick={scrollOne}>
                    <h1 className={ two === 0 ? classes.head : ''}>|</h1> <p> MODEL 3 </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollTwo}>
                    <h1 className={ two === 1 ? classes.head : ''}>|</h1> <p> SAFTY </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollThree}>
                    <h1 className={ two === 2 ? classes.head : ''}>|</h1> <p> PERFORMANCE </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollFour}>
                    <h1 className={ two === 3 ? classes.head : ''}>|</h1> <p> ALL-WHEEL-DRIVE </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollFive}>
                    <h1 className={ two === 4 ? classes.head : ''}>|</h1> <p> RANGE </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollSix}>
                    <h1 className={ two === 5 ? classes.head : ''}>|</h1> <p> AUTOPILOT </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollSeven}>
                    <h1 className={ two === 6 ? classes.head : ''}>|</h1> <p> INTERIOR </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollEight}>
                    <h1 className={ two === 7 ? classes.head : ''}>|</h1> <p> SPEC </p>
                </button>

                <button className={ color ? classes.color : ''} onClick={scrollNine}>
                    <h1 className={ two === 8 ? classes.head : ''}>|</h1> <p> ORDER </p>
                </button>
            </section>

            <header style={window.innerWidth <= 564 ? {backgroundImage: 'url(/images/customModal-3/model-3-header-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-3/model-3-header.jpg)'}} className={classes['model3-header']}>
                <h1>Model 3</h1>
                <div className={classes['model3-header-units']}>
                    <div className={classes['model3-header-unit']}>
                        <div className={classes['model3-header-unit-top']}>
                            <h1><GiSpeedometer style={{marginRight: '.3rem'}}/> 3.1 s</h1>
                        </div>
                        <div className={classes['model3-header-unit-bottom']}>
                            <p>0-60 mph*</p>
                        </div>
                    </div>
                    <div className={classes['model3-header-unit']}>
                        <div className={classes['model3-header-unit-top']}>
                            <h1>358 mi</h1>
                        </div>
                        <div className={classes['model3-header-unit-bottom']}>
                            <p>Range (EPA est.)</p>
                        </div>
                    </div>
                    <div className={classes['model3-header-unit']}>
                        <div className={classes['model3-header-unit-top']}>
                            <h1>AWD</h1>
                        </div>
                        <div className={classes['model3-header-unit-bottom']}>
                            <p>Dual Motor</p>
                        </div>
                    </div>

                    <div className={classes['model3-header-btn']}>
                        <button><NavLink to='/Model 3/customOrder'>Order Now</NavLink></button>
                    </div>
                </div>
            </header>

            <section className={classes.structure}>
                <div style={{backgroundImage: 'url(/images/customModal-3/model-3-structure.png)'}} className={classes['structure-left']}></div>
                <div className={classes['structure-right']}>
                    <div className={classes['structure-right-text']}>
                        <div className={classes['structure-right-text-heading']}>
                            <h4>Safety</h4>
                            <h1>Built for Safety</h1>
                            <p>Safety is the most important part of every Tesla. We design our vehicles to <a href="#">exceed safety standards.</a></p>
                        </div>

                        <div className={classes['structure-right-text-rate']}>
                            <h4>5-Star Rating</h4>
                            <p>Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                        </div>

                        <div className={classes['structure-right-text-safty']}>
                            <h4>Top Safety Pick+</h4>
                            <p>Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                        </div>
                    </div>

                    <div className={classes['structure-right-btn']}>
                        <button><NavLink to='/Model 3/customOrder'>Order Now</NavLink></button>
                    </div>
                </div>
            </section>

            <section style={window.innerWidth <= 860 ? {backgroundImage: 'url(/images/customModal-3/model-3-hero-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-3/model-3-hero.jpg)'}} className={classes.hero}>            
                <div className={classes['hero-header-units']}>
                    <div className={classes['hero-header-unit']}>
                        <div className={classes['hero-header-unit-top']}>
                            <h1><GiSpeedometer style={{marginRight: '.3rem'}}/>3.1 s</h1>
                        </div>
                        <div className={classes['hero-header-unit-bottom']}>
                            {
                                window.innerWidth <= 860 ? <p>0-60 mph*</p> : <p>Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</p>
                            }
                        </div>
                    </div>
                    <div className={classes['hero-header-unit']}>
                        <div className={classes['hero-header-unit-top']}>
                            <h1>162 mph</h1>
                        </div>
                        <div className={classes['hero-header-unit-bottom']}>
                            {
                                window.innerWidth <= 860 ? <p>Top Speed</p> : <p>Improved handling and aerodynamics allow for a top speed of 162 mph</p>
                            }
                        </div>
                    </div>
                    <div className={classes['hero-header-unit']}>
                        <div className={classes['hero-header-unit-top']}>
                            <h1>AWD</h1>
                        </div>
                        <div className={classes['hero-header-unit-bottom']}>
                            {
                                window.innerWidth <= 860 ? <p>Dual Motor</p> : <p>Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions</p>
                            }
                        </div>
                    </div>

                    <div className={classes['hero-header-btn']}>
                        <button><NavLink to='/Model 3/customOrder'>Order Now</NavLink></button>
                    </div>
                </div>
            </section>
                
            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Performance</p>
                        <h1>Quickest Acceleration</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model 3/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model 3.</p>
                    </div>
                </div>
            </Fade>

            <section style={window.innerWidth <= 860 ? {backgroundImage: 'url(/images/customModal-3/model-3-run-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-3/model-3-run.jpg)'}} className={classes.run}>  
                <Fade bottom>
                    <div className={classes['run-header-units']}>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1>2</h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 860 ? <p>Independent Motors</p> : <p>Independent motors digitally control torque to the front and rear wheels</p>
                                }
                            </div>
                        </div>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1>10 ms</h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 860 ? <p>Torque Response</p> : <p>Dual motors respond to changing conditions in as little as 10 milliseconds</p>
                                }
                            </div>
                        </div>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1><BsCloudSun/></h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 860 ? <p>Weather Control</p> : <p>Unparalleled traction and control, in all weather conditions</p>
                                }
                            </div>
                        </div>
                    </div>
                </Fade>      
            </section>
               
            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>All-Wheel Drive</p>
                        <h1>Dual Motor</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model 3/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                    </div>
                </div>
            </Fade>
                
            <div className={classes.range}>
                <div style={{backgroundImage: 'url(/images/customModal-3/model-3-hero2.jpg)'}} className={classes['range-left']}>
                    
                    <div className={classes['range-left-units']}>
                        <div className={classes['range-left-unit']}>
                            <h1>358 mi</h1>
                            {
                                window.innerWidth <= 860 ? <p>Range(EPA est.)</p> : <p>Go anywhere with up to 358 miles of estimated range on a single charge</p>
                            }
                        </div>
                        <div className={classes['range-left-unit']}>
                            <h1>15 min</h1>
                            {
                                window.innerWidth <= 860 ? <p>Recharge up to 175 mi</p> : <p>Recharge up to 175 miles in 15 minutes at Supercharger locations</p>
                            }
                        </div>
                        <div className={classes['range-left-unit']}>
                            <h1>40,000+</h1>
                            {
                                window.innerWidth <= 860 ? <p>Global SuperChargers</p> : <p>Superchargers placed along well-traveled routes around the world</p>
                            }
                        </div>
                    </div>
                </div>
                
                <Fade bottom>
                    <div className={classes['range-right']}>
                        <div className={classes['range-right-text']}>
                            <h4>Range</h4>
                            <h1>Go Anywhere</h1>
                            <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model 3.</p>
                        </div>

                        <div className={classes['range-right-btn']}>
                            <button><NavLink to='/Model 3/customOrder'>Order Now</NavLink></button>
                            <button>Find My Route</button>
                        </div>
                    </div>
                </Fade>
            </div>

            <div style={ window.innerWidth <= 840 ? {backgroundImage: 'url(images/customModal-s/model-s-radius-mobile.jpg)'} : {backgroundImage: 'url(images/model-s-radius.jpg)'}} className={classes.radius}>
                <div className={classes['radius-item']}>
                    <div className={classes['radius-item-unit']}>
                        <h1>360°</h1>
                        <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                    </div>
                    <div className={classes['radius-item-unit']}>
                        <h1>250 m</h1>
                        <p>Powerful visual processing at up to 250 meters of range</p>
                    </div>
                    <div className={classes['radius-item-unit']}>
                        <h1><RiCameraLensFill/></h1>
                        <p>Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
                    </div>
                </div>
            </div>
            
            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Autopilot</p>
                        <h1>Future of Driving</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model 3/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. <a href="#"> Chat with a Tesla Advisor</a> to learn more about Model 3.</p>
                    </div>
                </div>
            </Fade>

            <div style={ window.innerWidth <= 860 ? {backgroundImage: 'url(/images/customModal-3/model-3-int-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-3/model-3-int.jpg)'}} className={classes.int}></div>
            
            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Interior</p>
                        <h1>Built Around the Driver</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model 3/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
                    </div>
                </div>
            </Fade>

            
            <div className={classes.description}>
                <div style={{backgroundImage: 'url(/images/customModal-3/model-3-front.jpg)'}} className={classes['description-left']}></div>

                <Fade bottom>
                    <div className={classes['description-right']}>
                        <div className={classes['description-right-heading']}>
                            <h1>Model S Specs</h1>
                        </div>

                        <div className={classes['description-right-btn']}>
                            <button className={ one === 0 ? classes.active : ''} onClick={removeOne}>Performance</button>
                            <button className={ one === 1 ? classes.active : ''} onClick={addOne}>Long Range AWD</button>
                            <button className={ one === 2 ? classes.active : ''} onClick={addTwo}>Rear Wheel Drive</button>
                        </div>

                        <div className={classes['description-right-units']}>
                            <div className={classes['description-right-units-right']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingLeftOne}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitLeftOne}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingLeftTwo}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitLeftTwo}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingLeftThree}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitLeftThree}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingLeftFour}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitLeftFour}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingLeftFive}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitLeftFive}</p>
                                    </div>
                                </div>
                                {
                                    secondRestructure.headingLeftSix && <div className={classes['description-right-unit']}>
                                        <div className={classes['description-right-unit-top']}>
                                            <small>_____</small>
                                            <h1>{secondRestructure.headingLeftSix}</h1>
                                        </div>
                                        <div className={classes['description-right-unit-bottom']}>
                                            <p>{secondRestructure.unitLeftSix}</p>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={classes['description-right-units-left']}>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttOne}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttOne}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttTwo}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttTwo}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttThree}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttThree}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttFour}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttFour}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttFive}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttFive}</p>
                                    </div>
                                </div>
                                <div className={classes['description-right-unit']}>
                                    <div className={classes['description-right-unit-top']}>
                                        <small>_____</small>
                                        <h1>{secondRestructure.headingRighttSix}</h1>
                                    </div>
                                    <div className={classes['description-right-unit-bottom']}>
                                        <p>{secondRestructure.unitRighttSix}</p>
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


            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p></p>
                        <h1>Experience Model 3</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model 3/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <img src="/images/customModal-3/model-3-side.jpg"/>
                    </div>
                </div>
            </Fade>
        </section>
    </>
  )
}

export default Model3Card
