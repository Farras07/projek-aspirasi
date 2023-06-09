import React from 'react'
import styles from './layoutDashboard.module.css'
import Header from '../components/nav'
import Head from 'next/head'
import SideMenu from '../components/sideMenuDashboard'

export default function LayoutDashboard(props) {

  return (

    <>

      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header page={props.page} />
      <main className={`${styles.main} d-flex`}>
        <SideMenu focus={props.focus} className={`${styles.sideMenu} border-bottom`} />
        <div className={`${(props.responsePage ? styles.contentContainerRes : styles.contentContainer)}`}>
          {props.children}
        </div>
      </main>

    </>

  )
}
