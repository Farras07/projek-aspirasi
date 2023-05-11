import React from 'react';
import Image from 'next/image'
import styles from '../styles/jumbotron.module.css'
export default function Jumbotron() {
  return (
    <>
 <div className={`${styles.jumDiv} w-100  h-100  mx-100 p-2 m-auto d-flex justify-content-center flex-column text-center container p-5 pt-5 jumbotron mt-5 newNav`} >
    <h1 className={styles.titleText} >Suara Mahasiswa Prodi Kep. Anestesi</h1>
    <p className={`${styles.subTitle} fw-bolder`} >Aspire Your Ideas And Suggestion</p>
    <div className='container-fluid'>
    <Image alt='logo' src='2.svg' width={70} height={70} />
    <Image alt='logo' src='1.svg' width={70} height={70} />
    <Image className='mb-3' alt='logo' src='3.svg' width={80} height={80} />    
    <button className={`${styles.btnJum} w-25 h-25 d-block m-auto bg-dark text-light`}>START</button>

    </div>
   
 </div>
 <style jsx>{   `
 @media (min-width: 576px) { 

  }
 @include media-breakpoint-up(sm) {
    .newNaV {
background-color: black;     
    
    }
}
`}</style>
 </>

  )
}
