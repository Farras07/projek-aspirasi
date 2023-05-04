import React from 'react'

export default function Form({styles}) {
  return (
    <form>
        <div className={`${styles.identityForm} d-flex justify-content-evenly align-items-center py-3 mb-4`}>
            <div className="d-flex w-50 align-items-center justify-content-around">
                <label htmlFor="name" className="form-label">Nama*</label>
                <input type="text" className={`${styles.formInput} form-control w-75 h-50`} id="name" required/>
            </div>
            <div class="d-flex w-50 align-items-center justify-content-around">
                <label htmlfor="nim" className="form-label">NIM*</label>
                <input type="text" className={`${styles.formInput} form-control w-75 h-50`} id="nim" required/>
            </div>
        </div>
        <div className="aspirasi">
            <div className="form-floating mb-4">
                <textarea className={`${styles.formInput} form-control w-100 h-75`} placeholder="Leave a comment here" id="AspirasiProdi"></textarea>
                <label htmlfor="AspirasiProdi">Aspirasi untuk prodi</label>

            </div>
            <div className="form-floating mb-4">
                <textarea className={`${styles.formInput} form-control w-100 h-75`} placeholder="Leave a comment here" id="aspirasiHMPS"></textarea>
                <label htmlfor="aspirasiHMPS">Aspirasi untuk HMPS</label>

            </div>
        </div>
        
        <input type="submit" className="btn btn-primary"/>
    </form>
  )
}
