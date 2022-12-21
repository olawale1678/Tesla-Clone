import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import UniversalLogo from '../UniversalLogo/UniversalLogo'
import classes from './NavBar.module.css'
import {FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [one, setOne] = useState(0)
    const [showIt, setShowIt] = useState(false)

    const preve = (e) => {
        e.preventDefault()
    }

    const OnShow = () => {
        if (window.innerWidth <= 1200) {
            setShowIt(true)
        }
    }

    const OnHide = () => {
        if (window.innerWidth <= 1200) {
            setShowIt(false)
        }
    }

    window.addEventListener('scroll', () => {
        setOne(window.scrollY.toFixed(0))
    })

    return (
        <>
            <nav className={one > 20 ? classes.secondNav : ''}>
                <div className={classes.subNav}>
                    <UniversalLogo/>

                    <div className={ showIt ? (classes['navLinks-left'], classes['show']) : classes['navLinks-left']}>
                        <div onClick={OnHide} className={classes.cancle}><FaTimes/></div>
                        <ul>
                            <li><NavLink to='/models'>Modal S</NavLink></li>
                            <li><NavLink to='/model3'>Modal 3</NavLink></li>
                            <li><NavLink to='/modelx'>Modal X</NavLink></li>
                            <li><NavLink to='/modely'>Modal Y</NavLink></li>
                            <li><NavLink to='/solar-roof'>Solar Roof</NavLink></li>
                            <li><NavLink to='/solar-panel'>Solar Panel</NavLink></li>
                        </ul>
                    </div>

                    <div className={classes['navLinks-right']}>
                        <ul>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><a href="#">Account</a></li>
                            <li onClick={OnShow}><a onClick={preve} href="#">Menu</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
