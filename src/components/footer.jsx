import React from 'react';
import Image from 'next/image'
import styles from '../styles/footer.module.css'
export default function Footer() {
  return (
    <>
   
 <section id='contact' className={`${styles.footCont}  bg-dark d-flex col   newNav`} >
  <div className='   col-xl-5 col-md-5 col-sm-5'>
      <div className='d-flex'>
          <div className={`${styles.divLogo} m-2`} >
                <Image className={styles.navLogo} alt='logo' src='logo.svg' width={50} height={50} />

           </div>

           <div className={styles.divNavText}>
                <h1 className={`${styles.navH1} container-sm fs-6 m-2 text-sm text-start`}>HMPS Keperawatan Anestesiologi</h1>
                <span className={`${styles.navP} fs-5 text-gray `}>Universitas Muhammaddiyah Purwokerto</span>
            </div>
      </div>
   
    <div className={`w-75 text-white  ms-4 col`}>
        <p className={`${styles.pFootDiv}`}>
            We need Your Aspiration and ideas 
        to make ourselves better in the future.
        </p>
    </div>

  </div>

  <div className={`${styles.conCont} d-flex `}>
    <div className={` ${styles.pContact} text-white mt-3 w-30 col text-sm`}>
      <h6 className='ps-3'>Contact</h6>
      <ul>
        <li>Email    : hmpskump@gmail.com</li>
        <li>Number   : +6287832637839</li>
      </ul>

    </div>
      <div className={` ${styles.pAddr} text-white mt-3 ms-5 w-30 col  text-sm`}>
        <h6 className='ps-3'>Address</h6>
        <ul>
          <li>Jl.namaJalan, Purwokerto.</li>
          
        </ul>

      </div>

  

  </div>

  {/* <div className=' text-white mt-3 ms-5'>
    <h6 className='ps-3'>Pengelola</h6>
    <ul>
      <li>Departement kominfo</li>
      <li>Departement litbang</li>
      
    </ul>

  </div> */}
   
   
  
   
 </section>
 </>

  )
}
