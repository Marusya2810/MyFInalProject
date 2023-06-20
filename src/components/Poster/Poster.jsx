import React from 'react'
import styles from "../../styles/Home.module.css"
import BG from "../../images/computer.png"


const Poster = () => (
    <section className={styles.home}>
        <div className={styles.title}> Sale 20%</div>
        <div className={styles.product}>
        <div className={styles.text}>
        <div className={styles.subtitle}>BestSeller of 2023</div>
        <h1 className={styles.head}>DELL</h1>
        <button className={styles.button}>Buy now</button>
        </div>
        <div className={styles.image}>
        <img src={BG} alt="#" />
        </div>
        </div>
    </section>
);

export default Poster