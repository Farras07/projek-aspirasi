import { React, useState, useRef } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'

export default function DashboardContent(props) {

    const router = useRouter()

    const { post: datas } = props.data
    const { token } = props

    console.log(datas)
    const [isFilterShow, setIsFilterShow] = useState(false)
    const ref = useRef(null)
    const handleFilter = (a) => {
        setIsFilterShow(!isFilterShow)
        if (!a) {
            ref.current.style.display = 'flex'
        }
        else {
            ref.current.style.display = 'none'
        }
    }

    return (

        <article className={`${styles.container}`}>

            <h1 className={`${styles.h1}`}>Dashboard</h1>
            <div className={`${styles.dataCardContainer} d-flex justify-content-between align-items-center`}>

                <div className={`${styles.dataCardItems} border-bottom border-danger border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Total Response</h3>
                        <p className={`${styles.p}`}>{datas.length}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='mail.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-success border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>User Response</h3>
                        <p className={`${styles.p}`}>{datas.length}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='respondent.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-warning border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Pinned Response</h3>
                        <p className={`${styles.p}`}>{datas.filter(item => item.pined === true).length}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='pin.svg' width={50} height={50} />
                    </span>
                </div>

            </div>

            <div className="chartContainer">

                <div className={`${styles.headerChart} my-3 d-flex justify-content-between align-items-center`}>

                    <h1 className={`${styles.h1} fw-bold`}>Response Chart</h1>
                    <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={() => handleFilter(isFilterShow)}>
                        <Image alt='image' src='filter.svg' width={20} height={20} />
                        <span className='text-white'>Filter</span>
                    </div>

                    <div className={`${styles.filterMenu}`} ref={ref}>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-around align-items-center`}>
                            <label htmlFor='shortTime'>Urutkan dari yang terbaru</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime' />
                        </div>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-around align-items-center`}>
                            <label htmlFor='longTime'>Urutkan dari yang terlama</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime' />
                        </div>
                    </div>

                </div>

                <div className={`${styles.chartCard} border-bottom border-primary border-5`}>

                </div>

            </div>

        </article>

    )
}
