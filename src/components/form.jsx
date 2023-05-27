import React from 'react'
import { useRef } from 'react'

export default function Form({ styles, addAspirationHandler }) {

    const nama = useRef()
    const nim = useRef()
    const aspro = useRef()
    const asphim = useRef()

    const formSubmit = (e) => {
        e.preventDefault()

        const formData = {
            nama: nama.current.value,
            nim: nim.current.value,
            aspro: aspro.current.value,
            asphim: asphim.current.value,
        }
        addAspirationHandler(formData)
    }


    return (


        <div className={styles.formContainer}>
            <h2 className='text-center'>Form aspirasi</h2>
            <form onSubmit={formSubmit} className='w-100 py-3 d-flex flex-column' >
                <div className='mb-4'>
                    <label htmlFor="name" className="form-label mb-3">Nama<span className='text-danger'>*</span></label>
                    <input ref={nama} type="text" className={`${styles.formInput} d-block w-100 p-1`} id="name" required />
                </div>
                <div className='mb-4'>
                    <label htmlFor="nim" className="form-label mb-3">Nomor Induk Mahasiswa<span className='text-danger'>*</span></label>
                    <input ref={nim} type="text" className={`${styles.formInput} d-block w-100 p-1`} id="nim" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="AspirasiProdi" className='form-label mb-3'>Aspirasi untuk prodi</label>
                    <textarea ref={aspro} className={`${styles.formInput} ${styles.formTextArea} d-block w-100 p-1`} id="AspirasiProdi" rows="6"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="aspirasiHMPS" className='form-label mb-3'>Aspirasi untuk HMPS</label>
                    <textarea ref={asphim} className={`${styles.formInput} ${styles.formTextArea} d-block w-100 p-1`} id="aspirasiHMPS" rows="6"></textarea>
                </div>

                <input type="submit" className={`${styles.btn} py-2 mt-3`} />
            </form>
        </div>
    )
}
