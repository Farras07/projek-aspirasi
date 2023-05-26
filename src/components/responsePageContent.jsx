import {React,useState,useRef, useEffect} from 'react'
import styles from '../styles/responsePageContent.module.css'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


export default function ResponsePageContent(props) {
    let {post: datas } = props.data
    const {token} = props

    

    const [isFilterShow,setIsFilterShow] = useState(false)
    const [ascSortFilter,setAscSortFilter] = useState(false)
    const [dataChange, setDataChange] = useState(datas)
    const data = dataChange.map((data)=>console.log(data.date))
    const ref = useRef(null)
    useEffect(() => {
        setDataChange(dataChange);
      }, [dataChange]);
    
      const handleFlashMessagePin=()=>{
        toast.success('Berhasil Pin Aspirasi',{
          position:toast.POSITION.TOP_CENTER,
          autoClose:1500

        })
      }
      const handleFlashMessageDelete=()=>{
        toast.success('Berhasil Menghapus Aspirasi',{
          position:toast.POSITION.TOP_CENTER,
          autoClose:1500

        })
      }

    const pinnedHandler = async (id,token) =>{

        const response = await fetch(`/api/aspiration/${id}`, {
          method: "PUT",
          headers:{
            "Content-Type" : "application/json",
            "Authorization": "Bearer " +token
          },

        })
    
        const responseData = await response.json()
    

        const updatedData = dataChange.map((data) =>
      data._id === id ? { ...data, pinned: true } : data
    );
    setDataChange(updatedData);
    handleFlashMessagePin()

      }
      const deleteHandler = async (id,token) =>{
      
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'No',
          customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Deleted!', '', 'success')
             deleteReq(id, token)
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
        
      }

    const  deleteReq = async (id ,token) =>{
      const response = await fetch(`/api/aspiration/${id}`, {
        method: "DELETE",
        headers:{
          "Content-Type" : "application/json",
          "Authorization": "Bearer " +token
        },
      })
      const updatedData = dataChange.filter((data)=>data._id !==id)
      setDataChange(updatedData)

    }


      

      

      const sortingNewestByDate = () =>{
        
        const sortedData = dataChange.sort((a, b) => new Date(b.date) - new Date(a.date));

        setDataChange(sortedData);
      }


      const sortingOldestByDate = () =>{
        
        const sortedData = dataChange.sort((a, b) => new Date(a.date) - new Date(b.date));
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


      <>

<section className={`${styles.container}`}>
        <ToastContainer />
  <div className={`${styles.headerContent} mb-3 d-flex justify-content-between align-items-center`}>

<h1 className={`${styles.h1} fw-bold m-0`}>Responses</h1>
<div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={() => handleFilter(isFilterShow)}>
  <Image alt='Filter' src='/filter.svg' width={20} height={20} />
  <span className='text-white'>Filter</span>
</div>

<div className={`${styles.filterMenu}`} ref={ref}>

  <div className={`${styles.FilterMenuItem} d-flex justify-content-between gap-4 align-items-center`}>
    <label htmlFor='shortTime' className='text-light'>Urutkan dari yang terbaru</label>
    <input onClick={sortingNewestByDate} type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime' value={true} onChange={handleFilterMenu} />
  </div>
  <div className={`${styles.FilterMenuItem} d-flex justify-content-between gap-4 align-items-center`}>
    <label htmlFor='longTime' className='text-light'>Urutkan dari yang terlama</label>
    <input onClick={sortingOldestByDate} type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime' value={false} onChange={handleFilterMenu} defaultChecked />
  </div>

</div>

</div>

<section className={`${styles.commentSection}`}>
{dataChange.map((data, i) => (!data.pinned ? (

  <article key={i} className={`${styles.cardComment}`}>

    <div className={`${styles.contCommentProfile} d-flex justify-content-center`}>
      <div className={`${styles.commentProfile}`}>
        <h3 className={`${styles.h3} text-white text-center`}>{data.nama}</h3>
        <p className='text-white'>{data.nim}</p>
      </div>
    </div>

    <div className={`${styles.commentContainer}`}>

      <h3 className={`${styles.h3}`}>Aspirasi Untuk Prodi</h3>
      <p className={`${styles.pComment}`}>{data.aspro}</p>
      <h3 className={`${styles.h3}`}>Aspirasi Untuk HMPS </h3>
      <p className={`${styles.pComment}`}>{data.asphim}</p>
      <div className={`${styles.headerComment} d-flex justify-content-between text-secondary`}>
        <p className={`${styles.pComment}`}>{data.date}</p>
      </div>

    </div>

    <div className={`${styles.actionBtn}`}>

      <span onClick={() => pinnedHandler(data._id, token)} className={`${styles.unpinButton}`}><Image alt='unpin' src='/unpin.svg' width={25} height={25} /></span>
      <span onClick={() => deleteHandler(data._id, token)} className={`${styles.deleteButton}`}><Image alt='delete' src='/bin.svg' width={25} height={25} /></span>

    </div>

  </article>

) : null))}
</section>

</section>

        
      
      
      </>
    )
  }

