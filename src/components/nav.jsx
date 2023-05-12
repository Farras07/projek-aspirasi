import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/nav.module.css'

export default function Nav() {
  const [ham, setHam] = useState(false)
  return (
  <nav className={`${styles.navBar} d-flex p-2`}>
    <div className='m-2' >
    <Image className={styles.navLogo} alt='logo' src='logo.svg' width={50} height={50} />

    </div>
    <div className={`${styles.divNavText} col-xl-5 col-md-5 `}>
    <h1 className={`${styles.navH1} container-sm fs-6 m-2 text-sm text-start text-dark`}>HMPS Keperawatan Anestesiologi</h1>
    <span className={`${styles.navP} fs-5 text-dark`}>Universitas Muhammaddiyah Purwokerto</span>
    </div>
    <ul className={`${styles.ulNav} col-xl-5  col-md-5 text-dark d-flex ${ !ham ? styles.show : ''}  `}>
      <li className=' col-xl-5 text-dark  pt-4 d-inline'><a>Home</a></li>
      <li className=' col-xl-5 text-dark  pt-4 d-inline'><a>About</a></li>
      <li className=' col-xl-5 text-dark  pt-4 d-inline'><a>Contact</a></li>
    </ul>
    <div onClick={()=> setHam(!ham)} className={`${styles.hamNav} text-white  d-flex flex-column `}>
      <span className={`${ styles.an11 } bg-white w-100 m-1 p-0 ${ !ham ? styles.an1 : ''} `}></span>
      <span className={`${ styles.an22 } bg-white w-100 m-1 p-0 ${ !ham ? styles.an2 : ''}`}></span>
      <span className={`${ styles.an33 } bg-white w-100 m-1 p-0 ${ !ham ? styles.an3 : ''}`}></span>
    </div>
    
  </nav>
  )
}
