import React, { useEffect, useState } from 'react'
import classes from './Modelx.module.css'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import {RiCameraLensFill} from 'react-icons/ri'
import modelXItem, { spec } from './ModelxD'

const ModelxCard = () => {

    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const length = modelXItem.length;
    
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

    const restructure = modelXItem.find((item, index) => {
        return index === one
    })

    const secondRestructure = spec.find((item, index) => {
        return index === two
    })
  return (
    <>
        <section className={classes.modelx}>
            <div className={classes.modelxMain}>
                <div style = {window.innerWidth <= 775 ? {backgroundImage: `url('/images/customModal-x/model-x-travel-mobile.jpg')`} : {backgroundImage: `url('/images/customModal-x/model-x-travel.jpg')`}} className={classes['modelxMain-header']}>
                    <div className={classes['modelxMain-header-text']}>
                        <h1>Model X</h1>
                        <p>Plaid</p>
                    </div>

                    <div className={classes['modelxMain-header-units']}>
                        <Fade bottom>
                            <div className={classes['modelxMain-header-unit']}>
                                <h1>333 mi</h1>
                                <p>Range (EPA est.)</p>
                            </div>
                            <div className={classes['modelxMain-header-unit']}>
                                <h1>2.5 s</h1>
                                <p>0-60 mph*</p>
                            </div>
                            <div className={classes['modelxMain-header-unit']}>
                                <h1>9.9 s</h1>
                                <p>1/4 Mile</p>
                            </div>
                            <div className={classes['modelxMain-header-unit']}>
                                <h1>1,020 hp</h1>
                                <p>Peak Power</p>
                            </div>

                            <div className={classes['modelxMain-header-units-btn']}>
                                <button><NavLink to='/Model X/customOrder'>Order Now</NavLink></button>
                            </div>
                        </Fade>                   
                    </div>
                </div>
                
                <div className={classes.future}>
                    <h1>Interior of the Future</h1>
                    <div style = {window.innerWidth <= 775 ? {backgroundImage: `url('/images/new-interior-mobile.jpg')`} : {backgroundImage: `url('/images/new-interior.jpg')`}} className={classes['modelxMain-future']}></div>
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
                            <img src='/images/customModal-x/model-x-audio.jpg' />
                        </div>
                    </div>
                </Fade>
            </div>

            <div style={window.innerWidth <= 775 ? {backgroundImage: 'url(/images/customModal-x/model-x-speed-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-x/model-x-speed.jpg)'}} className={classes.speed}>
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
                            <h1>9.9 s</h1>
                        </div>
                        
                        <div className={classes['speed-unit-bottom']}>
                            <p>1/4 mile</p>
                        </div>
                    </div>

                    <div className={classes['speed-unit']}>
                        <div className={classes['speed-unit-top']}>
                            <h1>2.5 s</h1>
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
                                <NavLink to='/Model X/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model X.</p>
                    </div>
                </div>
            </Fade>

            <div className={classes.eletcric}>
                <Fade bottom>
                    <div className={classes['eletcric-text']}>
                        <h1>Electric Powertrain</h1>
                        <p>Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance, range and efficiency. New module and pack thermal architecture allows for faster charging and gives you more power and endurance in all conditions.</p>
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
                            modelXItem.map((item, index) => {
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

            <div className={classes.structure}>
                <Fade bottom>
                    <div className={classes['structure-left']}>
                        <div className={classes['structure-left-text']}>
                            <h4>Utility</h4>
                            <h1>Even More Capable</h1>
                            <p>With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go.</p>
                        </div>

                        <div className={classes['structure-left-btn']}>
                            <button><NavLink to='/Model X/customOrder'>Order Now</NavLink></button>
                            <button>View Inventory</button>
                        </div>
                    </div>
                </Fade>
                <div style={{backgroundImage: 'url(/images/customModal-x/model-x-cycle.jpg)'}} className={classes['structure-right']}>
                    <div className={classes['structure-right-units']}>
                        <div className={classes['structure-right-unit']}>
                            <h1>92 ft³</h1>
                            <p>Up to 92 ft³ of storage</p>
                        </div>
                        <div className={classes['structure-right-unit']}>
                            <h1>5,000 lbs</h1>
                            <p>Recharge up to 200 miles in 15 minutes at Supercharger locations</p>
                        </div>
                        <div className={classes['structure-right-unit']}>
                            <h1>40,000+</h1>
                            <p>Superchargers placed along popular routes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.design}>
                <div style={window.innerWidth <= 775 ? {backgroundImage: 'url(/images/customModal-x/model-x-streamLine-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-x/model-x-streamLine.jpg)'}} className={classes['exterior-main']}>
                </div>
                <Fade bottom>
                    <div className={classes.exterior}>
                        <div className={classes['exterior-left']}>
                            <p>Exterior</p>
                            <h1>Designed for Efficiency</h1>
                            <div className={classes['exterior-left-btn']}>
                                <button>
                                    <NavLink to='/Model X/customOrder'>Order Now</NavLink>
                                </button>
                                <button>
                                    <NavLink>View Inventory</NavLink>
                                </button>
                            </div>
                        </div>
                        <div className={classes['exterior-right']}>
                            <p>Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.</p>
                        </div>
                    </div>
                </Fade>
                    
                <Fade bottom>
                    <div className={classes['design-item']}>
                        <div className={classes['design-item-left']}>
                            <div>
                                <h1>Relentless Performance</h1>
                                <p>Performance wheels and tires keep the SUV planted, transferring even more power down to the road.</p>
                            </div>
                        </div>
                        <div className={classes['design-item-right']}>
                            <img src="/images/customModal-x/model-x-rim.jpg"/>
                        </div>
                    </div>
                </Fade>
                    
                <Fade bottom>
                    <div className={classes['design-item']}>
                        <div className={classes['design-item-right']}>
                            <img src="/images/customModal-x/model-x-back.jpg" alt="" />
                        </div>
                        <div className={(classes['design-item-left'], classes.other)}>
                            <div>
                                <h1>Optimized Aerodynamics</h1>
                                <p>Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                    
                <Fade bottom>
                    <div className={classes['design-item']}>
                        <div className={classes['design-item-left']}>
                            <div>
                                <h1>Refined Styling</h1>
                                <p>Exterior design combines an iconic look with elegant details.</p>
                            </div>
                        </div>
                        <div className={classes['design-item-right']}>
                            <img src="/images/customModal-x/model-x.jpg" alt="" />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className={classes.structure}>
                <Fade bottom>
                    <div className={classes['structure-left']}>
                        <div className={classes['structure-left-text']}>
                            <h4>Range</h4>
                            <h1>Go Anywhere</h1>
                            <p>With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model X.</p>
                        </div>

                        <div className={classes['structure-left-btn']}>
                            <button><NavLink to='/Model X/customOrder'>Order Now</NavLink></button>
                            <button>View Inventory</button>
                        </div>
                    </div>
                </Fade>
                <div style={{backgroundImage: 'url(/images/customModal-x/model-x-range.jpg)'}} className={classes['structure-right']}>
                    <div className={classes['structure-right-units']}>
                        <div className={classes['structure-right-unit']}>
                            <h1>92 ft³</h1>
                            <p>Up to 92 ft³ of storage</p>
                        </div>
                        <div className={classes['structure-right-unit']}>
                            <h1>5,000 lbs</h1>
                            <p>Recharge up to 200 miles in 15 minutes at Supercharger locations</p>
                        </div>
                        <div className={classes['structure-right-unit']}>
                            <h1>40,000+</h1>
                            <p>Superchargers placed along popular routes</p>
                        </div>
                    </div>
                </div>
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
                            <button><NavLink to='/Model X/customOrder'>Order Now</NavLink></button>
                            <button>Find My Route</button>
                        </div>
                    </div>
                </Fade>
                <div className={classes['structure-right']}>
                    <img src="/images/model-s-structure.png"/>
                </div>
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
                                <NavLink to='/Model X/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model X.</p>
                    </div>
                </div>
            </Fade>

            <div className={classes.description}>
                <div style={{backgroundImage: 'url(/images/customModal-x/model-x-front.jpg)'}} className={classes['description-left']}></div>

                <Fade bottom>
                    <div className={classes['description-right']}>
                        <div className={classes['description-right-heading']}>
                            <h1>Model S Specs</h1>
                        </div>

                        <div className={classes['description-right-btn']}>
                            <button className={ two === 0 ? classes.active : ''} onClick={removeOne}>Model X Plaid</button>
                            <button className={ two === 1 ? classes.active : ''} onClick={addOne}>Model X</button>
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
                                <NavLink to='/Model X/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <img src="/images/customModal-x/model-x-side.jpg"/>
                    </div>
                </div>
                </Fade>
        </section> 
    </>
  )
}

export default ModelxCard
