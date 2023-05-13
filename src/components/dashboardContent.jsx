import React from 'react'
import styles from '../styles/dashboardContent.module.css'

import Image from 'next/image'
// import Mail from '../../public/mail.svg'
// import User from '../../public/respondent.svg'
// import Pin from '../../public/pin.svg'

export default function DashboardContent() {
  return (
    <article className={`${styles.container}`}>
        <h1 className={`${styles.h1} fw-bold mb-4`}>Dashboard</h1>
        <div className={`${styles.dataCardContainer} d-flex justify-content-between align-items-center"`}>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>Total Response</h3>
                <span className={`${styles.logo}`}>
                    <Image src='mail.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>100</p>
            </div>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>User Response</h3>
                <span className={`${styles.logo}`}>
                    <Image src='respondent.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>100</p>
            </div>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>Pinned Response</h3>
                <span className={`${styles.logo}`}>
                    <Image src='pin.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>100</p>
            </div>
        </div>
        <div className="chartContainer">
            <div className={`${styles.headerChart} my-3 d-flex justify-content-between`}>
                <h1 className={`${styles.h1} fw-bold mb-4`}>Response Chart</h1>
                <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`}>
                    <Image src='filter.svg' width={20} height={20}/>
                    <span className='text-white'>filter</span>
                </div>
            </div>
        </div>
    </article>
  )
}
