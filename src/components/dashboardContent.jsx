import {React,useState,useRef} from 'react'
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'

export default function DashboardContent(props) {
    const {post: datas } = props.data
    const {token} =props
    
    console.log( datas)
    const [isFilterShow,setIsFilterShow] = useState(false)
    const ref = useRef(null)
    const handleFilter=(a)=>{
        setIsFilterShow(!isFilterShow)
        if(!a){
            ref.current.style.display='flex'
        }
        else{
            ref.current.style.display='none'
        }
    }
  return (
    <article className={`${styles.container}`}>
        <h1 className={`${styles.h1} fw-bold mb-4`}>Dashboard</h1>
        <div className={`${styles.dataCardContainer} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>Total Response</h3>
                <span className={`${styles.logo}`}>
                    <Image alt='image' src='mail.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>{datas.length}</p>
            </div>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>User Response</h3>
                <span className={`${styles.logo}`}>
                    <Image alt='image' src='respondent.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>{datas.length}</p>
            </div>
            <div className={`${styles.dataCardItems}`}>
                <h3 className='fs-6 fw-bold'>Pinned Response</h3>
                <span className={`${styles.logo}`}>
                    <Image alt='image' src='pin.svg' width={60} height={60}/>
                </span>
                <p className={`${styles.p}`}>{datas.filter(item => item.pinned === true).length}</p>
            </div>
        </div>
        <div className="chartContainer">
            <div className={`${styles.headerChart} my-3 d-flex justify-content-between`}>
                <h1 className={`${styles.h1} fw-bold mb-4`}>Response Chart</h1>
                <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={()=>handleFilter(isFilterShow)}>
                    <Image alt='image' src='filter.svg' width={20} height={20}/>
                    <span className='text-white'>Filter</span>
                </div>
                <div className={`${styles.filterMenu}`} ref={ref}>
                <div className={`${styles.FilterMenuItem} d-flex justify-content-around align-items-center`}>
                    <label htmlFor='shortTime'>Urutkan dari yang terbaru</label>
                    <input type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime'/>
                </div>
                <div className={`${styles.FilterMenuItem} d-flex justify-content-around align-items-center`}>
                    <label htmlFor='longTime'>Urutkan dari yang terlama</label>
                    <input type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime'/>
                </div>
                
            </div>
            </div>
        </div>
    </article>
  )
}
