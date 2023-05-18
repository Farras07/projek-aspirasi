import {React,useState,useRef,useEffect} from 'react'
import styles from '../styles/responsePageContent.module.css'
import Image from 'next/image'


export default function PinnedResponseContent(props) {
    const {post: datas } = props.data
    const [ascSortFilter,setAscSortFilter] = useState(false)
    const [isFilterShow,setIsFilterShow] = useState(false)
    const [dataChange, setDataChange] = useState(datas);
    const ref = useRef(null)


    useEffect(() => {
        setDataChange(dataChange);
      }, [dataChange]);

    const pinnedHandler = async (id) =>{
        const response = await fetch(`/api/aspiration/${id}`, {
          method: "PUT",
          headers:{
            "Content-Type" : "application/json"
          },

        })
    
        const responseData = await response.json()
        console.log(responseData)

        const updatedData = dataChange.map((data) =>
        data._id === id ? { ...data, pinned: false } : data
      );
      setDataChange(updatedData);
      }
      const deleteHandler = async (id) =>{
        const response = await fetch(`/api/aspiration/${id}`, {
          method: "DELETE",
          headers:{
            "Content-Type" : "application/json"
          },
        })
        const updatedData = dataChange.filter((data)=>data._id !==id)
        setDataChange(updatedData)
      }
      

      const sortingNewestByDate = () =>{
        
        const sortedData = dataChange.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(sortedData)
        setDataChange(sortedData);
      }


      const sortingOldestByDate = () =>{
        
        const sortedData = dataChange.sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log(sortedData)
        setDataChange(sortedData);
      }
      const handleFilterMenu=(e)=>{
        setAscSortFilter(e.target.value)
    }

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
                    <input onClick={sortingNewestByDate} type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime' value={true} onChange={handleFilterMenu}/>
                </div>
                <div className={`${styles.FilterMenuItem} d-flex justify-content-around align-items-center`}>
                    <label htmlFor='longTime'>Urutkan dari yang terlama</label>
                    <input onClick={sortingOldestByDate} type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime' value={false} onChange={handleFilterMenu} defaultChecked/>
                </div>
                
            </div>
        </div>

        <section className={`${styles.commentSection}` }>
        {dataChange.map((data , i) =>( data.pinned? (

        <article key={i} className={`${styles.cardComment}`}>
            <div className={`${styles.commentProfile} d-flex justify-content-center align-items-center flex-column text-center`}>
                <h3 className={`${styles.h3} text-white`}>{data.nama}</h3>
                <p className='text-white'>{data.nim}</p>
            </div>
            <div className={`${styles.commentContainer}`}>
                <div className="headerComment d-flex justify-content-between">
                    <p className={`${styles.pComment}`}>{data.date}</p>
                    <div className={`${styles.action} d-flex justify-content-between`}>
                        <span onClick={()=>pinnedHandler(data._id)} className={`${styles.unpinButton}`}><Image alt='unpin'src='/unpin.svg' width={30} height={30}/></span>
                        <span onClick={()=>deleteHandler(data._id)} className={`${styles.deleteButton}`}><Image alt='delete' src='/bin.svg' width={30} height={30}/></span>
                    </div>
                </div>
                <h3 className={`${styles.h3}`}>Aspirasi Untuk Prodi</h3>
                <p className={`${styles.pComment}`}>{data.aspro}</p>
                <h3 className={`${styles.h3}`}>Aspirasi Untuk HMPS </h3>
                <p className={`${styles.pComment}`}>{data.asphim}</p>
            </div>
        </article>



): null))}
        </section>
    </section>
        
  )
}
