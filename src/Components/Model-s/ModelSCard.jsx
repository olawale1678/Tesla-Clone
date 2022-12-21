import React, { useEffect, useState } from 'react'
import classes from './ModelS.module.css'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import modelSItem, { modelSItems, spec } from './ModelSData'
import {RiCameraLensFill} from 'react-icons/ri'

const ModelSCard = () => {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const length = window.innerWidth <= 840 ? modelSItems.length : modelSItem.length
    
    const increment = () => {
        one === length - 1 ? setOne(0) : setOne(prev => prev + 1)
    }

    const addOne = () => {
        setTwo(1)
    }

    const removeOne = () => {
        setTwo(0)
    }
    
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            increment()
        }, 5000);
        
        return () => {
            clearTimeout(timeOutId)
        }
    }, [one])

    const restructure = window.innerWidth <= 840 ? modelSItems.find((item, index) => {
        return index === one
    }) :  modelSItem.find((item, index) => {
        return index === one
    })

    const secondRestructure = spec.find((item, index) => {
        return index === two
    })
    
  return (
    <>
        <div className={classes.modelsMain}>
            <div style = { window.innerWidth <= 840 ? {backgroundImage: `url('/images/customModal-s/tesla-model-s-mobile.jpg')`} : {backgroundImage: `url('/images/teslaModel-s.jpg')`}} className={classes['modelsMain-header']}>
                <div className={classes['modelsMain-header-text']}>
                    <h1>Model S</h1>
                    <p>Plaid</p>
                </div>

                <div className={classes['modelsMain-header-units']}>
                    <Fade bottom>
                        <div className={classes['modelsMain-header-unit']}>
                            <h1>396 mi</h1>
                            <p>Range (EPA est.)</p>
                        </div>
                        <div className={classes['modelsMain-header-unit']}>
                            <h1>1.99 s</h1>
                            <p>0-60 mph*</p>
                        </div>
                        <div className={classes['modelsMain-header-unit']}>
                            <h1>200 mph</h1>
                            <p>Top Speed†</p>
                        </div>
                        <div className={classes['modelsMain-header-unit']}>
                            <h1>1,020 hp</h1>
                            <p>Peak Power</p>
                        </div>

                        <div className={classes['modelsMain-header-units-btn']}>
                            <button><NavLink to='/Model S/customOrder'>Order Now</NavLink></button>
                        </div>
                    </Fade>                   
                </div>
            </div>
            
            <div className={classes.future}>
                <h1>Interior of the Future</h1>
                <div style = { window.innerWidth <= 840 ? {backgroundImage: `url('/images/customModal-s/model-s-int-mobile.jpg')`} : {backgroundImage: `url('/images/new-interior.jpg')`}} className={classes['modelsMain-future']}></div>
            </div>

        </div>


        <div className={classes['feature-item']}>
            <Fade bottom>
                <div className={classes.feature}>
                    <div className={classes['feature-left']}>
                        <img src='/images/connected.jpg' />
                    </div>
                    
                    <div className={classes['feature-right']}>
                        <div>
                            <h1>Stay Connected</h1>
                            <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className={classes.feature}>                
                    <div className={classes['feature-right']}>
                        <div>
                            <h1>Immersive Sound</h1>
                            <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                        </div>
                    </div>

                    <div className={classes['feature-left']}>
                        <video autoPlay loop preload='auto' data-loaded = 'true'>
                            <source src='/videos/model-s/model-s-audio.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className={classes.feature}>
                    <div className={classes['feature-left']}>
                        <img src="/images/model-s-cycle.jpg" />
                    </div>
                    
                    <div className={classes['feature-right']}>
                        <div>
                            <h1>Room for Everything</h1>
                            <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

        <div style={ window.innerWidth <= 840 ? {backgroundImage: `url('/images/customModal-s/model-s-speed-mobile.jpg')`} : {backgroundImage: 'url(/images/model-s-speed.jpg)'}} className={classes.speed}>
            <Fade bottom>
                <div className={classes['speed-unit']}>
                    <div className={classes['speed-unit-top']}>
                        <h1>1,020 hp</h1>
                    </div>
                    
                    <div className={classes['speed-unit-bottom']}>
                        <p>Peak Power</p>
                    </div>
                </div>

                <div className={classes['speed-unit']}>
                    <div className={classes['speed-unit-top']}>
                        <h1>9.23 s</h1>
                    </div>
                    
                    <div className={classes['speed-unit-bottom']}>
                        <p>@155 mph 1/4 mile</p>
                    </div>
                </div>

                <div className={classes['speed-unit']}>
                    <div className={classes['speed-unit-top']}>
                        <h1>1.99 s</h1>
                    </div>
                    
                    <div className={classes['speed-unit-bottom']}>
                        <p>0-60 mph*</p>
                    </div>
                </div>
            </Fade>
        </div>

        <Fade bottom>
            <div className={classes.about}>
                <div className={classes['about-left']}>
                    <p>Plaid</p>
                    <h1>Beyond Ludicrous</h1>
                    <div className={classes['about-left-btn']}>
                        <button>
                            <NavLink to='/Model S/customOrder'>Order Now</NavLink>
                        </button>
                        <button>
                            <NavLink>View Inventory</NavLink>
                        </button>
                    </div>
                </div>
                <div className={classes['about-right']}>
                    <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S.</p>
                </div>
            </div>
        </Fade>

        <div className={classes.eletcric}>
            <Fade bottom>
                <div className={classes['eletcric-text']}>
                    <h1>Electric Powertrain</h1>
                    <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                </div>
            </Fade>

            <div className={classes['electric-gallery']}>
                <div className={classes['electric-gallery-img']}>
                    <img src={restructure.img} />
                </div>
            </div>

            <Fade bottom>

                <div className={classes['electric-desc']}>
                    {
                        modelSItem.map((item, index) => {
                            return <div key={item.heading} className={ index === one ? (classes['electric-desc-text'], classes['electric-desc-text-active']) : classes['electric-desc-text']}>
                                <div className={classes['electric-desc-head']}>
                                    <h1>{item.heading}</h1>
                                    <p>{item.desc}</p>
                                </div>
                                
                                <div className={classes['electric-desc-units']}>
                                    <div className={classes['electric-desc-unit']}>
                                        <div className={classes['electric-desc-unit-top']}>
                                            <h1>{item.unit1}</h1>
                                        </div>
                                        <div className={classes['electric-desc-unit-bottom']}>
                                            <p>{item.bottomUnit1}</p>
                                        </div>
                                    </div>
                                    <div className={classes['electric-desc-unit']}>
                                        <div className={classes['electric-desc-unit-top']}>
                                            <h1>{item.unit2}</h1>
                                        </div>
                                        <div className={classes['electric-desc-unit-bottom']}>
                                            <p>{item.bottomUnit2}</p>
                                        </div>
                                    </div>
                                    <div className={classes['electric-desc-unit']}>
                                        <div className={classes['electric-desc-unit-top']}>
                                            <h1>{item.unit3}</h1>
                                        </div>
                                        <div className={classes['electric-desc-unit-bottom']}>
                                            <p>{item.bottomUnit3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Fade>
            
            <Fade bottom>
                <div className={classes.para}>
                    <p>* With rollout subtracted</p>
                </div>
            </Fade>
        </div>


        <div className={classes.design}>
            <div style={ window.innerWidth <= 840 ? {backgroundImage: 'url(/images/customModal-s/model-s-streamline-mobile.jpg)'} : {backgroundImage: 'url(/images/model-s-streamLine.jpg)'}} className={classes['exterior-main']}>
            </div>
            <Fade bottom>
                <div className={classes.exterior}>
                    <div className={classes['exterior-left']}>
                        <p>Exterior</p>
                        <h1>Designed for Efficiency</h1>
                        <div className={classes['exterior-left-btn']}>
                            <button>
                                <NavLink to='/Model S/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['exterior-right']}>
                        <p>With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
                    </div>
                </div>
            </Fade>
                
            <Fade bottom>
                <div className={classes['design-item']}>
                    <div className={classes['design-item-left']}>
                        <div>
                            <h1>Relentless Performance</h1>
                            <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                        </div>
                    </div>
                    <div className={classes['design-item-right']}>
                        <img src="/images/model-s-design-rim.jpg"/>
                    </div>
                </div>
            </Fade>
                
            <Fade bottom>
                <div className={classes['design-item']}>
                    <div className={classes['design-item-right']}>
                        <img src="/images/model-s-design-rear.jpg" alt="" />
                    </div>
                    <div className={(classes['design-item-left'], classes.other)}>
                        <div>
                            <h1>Optimized Aerodynamics</h1>
                            <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                        </div>
                    </div>
                </div>
            </Fade>
                
            <Fade bottom>
                <div className={classes['design-item']}>
                    <div className={classes['design-item-left']}>
                        <div>
                            <h1>Refined Styling</h1>
                            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
                        </div>
                    </div>
                    <div className={classes['design-item-right']}>
                        <img src="/images/model-s-design.jpg" alt="" />
                    </div>
                </div>
            </Fade>
        </div>

        <div className={classes.range}>
            <div className={classes['range-left']}>
                <video autoPlay loop playsInline>
                    <source src='/videos/model-s/model-s-travel.mp4' type='video/mp4' />
                </video>
                
                <div className={classes['range-left-units']}>
                    <div className={classes['range-left-unit']}>
                        <h1>405 mi</h1>
                        <p>Go anywhere with up to 405 miles of estimated range on a single charge</p>
                    </div>
                    <div className={classes['range-left-unit']}>
                        <h1>15 min</h1>
                        <p>Recharge up to 200 miles in 15 minutes at Supercharger locations</p>
                    </div>
                    <div className={classes['range-left-unit']}>
                        <h1>40,000+</h1>
                        <p>Superchargers placed along popular routes</p>
                    </div>
                </div>
            </div>
            
            <Fade bottom>
                <div className={classes['range-right']}>
                    <div className={classes['range-right-text']}>
                        <h4>Range</h4>
                        <h1>Go Anywhere</h1>
                        <p>With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S.</p>
                    </div>

                    <div className={classes['range-right-btn']}>
                        <button><NavLink to='/Model S/customOrder'>Order Now</NavLink></button>
                        <button>Find My Route</button>
                    </div>
                </div>
            </Fade>
        </div>

        <div className={classes.structure}>
            <Fade bottom>
                <div className={classes['structure-left']}>
                    <div className={classes['structure-left-text']}>
                        <h4>Safety</h4>
                        <h1>High Impact Protection</h1>
                        <p>Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</p>
                    </div>

                    <div className={classes['structure-left-btn']}>
                        <button><NavLink to='/Model S/customOrder'>Order Now</NavLink></button>
                        <button>Find My Route</button>
                    </div>
                </div>
            </Fade>
            <div style={{backgroundImage: 'url(/images/model-s-structure.png)'}} className={classes['structure-right']}></div>
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
                            <NavLink to='/Model S/customOrder'>Order Now</NavLink>
                        </button>
                        <button>
                            <NavLink>View Inventory</NavLink>
                        </button>
                    </div>
                </div>
                <div className={classes['about-right']}>
                    <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S.</p>
                </div>
            </div>
        </Fade>

        <div className={classes.description}>
            <div style={{backgroundImage: 'url(/images/model-s-front.jpg)'}} className={classes['description-left']}></div>

            <Fade bottom>
                <div className={classes['description-right']}>
                    <div className={classes['description-right-heading']}>
                        <h1>Model S Specs</h1>
                    </div>

                    <div className={classes['description-right-btn']}>
                        <button className={ two === 0 ? classes.active : ''} onClick={removeOne}>Model S Plaid</button>
                        <button className={ two === 1 ? classes.active : ''} onClick={addOne}>Model S</button>
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
                    <h1>Model S</h1>
                    <div className={classes['about-left-btn']}>
                        <button>
                            <NavLink to='/Model S/customOrder'>Order Now</NavLink>
                        </button>
                        <button>
                            <NavLink>View Inventory</NavLink>
                        </button>
                    </div>
                </div>
                <div className={classes['about-right']}>
                    <img src="/images/model-s-side.jpg"/>
                </div>
            </div>
        </Fade>
    </>
  )
}

export default ModelSCard
