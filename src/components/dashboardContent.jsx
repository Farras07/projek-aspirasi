import { React, useState, useRef } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'
import LineChart from '../components/lineChart.jsx'

export default function DashboardContent(props) {

    const {post: datas } = props.data
    const {token} =props

    const monthList = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","November","Desember"]
    const [dataChart,setDataChart] = useState({
        labels:handlerDataChart(monthList,datas).map(data=>data.month) ,
        datasets: [{
            label : "Aspirations Gained",
            data:handlerDataChart(monthList,datas).map(data=>data.numberAspiration),
            
            backgroundColor:[
                "#5cb85c",
                "#f0ad4e",
                "#d9534f",
                "#5bc0de"
            ],
            borderColor:"#0275d8",
            options: {
                maintainAspectRatio:false,
                interaction: {
                  mode: 'nearest',
                  axis: 'x',
                  intersect: false
                }
            },
            scales: {
                y:{
                    beginAtZero:true,
                }
            }
        }]
    })

    console.log(datas)
    // const [isFilterShow, setIsFilterShow] = useState(false)
    // const ref = useRef(null)
    // const handleFilter = (a) => {
    //     setIsFilterShow(!isFilterShow)
    //     if (!a) {
    //         ref.current.style.display = 'flex'
    //     }
    //     else {
    //         ref.current.style.display = 'none'
    //     }
    // }
   
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
                        <p className={`${styles.p}`}>{datas.filter(item => item.pinned === true).length}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='pin.svg' width={50} height={50} />
                    </span>
                </div>

            </div>

            <div className="chartSection">

                <div className={`${styles.headerChart} my-3 d-flex justify-content-between align-items-center`}>

                    <h1 className={`${styles.h1} fw-bold`}>Response Chart</h1>
                    
                    {/* <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={() => handleFilter(isFilterShow)}>
                        <Image alt='image' src='filter.svg' width={20} height={20} />
                        <span className='text-white'>Filter</span>
                    </div> */}

                    {/* <div className={`${styles.filterMenu}`} ref={ref}>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-between align-items-center gap-3`}>
                            <label htmlFor='shortTime' className='text-light'>Urutkan dari yang terbaru</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime' />
                        </div>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-between align-items-center gap-3`}>
                            <label htmlFor='longTime' className='text-light'>Urutkan dari yang terlama</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime' />
                        </div>
                    </div> */}

                </div>

                <div className={`${styles.chartCard} border-bottom border-primary border-5`}>
                    <div className={`${styles.chartBox} d-flex align-items-center`}>
                        <div className={`${styles.chartContainer} d-flex`}>
                            <div className={`${styles.chartContainerBody} d-flex align-items-center`}>
                                <LineChart data={dataChart} width={200} className={`${styles.chartData}`}/> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </article>

    )

   
}

const handlerDataChart =(monthList,datas)=>{
    const monthArray = []
    for(let a = 0 ;a<datas.length;a++){
        const monthData = new Date(datas[a].date)
        const month = monthData.getMonth()
        const monthName = monthList[month]
        monthArray.push(monthName)
    }
    const monthObject = [
        {
            month:monthList[0],
            numberAspiration:monthArray.filter(data=>data === monthList[0]).length

        },
        {
            month:monthList[1],
            numberAspiration:monthArray.filter(data=>data === monthList[1]).length

        },
        {
            month:monthList[2],
            numberAspiration:monthArray.filter(data=>data === monthList[2]).length

        },
        {
            month:monthList[3],
            numberAspiration:monthArray.filter(data=>data === monthList[3]).length

        },
        {
            month:monthList[4],
            numberAspiration:monthArray.filter(data=>data === monthList[4]).length
        },
        {
            month:monthList[5],
            numberAspiration:monthArray.filter(data=>data === monthList[5]).length

        },
        {
            month:monthList[6],
            numberAspiration:monthArray.filter(data=>data === monthList[6]).length

        },
        {
            month:monthList[7],
            numberAspiration:monthArray.filter(data=>data === monthList[7]).length

        },
        {
            month:monthList[8],
            numberAspiration:monthArray.filter(data=>data === monthList[8]).length

        },
        {
            month:monthList[9],
            numberAspiration:monthArray.filter(data=>data === monthList[9]).length

        },
        {
            month:monthList[10],
            numberAspiration:monthArray.filter(data=>data === monthList[10]).length

        },
        {
            month:monthList[11],
            numberAspiration:monthArray.filter(data=>data === monthList[11]).length

        }
    ]
    return monthObject
}




