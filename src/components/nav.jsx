import React from 'react'
import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'

export default function Nav(props) {

  const [ham, setHam] = useState(false)
  console.log(props.page)

 
  return (

    <nav className={`
    ${props.page === 'home' ? styles.navBar : ''} 
    ${props.page === 'form' ? styles.navBarWhite : ''}
    ${props.page === 'dashboard' ? styles.navBarDashboard : ''} d-flex`}>

      <div className={`${styles.logoContainer} `}>

        <Image className={styles.navLogo} alt='logo' src='/logo.svg' width={50} height={50} />

        <div className={`${styles.divNavText}`}>
          <h1 className={`${styles.navH1}`}>HMPS Keperawatan Anestesiologi</h1>
          <span className={`${styles.navP}`}>Universitas Muhammaddiyah Purwokerto</span>
        </div>

      </div>

      {(props.page === 'dashboard' ? <NavDashboard /> : <NavListMenu props={props} ham={ham} setHam={setHam} />)}

    </nav>

  )
}

function NavListMenu({ props, ham, setHam }) {

  return (

    <>

      <ul className={`${styles.ulNav} ${props.page === 'home' ? '' : styles.ulNavWhite} d-flex ${ham ? styles.show : ''}`}>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li className={`${props.page === 'home' ? '' : styles.ulHide}`}><Link href="#about" className={styles.link}>About</Link></li>
        <li><Link href="#contact" className={styles.link}>Contact</Link></li>
        <li className={`${props.page === 'home' ? '' : styles.ulHide}`}><Link href="/login" className={styles.link}>Login</Link></li>
      </ul>

      <div onClick={() => setHam(!ham)} className={`${styles.hamNav} d-flex flex-column`}>
        <span className={`${styles.an11} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an1 : ''} `}></span>
        <span className={`${styles.an22} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an2 : ''}`}></span>
        <span className={`${styles.an33} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an3 : ''}`}></span>
      </div>

    </>

  )
}

function NavDashboard() {

  const refCon = useRef(null)
  const refButton = useRef(null)
  const [isClicked, setIsClicked] = useState(true)
  const router = useRouter()

  async function logOutHandler(e) {

    e.preventDefault()
    cookie.remove('token')
    router.push('/')

  }

  const showLogoutButton = (a) => {

    setIsClicked(!isClicked)
    console.log(isClicked)

    if (!a) {
      refButton.current.style.display = 'none'
      refCon.current.style.backgroundColor = 'transparent'
      refCon.current.style.boxShadow = 'none'
    } else {
      refButton.current.style.display = 'flex'
      refCon.current.style.backgroundColor = 'rgb(255, 255, 255)'
      refCon.current.style.boxShadow = ''
    }

  }

  return (

    <div className={`${styles.profileSection} d-flex flex-column justify-content-between`}>

      <div ref={refCon} className={`${styles.profileContainer} d-flex flex-column`} onClick={() => showLogoutButton(isClicked)}>

        <div className={`${styles.profileSec} d-flex align-items-center justify-content-center`}>
          <div className="profileImage me-3">
            <Image className={styles.profileLogo} alt='logo' src='/profile.svg' width={30} height={30} />
          </div>
          <p>Administrator</p>
        </div>

        <div ref={refButton} className={`${styles.logoutContainer} text-light`}>
          <Link onClick={logOutHandler} href='/'>Logout</Link>
        </div>

      </div>

    </div>

  )
}
