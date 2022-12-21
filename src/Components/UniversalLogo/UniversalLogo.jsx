import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './UniversalLogo.module.css'

const UniversalLogo = () => {
  return (
    <>
        <NavLink to='/'>
            <div className={classes.navIcon}>
                <img className={classes.icon} src="/images/logo.svg" />
            </div>
        </NavLink>
    </>
  )
}

export default UniversalLogo
