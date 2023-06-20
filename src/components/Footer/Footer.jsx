import React from 'react'
import styles from "../../styles/Footer.module.css"
import { Link } from 'react-router-dom'
import {ROUTES } from "../../utils/routes"
import LOGO from "../../images/logo.jpg"



const Footer = () => {
  return (
    
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="#" />
        </Link>
      </div>
      <div className={styles.right}>
      Hassle-free shopping
        
        
      </div>

      <div className={styles.socials}>
      <a href="https://instagram.com" target='blank' rel = "noreferrer">
      <svg className='icon'>
            <use xlinkHref={`{${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
      </a>

      <a href="https://facebook.com" target='blank' rel = "noreferrer">
      <svg className='icon'>
            <use xlinkHref={`{${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
      </a>


      <a href="https://youtube.com" target='blank' rel = "noreferrer">
      <svg className='icon'>
            <use xlinkHref={`{${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
      </a>

      </div>
    </section>


    )
}

export default Footer