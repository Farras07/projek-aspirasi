import React from 'react'
import Myform from '../../components/form.jsx'
import NavForm from '../../components/navForm.jsx'
import Head from 'next/head'
import styles from '../../styles/form.module.css'
import Layout from '@/layout/layout.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router.js'
import { toast } from 'react-toastify'

export default function index() {

  const [status, setStatus] = useState('')

  const router = useRouter()


  const addAspirationHandler = async (data) =>{
 
    const payload ={
      nama:data.nama,
      nip: data.nim,
      prodi: "B2584B32-CD06-4A9A-864F-1E2B6FA1B044",
      pt: "56D6D9C6-B16D-4744-ABA4-2BFFA25359C2"
    }
    
    const id = toast.loading('Loading' ,{
      position:toast.POSITION.TOP_CENTER
    });

  const checkIsValidMhs = await fetch("/api/mhs",{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-Type" : "application/json"
    }
  })
  
  if(!checkIsValidMhs.ok) return toast.update(id,{render:'Mahasiswa tidak ditemukan ' +
   checkIsValidMhs.status,type:'error',
  isLoading: false,
    position:toast.POSITION.TOP_CENTER,
    autoClose:2000,
  });


   

if(checkIsValidMhs.ok) {   

    const response = await fetch("/api/aspiration", {
      method: "POST",
      body:  JSON.stringify(data),
      headers:{
        "Content-Type" : "application/json"
      }
    })

    if(!response.ok) return toast.update(id,{render:'error' +
    response.status,type:'error',
   isLoading: false,
     position:toast.POSITION.TOP_CENTER,
     autoClose:2000,
   });
 ;
   ;

    const responseData = await response.json()

    
    setStatus('Aspirasi berhasil terkirim!')

    return toast.update(id,{render:'Aspirasi berhasil terkirim!',type:'success',
  isLoading: false,
    position:toast.POSITION.TOP_CENTER,
    autoClose:2000,
  });

    
    console.log(responseData)

    router.push('/form')

  }
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
          <Myform status={status} styles={styles} addAspirationHandler={addAspirationHandler}/>
          <p>{status}</p>
        </div>
      </div>
    </Layout>
    </>
  )
}
