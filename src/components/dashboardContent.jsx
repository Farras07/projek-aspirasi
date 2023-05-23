import {React,useState,useRef} from 'react'
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
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95"
            ],
            borderColor:"black"
        }]
    })
    
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
            </div>
            <div className={`${styles.chartSection}`}>
                <LineChart data={dataChart} height={350}/>
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
