import Head from 'next/head'
import Styles from '../../styles/login.module.css'
import { useState  } from 'react'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'




export default function Login() {

    const router = useRouter()

    const [field, setField] = useState({
        username:'',
        password: ''
    })

    const [status, setStatus] = useState('normal')

    async function loginHandler(e){
        e.preventDefault()

        setStatus('loading')

        const loginReq = await fetch('/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(field)
        })

        if(!loginReq.ok) return setStatus('error'+ loginReq.status);

        const  loginRes = await  loginReq.json()

        setStatus('success')
        cookie.set('token', loginRes.token)

        router.push('/dashboard')
    }

    function fieldHandler(e){
        const name = e.target.getAttribute('name')

        setField({
            ...field,
            [name]:e.target.value
        })

    }
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
            </Head>
            <main>
                <div></div>
                <section className={Styles.LoginCont}>
                    <h1 className={Styles.h1}>Login</h1>
                    <form onSubmit={loginHandler} className={Styles.formLogin}>
                        <div className={Styles.inputUsername}>
                            <label htmlfor="">Username</label>
                            <input onChange={fieldHandler} name="username" type="text" placeholder="Masukkan Username" />
                        </div>
                        <div className={Styles.inputPassword}>
                            <label htmlfor="">Password</label>
                            <input onChange={fieldHandler} name="password" type="password" placeholder="Masukkan Password" />
                        </div>
                        <button type="submit" className={Styles.btn}>Login</button>
                    </form>
                    <div>{status}</div>
                </section>
            </main>
        </>
    )
}