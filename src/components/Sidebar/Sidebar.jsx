import React from 'react'
import styles from "../../styles/Sidebar.module.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

 const SideBar = () => {
const { list } = useSelector (({ categories }) => categories); 

  return (
    <section className={styles.sideBar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({id, name}) => (
             <li key={id}>
             <NavLink 
             className={({isActive}) => 
             `${styles.link} ${isActive ? styles.active : ""}`}
             to={`/categories/${id}`}> {name} </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" terget="blank" className={styles.link} >HELP</a>
        <a href="/terms" terget="blank" className={styles.link} style={{textDecoration: "underline"}}>Conditions</a>

      </div>
    </section>
  )
}

export default SideBar
