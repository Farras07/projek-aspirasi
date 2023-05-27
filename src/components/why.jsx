import React from 'react';
import Image from 'next/image'
import styles from '../styles/why.module.css'
export default function Why() {

  return (

    <>

      <div className={`${styles.container}`}>

        <h2 id="about" className='text-center'>Why Aspiring Your Ideas?</h2>

        <div className={`${styles.whyCont} d-flex justify-content-center align-items-center`} >

          <div className={`${styles.whyDiv} d-flex justify-content-center`}>
            <Image className={`${styles.whyImage}`} alt='image' src='send.svg' width={150} height={150} />
          </div>

          <div className={`${styles.whyDiv}`}>
            <p className={`${styles.whyP}`}>
              We need Your Aspiration and <br />
              ideas to make ourselves better in the future.
            </p>
          </div>

        </div>

      </div>

    </>

  )
}
