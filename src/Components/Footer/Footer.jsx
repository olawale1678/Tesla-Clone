import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <>
        <div className={classes.footer}>
            <div className={classes['footer-links']}>
                <a href='#' className={classes['footer-link']}>Tesla © 2022</a>
                <a href='#' className={classes['footer-link']}>Privacy & Legal</a>
                <a href='#' className={classes['footer-link']}>Vehicle Recalls</a>
                <a href='#' className={classes['footer-link']}>Contact</a>
                <a href='#' className={classes['footer-link']}>Careers</a>
                <a href='#' className={classes['footer-link']}>News</a>
                <a href='#' className={classes['footer-link']}>Engage</a>
                <a href='#' className={classes['footer-link']}>Locations</a>
            </div>
        </div>
    </>
  )
}

export default Footer
