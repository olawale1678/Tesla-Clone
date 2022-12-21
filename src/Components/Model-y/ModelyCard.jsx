import React, { useState } from 'react'
import classes from './Modely.module.css'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import {RiCameraLensFill} from 'react-icons/ri'
import { BsCloudSun } from 'react-icons/bs'
import spec from './ModelyD'

const ModelyCard = () => {

    const [one, setOne] = useState(0)
    
    const addOne = () => {
        setOne(1)
    }

    const removeOne = () => {
        setOne(0)
    }

    const secondRestructure = spec.find((item, index) => {
        return index === one
    })

  return (
    <>
        <section className={classes.modely}>
            <div className={classes.modelyMain}>
                <div style = {{backgroundImage: `url('/images/customModal-y/model-y-travel.jpg')`}} className={classes['modelyMain-header']}>
                    <div className={classes['modelyMain-header-text']}>
                        <h1>Model Y</h1>
                    </div>

                    <div className={classes['modelyMain-header-units']}>
                        <Fade bottom>
                            <div className={classes['modelyMain-header-unit']}>
                                <h1>333 mi</h1>
                                <p>Range (EPA est.)</p>
                            </div>
                            <div className={classes['modelyMain-header-unit']}>
                                <h1>2.5 s</h1>
                                <p>0-60 mph*</p>
                            </div>
                            <div className={classes['modelyMain-header-unit']}>
                                <h1>9.9 s</h1>
                                <p>1/4 Mile</p>
                            </div>
                            <div className={classes['modelyMain-header-unit']}>
                                <h1>1,020 hp</h1>
                                <p>Peak Power</p>
                            </div>

                            <div className={classes['modelyMain-header-units-btn']}>
                                <button><NavLink to='/Model Y/customOrder'>Order Now</NavLink></button>
                            </div>
                        </Fade>                   
                    </div>
                </div>
            </div>
            
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
                            <p>Model Y achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                        </div>

                        <div className={classes['structure-right-text-safty']}>
                            <h4>Top Safety Pick+</h4>
                            <p>Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                        </div>
                    </div>

                    <div className={classes['structure-right-btn']}>
                        <button><NavLink to='/Model Y/customOrder'>Order Now</NavLink></button>
                    </div>
                </div>
            </section>

            <Fade bottom>
                <div className={classes.about}>
                    <div className={classes['about-left']}>
                        <p>Utility</p>
                        <h1>A Place For Everything</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model Y/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model Y.</p>
                    </div>
                </div>
            </Fade>
            
            <section style={ window.innerWidth <= 775 ? {backgroundImage: 'url(/images/customModal-y/model-y-speed-mobile.jpg)'} : {backgroundImage: 'url(/images/customModal-y/model-y-speed.jpg)'}} className={classes.run}>  
                <Fade bottom>
                    <div className={classes['run-header-units']}>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1>2</h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 800 ? <p>Independent Motors</p> : <p>Independent motors digitally control torque to the front and rear wheels</p>
                                }
                            </div>
                        </div>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1>10 ms</h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 800 ? <p>0-60 mph*</p> : <p>Dual motors respond to changing conditions in as little as 10 milliseconds</p>
                                }
                            </div>
                        </div>
                        <div className={classes['run-header-unit']}>
                            <div className={classes['run-header-unit-top']}>
                                <h1><BsCloudSun/></h1>
                            </div>
                            <div className={classes['run-header-unit-bottom']}>
                                {
                                    window.innerWidth <= 800 ? <p>All Weather Control</p> : <p>Unparalleled traction and control, in all weather conditions</p>
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
                                <NavLink to='/Model Y/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.</p>
                    </div>
                </div>
            </Fade>
                
            <div className={classes.range}>
                <div className={classes['range-left']}>
                    <video autoPlay controls loop playsInline>
                        <source src='/videos/model-y/model-y-travel.mp4' type='video/mp4' />
                    </video>
                    
                    <div className={classes['range-left-units']}>
                        <div className={classes['range-left-unit']}>
                            <h1>330 mi</h1>
                            <p>Go anywhere with up to 330 miles of estimated range on a single charge</p>
                        </div>
                        <div className={classes['range-left-unit']}>
                            <h1>15 min</h1>
                            <p>Recharge up to 162 miles in 15 minutes at Supercharger locations</p>
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
                            <p>Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. <a href="#">Chat with a Tesla Advisor</a> to learn more about Model Y.</p>
                        </div>

                        <div className={classes['range-right-btn']}>
                            <button><NavLink to='/Model Y/customOrder'>Order Now</NavLink></button>
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
                                <NavLink to='/Model Y/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
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
                                <NavLink to='/Model Y/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <p>With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.</p>
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
                        <h1>Model S</h1>
                        <div className={classes['about-left-btn']}>
                            <button>
                                <NavLink to='/Model Y/customOrder'>Order Now</NavLink>
                            </button>
                            <button>
                                <NavLink>View Inventory</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={classes['about-right']}>
                        <img src="/images/customModal-y/model-y-side.jpg"/>
                    </div>
                </div>
            </Fade>
        </section>
    </>
  )
}

export default ModelyCard
