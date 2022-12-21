import React from 'react'
import classes from './Shop.module.css'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom';
import shopData, {wear } from './ShopD';
import {BiArrowBack} from 'react-icons/bi'
import {GrLinkNext} from 'react-icons/gr'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ShopSlide from './ShopSlide/ShopSlide';

const SamplePrevArrow = (props) => {
  const {onClick} = props
  return (
    <div onClick={onClick} className = {classes.prev}>
      <button>
        <BiArrowBack/>
      </button>
    </div>
  )
}

const SampleNextArrow = (props) => {
  const {onClick} = props
  return (
    <div onClick={onClick} className = {classes.next}>
      <button>
        <GrLinkNext/>
      </button>
    </div>
  )
}

const ShopCard = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <section className={classes.shop}>
        <header style={{backgroundImage: 'url(/images/shop/shop-head.png)'}} >
          <div className={classes['header-text']}>
            <div className={classes['header-text-main']}>
              <h1>Wall Connector</h1>
              <h3>The most convenient way to charge at home</h3>
              <button>Shop Now</button>
            </div>
          </div>
        </header>

        <div className={classes['shop-slide']}>
          <h1>Best Sellers</h1>
          <Slider {...settings}>
            {
              shopData.map((item) => {
                return <ShopSlide item = {item}/>                
              })
            }
          </Slider>
        </div>

        <div className={classes.acc}>
          <div style={ window.innerWidth <= 640 ? {backgroundImage: 'url(images/shop/model-s-acc-mobile.avif)'} : {backgroundImage: 'url(images/shop/model-s-acc.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Model S Accessories</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.acc}>
          <div style={ window.innerWidth <= 640 ? {backgroundImage: 'url(images/shop/model-3-acc-mobile.avif)'} : {backgroundImage: 'url(images/shop/model-3-acc.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Model 3 Accessories</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.acc}>
          <div style={ window.innerWidth <= 640 ? {backgroundImage: 'url(images/shop/model-x-acc-mobile.avif)'} : {backgroundImage: 'url(images/shop/model-x-acc.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Model X Accessories</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.acc}>
          <div style={ window.innerWidth <= 640 ? {backgroundImage: 'url(images/shop/model-y-acc-mobile.avif)'} : {backgroundImage: 'url(images/shop/model-y-acc.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Model Y Accessories</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.acc}>
          <div style={{backgroundImage: 'url(images/shop/Charging_web.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Charging</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.wear}>
          <div style = {{backgroundImage: 'url(/images/shop/Men_web.avif)'}} className={classes['wear-main']}>
            <div className={classes['wear-text']}>
              <h1>Men's wear Apparel</h1>
              <button>Shop Now</button>
            </div>
          </div>
          <div style = {{backgroundImage: 'url(/images/shop/Women_web.avif)'}} className={classes['wear-main']}>
            <div className={classes['wear-text']}>
              <h1>Women's wear Apparel</h1>
              <button>Shop Now</button>
            </div>
          </div>
          <div style = {{backgroundImage: 'url(/images/shop/Kids_web.avif)'}} className={classes['wear-main']}>
            <div className={classes['wear-text']}>
              <h1>Kid's wear Apparel</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div className={classes.acc}>
          <div style={ window.innerWidth <= 640 ? {backgroundImage: 'url(images/shop/bag-mobile.avif)'} : {backgroundImage: 'url(images/shop/bag.avif)'}} className={classes['acc-item']}>
            <div className={classes['acc-item-text']}>
              <h1>Life Style</h1>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default ShopCard
