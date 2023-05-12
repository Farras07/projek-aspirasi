import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

export default function NavForm({styles}) {
  const [ham,setHamChecked] = useState(false)  
  return (
    <nav className={`${styles.navContainer} d-flex`}>
      <section className={`${styles.logoSection} d-flex`}>
        <div className={styles.logoImage}>
          <Image src="navform/logo.svg" alt="logo" width={70} height={70} className={styles.image}/>
        </div>
        <div className={`${styles.logoDesc}`}>
          <h1 className='fw-bold'>HMPS Keperawatan Anestesiologi</h1>
          <p className='fw-bold text-secondary'>Universitas Muhammaddiyah Purwokerto</p>
        </div>
      </section>
      <NavMenu 
        styles={styles}
        ham ={ham}/>
        <div className={styles.hamburgerMenu} onClick={() =>{
          (!ham ? setHamChecked(true) : setHamChecked(false))
        }}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
    </nav>
  )
}
export function NavMenu({styles,ham}){
  return(
    <section className={`${styles.menuContainer} ${!ham ? styles.animate : ``} `} >
      <article className={`${styles.menuItems}`}>
        <div className={`${styles.navMenu}`}>
        <Link href="/">Home</Link>
        </div>
        <div className={`${styles.navMenu}`}>
        <Link href="/">About</Link>
        </div>
        <div className={`${styles.navMenu}`}>
        <Link href="/">Contact</Link>
        </div>
      </article>
    </section>    
  )
}
