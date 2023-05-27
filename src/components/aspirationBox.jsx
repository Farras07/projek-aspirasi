import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/aspirationbox.module.css'

export default function aspirationBox(props) {

  const { post: datas } = props.data
  console.log(datas)

  // const router = useRouter()

  return (

    <>

      <div className='mx-auto w-100 container h-100 
      border row
      '>
        {datas.map((x, index) => (
          <article className={`col ${styles.aspirationCont}`} datas={datas} onClick={() => { router.push(`/aspirations/${x._id}`) }} key={index}>
            <h1>{x.nama}</h1>
            <h1>{x.nim}</h1>
          </article>
        ))}

      </div>
    </>

  )
}



