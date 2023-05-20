import React from 'react';
import Image from 'next/image'
import styles from '../styles/jumbotron.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jumbotron() {

   const router = useRouter()

   function handleClick() {
      router.push('/form')
   }

   return (

      <>

         <div className={`${styles.jumDiv} d-flex justify-content-center flex-column text-center`} >

            <h1 className={styles.titleText} >Suara Mahasiswa Prodi Kep. Anestesi</h1>
            <p className={`${styles.subTitle} mb-3`} >Aspire Your Ideas And Suggestion</p>

            <div className='container-fluid'>

               <div className='mb-5'>
                  <Image className={styles.images} alt='logo' src='2.svg' width={60} height={60} /><span>-----</span>
                  <Image className={styles.images} alt='logo' src='1.svg' width={60} height={60} /><span>-----</span>
                  <Image className={styles.images} alt='logo' src='3.svg' width={70} height={70} />
               </div>

               <button onClick={handleClick} className={`${styles.btnJum}`}>
                  <Link href='/form' className="text-dark">START</Link>
               </button>

            </div>

         </div>

      </>

   )
}
