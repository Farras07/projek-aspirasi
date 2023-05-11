import React from 'react';
import Image from 'next/image'
import styles from '../styles/why.module.css'
export default function Why() {
  return (
    <>
     <h2 className='text-center mt-5'>Why Aspiring Your Ideas?</h2>
 <div className={`${styles.whyCont} w-100  h-100  mx-100 p-2 m-auto d-flex justify-content-center  text-center container   jumbotron  newNav container-fluid mt-5 mb-5 col`} >
  
    <div className={`${styles.whyDiv} h3 w-40 ms-auto col`}>
      <Image className={`${styles.whyImage}`} alt='image' src ='send.svg' width={320} height={320} />
    </div>
    <div className={`${styles.whyDiv} h1 w-60 text-start ms-auto col`}>
      <p className={`${styles.whyP} h1`}>
         We need Your Aspiration and ideas 
   to make ourselves better in the future.
      </p>
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
