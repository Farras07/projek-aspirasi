import Header from '../components/nav'
import Footer from '../components/footer'
import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout(props){
    return(
        <>
         <Head>
            <title> Aspirasi | {props.page} </title>
            <meta name="description" content="Website NextJs Basic" />
        </Head>
        
        <div>
            <Header page={props.page} />
            <main className={styles.overflowControl}>{props.children}</main>
            <Footer/>
            
        </div>
        </>
    )
}


    


