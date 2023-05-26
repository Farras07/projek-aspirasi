import React from 'react';
import Image from 'next/image'
import styles from '../styles/footer.module.css'

export default function Footer() {

  return (

    <>

      <section id='contact' className={`${styles.footCont}  bg-dark d-flex`}>

        <div className={`${styles.rightCont} d-flex flex-column`}>

          <div className={`${styles.logoContainer}`}>

            <Image className={styles.navLogo} alt='logo' src='/logo.svg' width={50} height={50} />

            <div className={`${styles.divNavText}`}>
              <h1 className={`${styles.navH1} text-white`}>HMPS Keperawatan Anestesiologi</h1>
              <span className={`${styles.navP} text-white`}>Universitas Muhammaddiyah Purwokerto</span>
            </div>

          </div>

          <p className={`${styles.pFootDiv}`}>
            We need Your Aspiration and ideas <br />
            to make ourselves better in the future.
          </p>

        </div>

        <div className={`${styles.leftCont}`}>

          <div className={`${styles.pContact}`}>

            <h6 className={`${styles.h6}`}>Contact :</h6>

            <table className={`${styles.table}`}>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>hmpskump@gmail.com</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>:</td>
                <td>+6287832637839</td>
              </tr>
            </table>

          </div>

          <div className={` ${styles.pAddr}`}>

            <h6 className={`${styles.h6}`}>Address :</h6>
            <ul className={`${styles.ul}`}>
              <li>Dusun II, Sokaraja Kulon, Kec. Sokaraja,
                <br />Kabupaten Banyumas,
                <br />Jawa Tengah 53181</li>
            </ul>

          </div>

        </div>

      </section >

    </>

  )
}
