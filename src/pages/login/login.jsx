import Head from 'next/head'
import Styles from '../../styles/login.module.css'

export default function Login() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
            </Head>
            <main>
                <section className={Styles.LoginCont}>
                    <h1 className={Styles.h1}>Login</h1>
                    <form className={Styles.formLogin}>
                        <div className={Styles.inputUsername}>
                            <label for="">Username</label>
                            <input type="text" placeholder="Masukkan Username" />
                        </div>
                        <div className={Styles.inputPassword}>
                            <label for="">Password</label>
                            <input type="password" placeholder="Masukkan Password" />
                        </div>
                        <button type="submit" className={Styles.btn}>Login</button>
                    </form>
                </section>
            </main>
        </>
    )
}