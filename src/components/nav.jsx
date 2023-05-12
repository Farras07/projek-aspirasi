import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/nav.module.css'
import styles2 from '../styles/navForm.module.css'
import Link from 'next/link'

export default function Nav(props) {
  const [ham, setHam] = useState(false)
  console.log(props.page)

  return (
  <nav className={`${props.page === 'home' ? styles.navBar : styles.navBarwhite}  d-flex p-2 `}>
    <div className='m-2' >
    <Image className={styles.navLogo} alt='logo' src='logo.svg' width={50} height={50} />

    </div>
    <div className={`${styles.divNavText} col-xl-5 col-md-5 `}>
    <h1 className={`${styles.navH1} container-sm fs-6 m-2 text-sm text-start `}>HMPS Keperawatan Anestesiologi</h1>
    <span className={`${styles.navP} fs-5 `}>Universitas Muhammaddiyah Purwokerto</span>
    </div>
    <ul className={`${styles.ulNav} ${props.page === 'home' ? '' : styles.ulNavWhite} col-xl-5  col-md-5 d-flex ${ ham ? styles.show : ''}  `}>
      <li className=' col-xl-5  pt-4 d-inline'><Link href="/">Home</Link></li>
      <li className=' col-xl-5  pt-4 d-inline'><Link href="/form">About</Link></li>
      <li className=' col-xl-5  pt-4 d-inline'><Link href="/">Contact</Link></li>
    </ul>
    <div onClick={()=> setHam(!ham)} className={`${ styles.hamNav}    d-flex flex-column `}>
      <span className={`${ styles.an11 } ${ props.page === 'home' ? styles.bgWhite :  styles.bgBlack}   w-100 m-1 p-0 ${ ham ? styles.an1 : ''} `}></span>
      <span className={`${ styles.an22 } ${ props.page === 'home' ?  styles.bgWhite : styles.bgBlack} w-100 m-1 p-0 ${ ham ? styles.an2 : ''}`}></span>
      <span className={`${ styles.an33 } ${ props.page === 'home' ? styles.bgWhite : styles.bgBlack }  w-100 m-1 p-0 ${ ham ? styles.an3 : ''}`}></span>
    </div>
    
  </nav>
  )
}
