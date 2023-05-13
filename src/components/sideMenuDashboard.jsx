import React from 'react'
import Image from 'next/image'
import styles from '../styles/sideMenu.module.css'
export default function sideMenuDashboard() {
  return (
    <aside className={`${styles.container}`}>
        <ul className={`${styles.ul} d-flex flex-column justify-content-evenly`}>
            <li><a href="#" className={`${styles.linkMenu} d-flex align-items-center`}><Image className={styles.iconButton} alt='logo' src='dashboardHome.svg' width={23} height={23}/><span>Dashboard</span></a></li>
            <li><a href="#" className={`${styles.linkMenu} d-flex align-items-center`}><span>Responses</span></a></li>
            <li><a href="#" className={`${styles.linkMenu} d-flex align-items-center`}><span>Pinned Responses</span></a></li>
        </ul>
    </aside>
  )
}
