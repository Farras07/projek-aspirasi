import {React,useState,useRef} from 'react'
import styles from '../styles/responsePageContent.module.css'
import Image from 'next/image'

export default function PinnedResponseContent() {
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
    <section className={`${styles.container}`}>
        <div className={`${styles.headerContent} d-flex justify-content-between`}>
            <h1 className={`${styles.h1} fw-bold mb-4`}>Pinned Responses</h1>
            <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={()=>handleFilter(isFilterShow)}>
                <Image alt='Filter' src='/filter.svg' width={20} height={20}/>
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
        <section className={`${styles.commentSection}` }>
            <article className={`${styles.cardComment}`}>
                <div className={`${styles.commentProfile} d-flex justify-content-center align-items-center flex-column text-center`}>
                    <h3 className={`${styles.h3} text-white`}>Farras Hafish Zidane</h3>
                    <p className='text-white'>21082010057</p>
                </div>
                <div className={`${styles.commentContainer}`}>
                    <div className="headerComment d-flex justify-content-between">
                        <p className={`${styles.pComment}`}>12.57 PM</p>
                        <span className={`${styles.unpinButton}`}><Image alt='unpin'src='/unpin.svg' width={30} height={30}/></span>
                    </div>
                    <h3 className={`${styles.h3}`}>Aspirasi Untuk Prodi</h3>
                    <p className={`${styles.pComment}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae impedit rerum labore, dolore eligendi optio saepe ab dolorum non amet voluptate iusto ipsam fugiat sapiente ducimus! Veniam, voluptates illo.</p>
                    <h3 className={`${styles.h3}`}>Aspirasi Untuk HMPS </h3>
                    <p className={`${styles.pComment}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae impedit rerum labore, dolore eligendi optio saepe ab dolorum non amet voluptate iusto ipsam fugiat sapiente ducimus! Veniam, voluptates illo.</p>
                </div>
            </article>
           
            
        </section>
    </section>
  )
}
