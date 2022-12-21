import React, { useEffect, useState } from 'react'
import UniversalLogo from '../UniversalLogo/UniversalLogo'
import classes from './CustomOrder.module.css'
import {SlGlobe} from 'react-icons/sl'
import {RiErrorWarningFill} from 'react-icons/ri'
import { paints } from './CustomOrderD'
import {IoIosArrowBack} from 'react-icons/io'
import Fade from 'react-reveal/Fade';

const CustomOrderCard = ({reformItem}) => {
    
    const [one, setOne] = useState(0)
    const [switcher, setSwitcher] = useState(true)
    const [rim, setRim] = useState(true)
    const localValue = localStorage.getItem('carColor')
    const localWheelValue = localStorage.getItem('wheel')
    const [localInt, setLocalInt] = useState(true)
    const [toxicity, setToxicity] = useState(true)
    const [recordLabel, setRecordLabel] = useState(true)

    useEffect(() => {
        localStorage.setItem('carColor', '0')
        localStorage.setItem('wheel', '0')
    }, [])
    
    const onSwitcherChangeOne = () => {
        setSwitcher(false)
    }
    
    const onSwitcherChangeTwo = () => {
        setSwitcher(true)
    }
    
    useEffect(() => {
    }, [])
    
    const onButtonClickOne = () => {
        setOne(1)
        localStorage.setItem('carColor', '0')
        toxicity === false && reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
        toxicity === true && reformItem.idParams === 'Model S' && reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
        toxicity === true && reformItem.idParams === 'Model X' && reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
        toxicity === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && reformItem.carArray.splice(1, 4, reformItem.uberCarArrayWhite[0], reformItem.uberCarArrayWhite[1], reformItem.uberCarArrayWhite[2], reformItem.uberCarArrayWhite[3])
        toxicity === 0 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayWhite[0], reformItem.sportWheelCarArrayWhite[1], reformItem.sportWheelCarArrayWhite[2], reformItem.sportWheelCarArrayWhite[3])
        toxicity === 1 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayWhite[0], reformItem.sportWheelCarArrayWhite[1], reformItem.sportWheelCarArrayWhite[2], reformItem.sportWheelCarArrayWhite[3])
    }
    
    const onButtonClickTwo = () => {
        setOne(1)
        localStorage.setItem('carColor', '1')
        toxicity === false && reformItem.carArray.splice(1, 4, reformItem.carArraySilver[0], reformItem.carArraySilver[1], reformItem.carArraySilver[2], reformItem.carArraySilver[3])
        reformItem.idParams === 'Model S' && toxicity === true && reformItem.carArray.splice(1, 4, reformItem.carArraySilver[0], reformItem.carArraySilver[1], reformItem.carArraySilver[2], reformItem.carArraySilver[3])
        reformItem.idParams === 'Model X' && toxicity === true && reformItem.carArray.splice(1, 4, reformItem.carArraySilver[0], reformItem.carArraySilver[1], reformItem.carArraySilver[2], reformItem.carArraySilver[3])
        toxicity === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && reformItem.carArray.splice(1, 4, reformItem.uberCarArraySilver[0], reformItem.uberCarArraySilver[1], reformItem.uberCarArraySilver[2], reformItem.uberCarArraySilver[3])
        toxicity === 0 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArraySilver[0], reformItem.sportWheelCarArraySilver[1], reformItem.sportWheelCarArraySilver[2], reformItem.sportWheelCarArraySilver[3])
        toxicity === 1 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArraySilver[0], reformItem.sportWheelCarArraySilver[1], reformItem.sportWheelCarArraySilver[2], reformItem.sportWheelCarArraySilver[3])
    }    
    
    const onButtonClickThree = () => {
        setOne(1)
        localStorage.setItem('carColor', '2')
        toxicity === false && reformItem.carArray.splice(1, 4, reformItem.carArrayBlue[0], reformItem.carArrayBlue[1], reformItem.carArrayBlue[2], reformItem.carArrayBlue[3])
        toxicity === true && reformItem.idParams === 'Model S' && reformItem.carArray.splice(1, 4, reformItem.carArrayBlue[0], reformItem.carArrayBlue[1], reformItem.carArrayBlue[2], reformItem.carArrayBlue[3])
        toxicity === true && reformItem.idParams === 'Model X' && reformItem.carArray.splice(1, 4, reformItem.carArrayBlue[0], reformItem.carArrayBlue[1], reformItem.carArrayBlue[2], reformItem.carArrayBlue[3])
        toxicity === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && reformItem.carArray.splice(1, 4, reformItem.uberCarArrayBlue[0], reformItem.uberCarArrayBlue[1], reformItem.uberCarArrayBlue[2], reformItem.uberCarArrayBlue[3])
        toxicity === 1 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayBlue[0], reformItem.sportWheelCarArrayBlue[1], reformItem.sportWheelCarArrayBlue[2], reformItem.sportWheelCarArrayBlue[3])
    }
    
    const onButtonClickFour = () => {
        setOne(1)
        localStorage.setItem('carColor', '3')
        toxicity === false && reformItem.carArray.splice(1, 4, reformItem.carArrayBlack[0], reformItem.carArrayBlack[1], reformItem.carArrayBlack[2], reformItem.carArrayBlack[3])
        toxicity === true && reformItem.idParams === 'Model S' && reformItem.carArray.splice(1, 4, reformItem.carArrayBlack[0], reformItem.carArrayBlack[1], reformItem.carArrayBlack[2], reformItem.carArrayBlack[3])
        toxicity === true && reformItem.idParams === 'Model X' && reformItem.carArray.splice(1, 4, reformItem.carArrayBlack[0], reformItem.carArrayBlack[1], reformItem.carArrayBlack[2], reformItem.carArrayBlack[3])
        toxicity === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && reformItem.carArray.splice(1, 4, reformItem.uberCarArrayBlack[0], reformItem.uberCarArrayBlack[1], reformItem.uberCarArrayBlack[2], reformItem.uberCarArrayBlack[3])
        toxicity === 1 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayBlack[0], reformItem.sportWheelCarArrayBlack[1], reformItem.sportWheelCarArrayBlack[2], reformItem.sportWheelCarArrayBlack[3])
    }
    
    const onButtonClickFive = () => {
        setOne(1)
        localStorage.setItem('carColor', '4')
        toxicity === false && reformItem.carArray.splice(1, 4, reformItem.carArrayRed[0], reformItem.carArrayRed[1], reformItem.carArrayRed[2], reformItem.carArrayRed[3])
        toxicity === true && reformItem.idParams === 'Model S' && reformItem.carArray.splice(1, 4, reformItem.carArrayRed[0], reformItem.carArrayRed[1], reformItem.carArrayRed[2], reformItem.carArrayRed[3])
        toxicity === true && reformItem.idParams === 'Model X' && reformItem.carArray.splice(1, 4, reformItem.carArrayRed[0], reformItem.carArrayRed[1], reformItem.carArrayRed[2], reformItem.carArrayRed[3])
        toxicity === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && reformItem.carArray.splice(1, 4, reformItem.uberCarArrayRed[0], reformItem.uberCarArrayRed[1], reformItem.uberCarArrayRed[2], reformItem.uberCarArrayRed[3])
        toxicity === 1 && reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayRed[0], reformItem.sportWheelCarArrayRed[1], reformItem.sportWheelCarArrayRed[2], reformItem.sportWheelCarArrayRed[3])
    }
 
    const onRimChangeOne = () => {
        setRim(false)
        setRecordLabel(false)
        setToxicity(false)
        localStorage.setItem('wheel', '0')
        reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
    }
    
    const onRimChangeTwo = () => {
        setRim(true)
        setRecordLabel(true)
        setToxicity(true)
        localStorage.setItem('wheel', '0')
        reformItem.idParams !== 'Model S' &&  reformItem.idParams !== 'Model X' ? reformItem.carArray.splice(1, 4, reformItem.uberCarArrayWhite[0], reformItem.uberCarArrayWhite[1], reformItem.uberCarArrayWhite[2], reformItem.uberCarArrayWhite[3]) : 
        reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
    }
    
    const reformed = paints.find((item) => {
        return item.id === +localValue
    })

    const length = reformItem.carArray.length;
    
    const increment = () => {
        one === length - 1 ? setOne(0) : setOne(prev => prev + 1)
    }
    
    const decrement = () => {
        one === 0 ? setOne(length - 1) : setOne(prev => prev - 1)
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            increment()
        }, 5000);
        
        return () => {
            clearTimeout(timeOutId)
        }
    }, [one])
    
    const restructure = reformItem.carArray.find((item, index) => {
        return index === one
    })
    
    const wheelActiveOne = () => {
        localStorage.setItem('wheel', '0')
        localStorage.setItem('carColor', '0')
        setRecordLabel(false)
        setToxicity(false)
        reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
    }
    
    const wheelActiveTwo = () => {
        localStorage.setItem('wheel', '1')
        localStorage.setItem('carColor', '0')
        setRecordLabel(1)
        setToxicity(1)
        reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayWhite[0], reformItem.sportWheelCarArrayWhite[1], reformItem.sportWheelCarArrayWhite[2], reformItem.sportWheelCarArrayWhite[3])
    }
    
    const wheelActiveThree = () => {
        localStorage.setItem('wheel', '0')
        localStorage.setItem('carColor', '0')
        setRecordLabel(true)
        setToxicity(true)
        reformItem.carArray.splice(1, 4, reformItem.carArrayWhite[0], reformItem.carArrayWhite[1], reformItem.carArrayWhite[2], reformItem.carArrayWhite[3])
    }
    
    const wheelActiveFour = () => {
        localStorage.setItem('wheel', '1')
        localStorage.setItem('carColor', '0')
        setRecordLabel(0)
        setToxicity(1)
        reformItem.carArray.splice(1, 4, reformItem.sportWheelCarArrayWhite[0], reformItem.sportWheelCarArrayWhite[1], reformItem.sportWheelCarArrayWhite[2], reformItem.sportWheelCarArrayWhite[3])
    }
    useEffect(() => {
        toxicity === false && localStorage.setItem('carColor', '0')
    }, [toxicity])    

    useEffect(() => {
        toxicity === true && localStorage.setItem('carColor', '0')
    }, [toxicity])

    useEffect(() => {
        toxicity === 1 && toxicity === true && localStorage.setItem('carColor', '0')
    }, [toxicity])

    useEffect(() => {
        toxicity === 1 && rim === false && localStorage.setItem('carColor', '0')
    }, [toxicity])

    const changeIntOne = () => {
        setLocalInt(true)
        reformItem.carArray.splice(0, 1, reformItem.intItemBlack)
        setOne(0)
    }
    
    const changeIntTwo = () => {
        setLocalInt(false)
        setOne(0)
        reformItem.carArray.splice(0, 1, reformItem.intItemWhite)
    }
    
    const changeIntThree = () => {
        setLocalInt(1)
        setOne(0)
        reformItem.carArray.splice(0, 1, reformItem.intItemCream)
    }

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
                        <div style={{backgroundImage: `url(${restructure})`}} className={classes['overview-left-img']}>
                        </div>
                        <div className={classes['overview-left-btn']}>
                            <button onClick={decrement} className={classes['overview-left-btn-decrement']}><IoIosArrowBack/></button>
                            <button onClick={increment} className={classes['overview-left-btn-increment']}><IoIosArrowBack/></button>
                        </div>
                    </div>
                </div>

                <div className={classes['overview-right']}>
                    <div>
                        <Fade bottom>
                            {
                                reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model Y' || reformItem.idParams !== 'Model X' && <div className={classes.notification}>
                                    <div className={classes['notification-icon']}>
                                        <RiErrorWarningFill/>
                                    </div>
                                    <div className={classes['notification-text']}>
                                        <p>Take delivery of a New Model 3 or {reformItem.idParams} in Dec 2022 for a $3,750 credit</p>
                                    </div>
                                </div>
                            }
                        </Fade>

                        
                        <section className={classes.upgrade}>
                            <Fade bottom>
                                <div className={classes['upgrade-text']}>
                                    <h1>{reformItem.idParams}</h1>
                                    <p>{reformItem.estDel}</p>
                                    <div className={classes.link}>
                                        <div className={classes['upgrade-icon']}>
                                            <RiErrorWarningFill/>
                                        </div>
                                        <a href="#">Enter Delivery ZIP Code</a>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className={classes['upgrade-btn']}>
                                    <button className={switcher === false ? classes.active : ''} onClick={onSwitcherChangeOne}>Purchase Price</button>
                                    <button className={switcher === true ? classes.active : ''} onClick={onSwitcherChangeTwo}>Potential Savings*</button>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className={classes['upgrade-units']}>
                                    <div className={classes['upgrade-unit']}>
                                        <div className={classes['upgrade-unit-top']}>
                                            <h1>
                                                { 
                                                    recordLabel === false && reformItem.mi || 
                                                    recordLabel === true && reformItem.allWheelDriveMi || 
                                                    recordLabel === 0 && reformItem.twoAllWheelDriveMi ||
                                                    recordLabel === 1 && reformItem.rearWheelDriveMi
                                                }
                                            </h1>

                                            <p>mi</p>
                                        </div>
                                        <div className={classes['upgrade-unit-bottom']}>
                                            <p>
                                                {
                                                    recordLabel === false && reformItem.rearWheelLabel || 
                                                    recordLabel === true && reformItem.rearWheelLabel || 
                                                    recordLabel === 0 && reformItem.rearWheelLabel ||
                                                    recordLabel === 1 && reformItem.allWheelLabel 
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className={classes['upgrade-unit']}>
                                        <div className={classes['upgrade-unit-top']}>
                                            <h1>
                                                { 
                                                    recordLabel === false && reformItem.mph || 
                                                    recordLabel === true && reformItem.allWheelDriveMph || 
                                                    recordLabel === 0 && reformItem.twoAllWheelDriveMph ||
                                                    recordLabel === 1 && reformItem.rearWheelDriveMph
                                                }
                                            </h1>

                                            <p>mph</p>
                                        </div>
                                        <div className={classes['upgrade-unit-bottom']}>
                                            <p>Top Speed</p>
                                        </div>
                                    </div>

                                    <div className={classes['upgrade-unit']}>
                                        <div className={classes['upgrade-unit-top']}>
                                            <h1>
                                                { 
                                                    recordLabel === false && reformItem.acceleration || 
                                                    recordLabel === true && reformItem.allWheelDriveAcceleration || 
                                                    recordLabel === 0 && reformItem.twoAllWheelDriveAcceleration ||
                                                    recordLabel === 1 && reformItem.rearWheelDriveAcceleration
                                                }
                                            </h1>
                                            <p>sec</p>
                                        </div>
                                        <div className={classes['upgrade-unit-bottom']}>
                                            <p>0-60 mph</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>   
                                <div className={classes['upgrade-price']}>
                                    <div className={classes['upgrade-price-top']}>
                                        <h4>{reformItem.wheelTypeOne}</h4>
                                        <button onClick={onRimChangeOne} className = {rim === false ? classes.active : ''}>
                                            <p>{reformItem.idParams} {reformItem.cartype}</p>
                                            <p>{switcher ? reformItem.potentialSavRearWheelDrive : reformItem.purchaseSavRearWheelDrive}</p>
                                        </button>
                                        {
                                            reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model Y' || reformItem.idParams !== 'Model X' && <p> <a href="#">Learn more</a> about Range and Performance</p>
                                        }
                                    </div>

                                    <div className={classes['upgrade-price-bottom']}>
                                        <h4>{reformItem.wheelTypeTwo}</h4>
                                        <button onClick={onRimChangeTwo}  className = {rim === true ? classes.active : ''}>
                                            <p>{reformItem.idParams} {reformItem.carper}</p>
                                            <p>{switcher ? reformItem.potentialSavAllWheelDrive : reformItem.purchaseSavAllWheelDrive}</p>
                                        </button>
                                        
                                        {
                                            reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model Y' || reformItem.idParams !== 'Model X' && <div className={classes.longrange}>
                                                <p>{reformItem.idParams} Long Range</p>
                                            </div>
                                        }

                                        {
                                            reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model Y' || reformItem.idParams !== 'Model X' && <div className={classes.available}>
                                                <p>Available in 2023</p>
                                            </div>
                                        }

                                        <div className={classes.desc}>
                                            <p><span>*</span> prices are shown without potential incentives or gas savings of $6,600. <a href="#">Learn More</a></p>
                                            <a href='#'>Feature Details</a>
                                        </div>
                                    </div>
                                    
                                    {
                                        rim === true && reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model Y' || reformItem.idParams !== 'Model X' && <div className={classes['preformance-upgrade']}>
                                            <h1>Performance Upgrade</h1>
                                            <p>Included</p>
                                            {reformItem.incrementSpeed && <li>{reformItem.incrementSpeed}</li>}
                                            <li>{reformItem.performanceUpgradeOne}</li>
                                            <li>{reformItem.performanceUpgradeTwo}</li>
                                            <li>{reformItem.performanceUpgradeThree}</li>
                                            <li>{reformItem.performanceUpgradeFour}</li>
                                        </div>
                                    }

                                    {
                                        reformItem.idParams === 'Model S' || reformItem.idParams === 'Model Y' || reformItem.idParams === 'Model X' && <div className={classes['preformance-upgrade']}>
                                            <h1>Performance Upgrade</h1>
                                            <p>Included</p>
                                            <li>{reformItem.performanceUpgradeOne}</li>
                                            <li>{reformItem.performanceUpgradeTwo}</li>
                                            <li>{reformItem.performanceUpgradeThree}</li>
                                            <li>{reformItem.performanceUpgradeFour}</li>
                                            <li>{reformItem.performanceUpgradeFive}</li>
                                            <li>{reformItem.performanceUpgradeSix}</li>
                                        </div>
                                    }
                                </div>
                            </Fade>
                            
                            {
                                window.innerWidth <= 1020 &&<div className={classes['overview-left']}>
                                    <div>
                                        <div style={{backgroundImage: `url(${restructure})`}} className={classes['overview-left-img']}>
                                        </div>
                                        <div className={classes['overview-left-btn']}>
                                            <button onClick={decrement} className={classes['overview-left-btn-decrement']}><IoIosArrowBack/></button>
                                            <button onClick={increment} className={classes['overview-left-btn-increment']}><IoIosArrowBack/></button>
                                        </div>
                                    </div>
                                </div>
                            }
                            
                            <Fade bottom>
                                <div className={classes['upgrade-paint']}>
                                    <h1>Paint</h1>
                                    <div className={classes['upgrade-paint-btn']}>
                                        <button onClick={onButtonClickOne} className = {+localValue === 0 ? classes.active : ''}>
                                            <img src='/images/paint/paint-1.png' />
                                        </button>
                                        <button onClick={onButtonClickTwo} className = {+localValue === 1 ? classes.active : ''}>
                                            <img src='/images/paint/paint-2.png' />
                                        </button>
                                        <button onClick={onButtonClickThree} className = {+localValue === 2 ? classes.active : ''}>
                                            <img src='/images/paint/paint-3.png' />
                                        </button>
                                        <button onClick={onButtonClickFour} className = {+localValue === 3 ? classes.active : ''}>
                                            <img src='/images/paint/paint-4.png' />
                                        </button>
                                        <button onClick={onButtonClickFive} className = {+localValue === 4 ? classes.active : ''}>
                                            <img src='/images/paint/paint-5.png' />
                                        </button>
                                    </div>
                                    <h4 className={classes['upgrade-paint-label']}>{reformed.label} <span>{reformed.type}</span></h4>
                                </div>
                            </Fade>
                                 
                            {
                                window.innerWidth <= 1020 &&<div className={classes['overview-left']}>
                                    <div>
                                        <div style={{backgroundImage: `url(${restructure})`}} className={classes['overview-left-img']}>
                                        </div>
                                        <div className={classes['overview-left-btn']}>
                                            <button onClick={decrement} className={classes['overview-left-btn-decrement']}><IoIosArrowBack/></button>
                                            <button onClick={increment} className={classes['overview-left-btn-increment']}><IoIosArrowBack/></button>
                                        </div>
                                    </div>
                                </div>
                            }
                            
                            <Fade bottom>
                                <div className={classes['upgrade-wheel']}>
                                    <h1>Wheels</h1>

                                    {
                                        rim === false && <div className={classes['upgrade-wheel-btn']}>
                                            <button className={+localWheelValue === 0 ? classes.active : ''} onClick={wheelActiveOne}><img src={reformItem.rim1}/></button>
                                            <button className={+localWheelValue === 1 ? classes.active : ''} onClick={wheelActiveTwo}><img src={reformItem.rim2}/></button>
                                        </div>
                                    }

                                    {
                                        rim === true && reformItem.idParams !== 'Model S' && reformItem.idParams !== 'Model X' && <div className={classes['upgrade-wheel-btn']}>
                                            <button className={classes.active}><img src={reformItem.rim3}/></button>
                                        </div>
                                    }

                                    {
                                        rim === true && reformItem.idParams === 'Model S' && <div className={classes['upgrade-wheel-btn']}>
                                            <button className={+localWheelValue === 0 ? classes.active : ''} onClick={wheelActiveThree}><img src={reformItem.rim1}/></button>
                                            <button className={+localWheelValue === 1 ? classes.active : ''} onClick={wheelActiveFour}><img src={reformItem.rim2}/></button>
                                        </div>
                                    }
                                    {
                                        rim === true && reformItem.idParams === 'Model X' && <div className={classes['upgrade-wheel-btn']}>
                                            <button className={+localWheelValue === 0 ? classes.active : ''} onClick={wheelActiveThree}><img src={reformItem.rim1}/></button>
                                            <button className={+localWheelValue === 1 ? classes.active : ''} onClick={wheelActiveFour}><img src={reformItem.rim2}/></button>
                                        </div>
                                    }

                                    <div className={classes['upgrade-wheel-label']}>
                                        {
                                            rim === false && <p> {+localWheelValue === 0 ? reformItem.aeroWheel : reformItem.sportWheel} <span>{+localWheelValue === 0 ? reformItem.aeroType : reformItem.sportWheelPrice}</span></p>
                                        }

                                        {
                                            rim === true && reformItem.idParams !== 'Model S' && <p>{reformItem.uberWheelLabel} <span>{reformItem.uberWheelLabelType}</span></p>
                                        }

                                        {
                                            rim === true && reformItem.idParams === 'Model S' && <p> {+localWheelValue === 0 ? reformItem.aeroWheel : reformItem.sportWheel} <span>{+localWheelValue === 0 ? reformItem.aeroType : reformItem.sportWheelPrice}</span></p>
                                        }
                                    </div>

                                    <div className={classes['upgrade-wheel-desc']}>
                                        {
                                            rim === false && <p>All-Season Tires</p>
                                        }

                                        {
                                            rim === true && <p>Summer Tires</p>
                                        }

                                        {
                                            reformItem.idParams !== 'Model S' || reformItem.idParams !== 'Model X' && <p>{+localWheelValue === 0 ? reformItem.aeroRange : reformItem.sportRange}</p>
                                        }

                                        
                                        {
                                            reformItem.idParams === 'Model S' || reformItem.idParams === 'Model X' && rim === false && <p>{+localWheelValue === 0 ? reformItem.aeroRange : reformItem.sportRange}</p>
                                        }

                                        {
                                            reformItem.idParams === 'Model S' || reformItem.idParams === 'Model X' && rim === true && <p>{+localWheelValue === 0 ? reformItem.oneAeroRange : reformItem.oneSportRange}</p>
                                        }
                                        {
                                            reformItem.idParams === 'Model X' && <p>
                                                Top Speed : 
                                                <span style={{marginLeft: '5px'}}>
                                                    {
                                                        recordLabel === false && reformItem.mph || 
                                                        recordLabel === true && reformItem.allWheelDriveMph || 
                                                        recordLabel === 0 && reformItem.twoAllWheelDriveMph ||
                                                        recordLabel === 1 && reformItem.rearWheelDriveMph
                                                    }  
                                                </span>
                                                mph
                                            </p>
                                        }
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </Fade>
                                 
                            {
                                window.innerWidth <= 1020 &&<div className={classes['overview-left']}>
                                    <div>
                                        <div style={{backgroundImage: `url(${restructure})`}} className={classes['overview-left-img']}>
                                        </div>
                                        <div className={classes['overview-left-btn']}>
                                            <button onClick={decrement} className={classes['overview-left-btn-decrement']}><IoIosArrowBack/></button>
                                            <button onClick={increment} className={classes['overview-left-btn-increment']}><IoIosArrowBack/></button>
                                        </div>
                                    </div>
                                </div>
                            }
                            
                            <Fade bottom>
                                <div className={classes['upgrade-int']}>
                                    <h1>Interior</h1>
                                    <div className={classes['upgrade-int-btn']}>
                                        <button onClick={changeIntOne} className={localInt === true ? classes.active : ''}> <img src="/images/int/intBlack.png" /></button>
                                        <button onClick={changeIntTwo} className={localInt === false ? classes.active : ''}> <img src="/images/int/intWhite.png" /></button>
                                        {
                                            reformItem.idParams === 'Model S' && <button onClick={changeIntThree} className={localInt === 1 ? classes.active : ''}>
                                                <img src="/images/int/intCream.png" />
                                            </button>
                                        }
                                        {
                                            reformItem.idParams === 'Model X' && <button onClick={changeIntThree} className={localInt === 1 ? classes.active : ''}>
                                                <img src="/images/int/intCream.png" />
                                            </button>
                                        }
                                    </div>
                                    
                                    <div className={classes['upgrade-int-label']}>
                                        {
                                            localInt === false && <p>{reformItem.intLabWhite}<span>{reformItem.intLabWhiteType}</span></p>
                                        }
                                        {
                                            localInt === true && <p>{reformItem.intLabBlack}<span>{reformItem.intLabBlackType}</span></p>
                                        }
                                        {
                                            localInt === 1 && <p>{reformItem.intLabCream}<span>{reformItem.intLabCreamType}</span></p>
                                        }
                                        <button>Feature Details</button>
                                    </div>
                                </div>
                            </Fade>

                        </section>
                        
                        <Fade bottom>
                            <section className={classes.autopilot}>
                                <div className={classes['autopilot-item']}>
                                    <h1>Enhanced Autopilot</h1>
                                    <p>{reformItem.autoPilot}</p>
                                    <ul>
                                        <li>Navigate on Autopilot</li>
                                        <li>Auto Lane Change</li>
                                        <li>Autopark</li>
                                        <li>Summon</li>
                                        <li>Smart Summon</li>
                                    </ul>

                                    <div className={classes['autopilot-item-btn']}>
                                        <button>Add</button><button>Feature Details</button>
                                    </div>
                                </div>

                                <div className={classes['autopilot-desc']}>
                                    <h1>Full Self-Driving Capability</h1>
                                    <p>{reformItem.drivingCapaPrice}</p>
                                    <ul>
                                        <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
                                        <li>Traffic Light and Stop Sign Control</li>
                                    </ul>
                                    <h5>Coming Soon</h5>
                                    <ul>
                                        <li>Autosteer on city streets</li>
                                    </ul>
                                    <p className={classes['autopilot-desc-para']}>
                                        The currently enabled features require active driver supervision and do not 
                                        make the vehicle autonomous. The activation and use of these features are 
                                        dependent on achieving reliability far in excess of human drivers as demonstrated 
                                        by billions of miles of experience, as well as regulatory approval, which may 
                                        take longer in some jurisdictions. As these self-driving features evolve, your car 
                                        will be continuously upgraded through over-the-air software updates.
                                    </p>

                                    <div className={classes['autopilot-desc-btn']}>
                                        <button>Add</button><button>Feature Details</button>
                                    </div>
                                </div>
                            </section>
                        </Fade>
                        
                        <Fade bottom>
                            <section className={classes.charging}>
                                <h1>Charging</h1>
                                
                                <div className={classes['charging-notification']}>
                                    <div className={classes['charging-notification-icon']}>
                                        <RiErrorWarningFill/>
                                    </div>
                                    <p>Home charging equipment is not included</p>
                                </div>

                                <div className={classes['charging-inputs']}>
                                    <div className={classes['charging-input']}>
                                        <div className={classes['charging-input-left']}>
                                            <input type="checkbox"/>
                                            <h4>Wall Connector</h4>
                                        </div>
                                        <div className={classes['charging-input-right']}>{reformItem.wallConnect}</div>
                                    </div>

                                    <div className={classes['charging-input']}>
                                        <div className={classes['charging-input-left']}>
                                            <input type="checkbox"/>
                                            <h4>Mobile Connector <span>Est. Shipment: Based on Vehicle Delivery</span></h4>
                                        </div>
                                        <div className={classes['charging-input-right']}>{reformItem.mobileConnect}</div>
                                    </div>
                                    
                                    <div className={classes['charging-inputs-btn']}>
                                        <button>Learn More</button>
                                    </div>
                                </div>

                            </section>
                        </Fade>
                        
                        <Fade bottom>
                            <section className={classes.order}>
                                <h1>Order Your {reformItem.idParams}</h1>
                                <h5>Est. Delivery: Dec 2022</h5>
                                <div className={classes['order-btn']}>
                                    <button>Continue to Payment</button>
                                </div>
                                <p>For quicker potential delivery,</p>
                                <a href="#">view available inventory.</a>
                            </section>
                        </Fade>
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}

export default CustomOrderCard
