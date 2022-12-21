import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import UniversalLogo from '../../UniversalLogo/UniversalLogo'
import classes from './ShopNav.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoCartOutline} from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'

const ShopNav = () => {
    const [one, setOne] = useState(0)
    const [showIt, setShowIt] = useState(false)

    window.addEventListener('scroll', () => {
        setOne(window.scrollY.toFixed(0))
    })

    const OnShow = () => {
        if (window.innerWidth <= 1200) {
            setShowIt(true)
        }
    }
    
    const preve = (e) => {
        e.preventDefault()
    }

    const OnHide = () => {
        if (window.innerWidth <= 1200) {
            setShowIt(false)
        }
    }

    return (
        <>
            <nav className={one > 20 ? classes.secondNav : ''}>
                <div className={classes.subNav}>
                    <UniversalLogo/>

                    <div className={ showIt ? (classes['navLinks-left'], classes['show']) : classes['navLinks-left']}>
                        <div onClick={OnHide} className={classes.cancle}><FaTimes/></div>
                        <ul>
                            <li><NavLink style={one > 20 ? {color: 'black'} : {}} to='/models'>Charging</NavLink></li>
                            <li><NavLink style={one > 20 ? {color: 'black'} : {}} to='/model3'>Vehicle Accessories</NavLink></li>
                            <li><NavLink style={one > 20 ? {color: 'black'} : {}} to='/modelx'>Apparel</NavLink></li>
                            <li><NavLink style={one > 20 ? {color: 'black'} : {}} to='/modely'>Life Style</NavLink></li>
                        </ul>
                    </div>

                    <div className={classes['navLinks-right']}>
                        <ul>
                            <li><NavLink style={one > 20 ? {color: 'black'} : {}} to='/shop'><AiOutlineSearch/></NavLink></li>
                            <li><a style={one > 20 ? {color: 'black'} : {}} href="#"><IoCartOutline/></a></li>
                            <li onClick={OnShow}><a style={one > 20 ? {color: 'black'} : {}} onClick={preve} href="#">Menu</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ShopNav
