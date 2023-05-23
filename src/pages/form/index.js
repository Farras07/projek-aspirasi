import React from 'react'
import Myform from '../../components/form.jsx'
import NavForm from '../../components/navForm.jsx'
import Head from 'next/head'
import styles from '../../styles/form.module.css'
import Layout from '@/layout/layout.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function index() {

  const addAspirationHandler = async (data) =>{
    const response = await fetch("/api/aspiration", {
      method: "POST",
      body:  JSON.stringify(data),
      headers:{
        "Content-Type" : "application/json"
      }
    })

    const responseData = await response.json()
    console.log(responseData)
  }

  return (
    <>
    <Layout page='form'>
      <div className={`${styles.mainContent} d-flex`}>
        <ToastContainer />
        <div className={`${styles.leftContainer} d-flex`}>
          <div className={styles.infoContainer}>
            <section className={`${styles.descSection}`}>
              <h1 className='fw-bolder '>Share Your Thoughts</h1>
              <p>Punya Aspirasi yang ingin disampaikan pada prodi
                dan HMPS?<br/> Berikan aspirasimu disini!</p>
              <a href="#formSection" className={styles.formButton}>Beri aspirasi</a>
            </section>
            <section className={`${styles.socmedSection}`}>
              <h3 className='fw-bold mb-4'>Social Media</h3>
              <div className={`${styles.socmedList}`}>
                <a href="https://instagram.com/hmpska_ump?igshid=MmJiY2I4NDBkZg==" className='mb-3 text-decoration-underline'>Instagram</a>
              </div>
            </section>
          </div>
        </div>
        <div className={`${styles.rightContainer}`} id='formSection'>
          <Myform styles={styles} addAspirationHandler={addAspirationHandler}/>
        </div>
      </div>
    </Layout>
    </>
  )
}
