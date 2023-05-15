import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/sideMenu.module.css'
import Link from 'next/link'

export default function SideMenuDashboard({focus}) {
  const foc = focus
  return (
    <aside className={`${styles.container}`}>
        <ul className={`${styles.ul} d-flex flex-column justify-content-evenly`}>
            <li><Link href="/dashboard" className={`${styles.linkMenu} ${(foc===1 ? styles.linkMenuFocus1 : '')} d-flex align-items-center`}><Image className={styles.iconButton} alt='logo' src='/dashboardHome.svg' width={23} height={23}/><span>Dashboard</span></Link></li>
            <li><Link href="/dashboard/responsePage" className={`${styles.linkMenu} ${(foc===2 ? styles.linkMenuFocus2 : '')} d-flex align-items-center`} ><span>Responses</span></Link></li>
            <li><Link href="/dashboard/pinnedResponsePage" className={`${styles.linkMenu} ${(foc===3 ? styles.linkMenuFocus3 : '')} d-flex align-items-center`}><span>Pinned Responses</span></Link></li>
        </ul>
    </aside>
  )
}
