import React from 'react'

export default function Form({styles}) {
  return (
  
    
    <div className={styles.formContainer}>
        <h2 className='text-center'>Form aspirasi</h2>
        <form className='w-100 py-3 d-flex flex-column' >
            <div className='mb-4'>
                <label htmlFor="name" className="form-label mb-3">Nama<span className='text-danger'>*</span></label>
                <input type="text" className={`${styles.formInput} d-block w-100 p-1`} id="name" required/>
            </div>
            <div className='mb-4'>
                <label htmlFor="nim" className="form-label mb-3">Nomor Induk Mahasiswa<span className='text-danger'>*</span></label>
                <input type="text" className={`${styles.formInput} d-block w-100 p-1`} id="nim" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="AspirasiProdi" className='form-label mb-3'>Aspirasi untuk prodi</label>
                <textarea className={`${styles.formInput} ${styles.formTextArea} d-block w-100 p-1`} id="AspirasiProdi" rows="6"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="aspirasiHMPS" className='form-label mb-3'>Aspirasi untuk HMPS</label>
                <textarea className={`${styles.formInput} ${styles.formTextArea} d-block w-100 p-1`} id="aspirasiHMPS" rows="6"></textarea>
            </div>
            
            <input type="submit" className={`${styles.btn} py-2 mt-3`}/>
        </form>
    </div>
  )
}
