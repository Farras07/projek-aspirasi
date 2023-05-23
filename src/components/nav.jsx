import React from 'react';
import { useState,useRef } from 'react';
import Image from 'next/image'
import styles from '../styles/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import cookie from 'js-cookie'


export default function Nav(props) {
  const [ham, setHam] = useState(false)
  
  console.log(props.page)

 
  return (
  <nav className={`${props.page === 'home' ? styles.navBar : styles.navBarwhite} 
  ${props.page === 'dashboard' ? styles.navBarDashboard : ''} d-flex p-2 `}>
    <div className='m-2' >
      <Image className={styles.navLogo} alt='logo' src='/logo.svg' width={50} height={50} />
    </div>
    <div className={`${styles.divNavText} col-xl-5 col-md-5 `}>
      <h1 className={`${styles.navH1} container-sm fs-6 m-2 text-sm text-start `}>HMPS Keperawatan Anestesiologi</h1>
      <span className={`${styles.navP} fs-5 `}>Universitas Muhammaddiyah Purwokerto</span>
    </div>
    {(props.page ==='dashboard'? <NavDashboard />: <NavListMenu props={props} ham={ham} setHam={setHam}/>)}
    
  </nav>
  )
}

function NavListMenu({props,ham, setHam}) {

  return(
    <>
    <ul className={`${styles.ulNav} ${props.page === 'home' ? '' : styles.ulNavWhite} col-xl-5  col-md-5 d-flex ${ ham ? styles.show : ''}`}>
      <li className=' col-xl-4  pt-4 d-inline'><Link href="/">Home</Link></li>
      <li className={` col-xl-4 ${ props.page === 'home' ? '' :  styles.ulHide}  pt-4 d-inline`}><Link href="#about">About</Link></li>
      <li className={` col-xl-4  pt-4 d-inline`}><Link href="#contact">Contact</Link></li>
      <li className={` col-xl-4  ${ props.page === 'home' ? '' :  styles.ulHide} pt-4 d-inline`}><Link href="/login">Login</Link></li>
    </ul>
    <div onClick={()=> setHam(!ham)} className={`${ styles.hamNav}    d-flex flex-column `}>
      <span className={`${ styles.an11 } ${ props.page === 'home' ? styles.bgWhite :  styles.bgBlack}   w-100 m-1 p-0 ${ ham ? styles.an1 : ''} `}></span>
      <span className={`${ styles.an22 } ${ props.page === 'home' ?  styles.bgWhite : styles.bgBlack} w-100 m-1 p-0 ${ ham ? styles.an2 : ''}`}></span>
      <span className={`${ styles.an33 } ${ props.page === 'home' ? styles.bgWhite : styles.bgBlack }  w-100 m-1 p-0 ${ ham ? styles.an3 : ''}`}></span>
    </div>
    </>
  )
}

function NavDashboard() {
  const refCon = useRef(null)
  const refButton = useRef(null)
  const [isClicked,setIsClicked] = useState(true)
  const router = useRouter()

  async function logOutHandler(e){
    e.preventDefault()


    cookie.remove('token')

    router.push('/')
}


  const showLogoutButton =(a)=>{
    setIsClicked(!isClicked)
    console.log(isClicked)
    if(!a){
      refButton.current.style.display='none'
      refCon.current.style.backgroundColor = 'transparent'
      refCon.current.style.boxShadow= 'none'
    }
    else{
      refButton.current.style.display='flex'
      refCon.current.style.backgroundColor = 'rgb(223, 223, 223)'
      refCon.current.style.boxShadow= '0 2px 4px black'

    }
  }
  return(
    <div className={`${styles.profileSection} d-flex flex-column align-items-end w-75 justify-content-between`}>
      <div ref={refCon} className={`${styles.profileContainer} d-flex flex-column align-items-center justify-content-between`} onClick={()=>showLogoutButton(isClicked)}>
        <div className={`${styles.profileSec} d-flex align-items-center justify-content-between`}>
          <div className="profileImage me-3">
            <Image className={styles.profileLogo} alt='logo' src='/profile.svg' width={35} height={35}/> 
          </div>
          <div className="profileDesc pt-3">
            <p>Administrator</p>
          </div>
        </div>
        <div ref={refButton} className={`${styles.logoutContainer}`}>
          <Link onClick={logOutHandler} href='/'>Logout</Link>
        </div>
      </div>
    </div>
  )
}
