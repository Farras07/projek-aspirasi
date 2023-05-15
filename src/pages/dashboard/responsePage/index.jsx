import React, { useEffect, useState } from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/responsePageContent'
export default function index(props) {
  let {aspirationsData : data} = props
  
 


 
 
  return (
    <>
        <Layout page='dashboard' responsePage={true} focus={2}>
          <Content data={data}  />
        </Layout> 
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http:localhost:3000/api/aspiration")
    const serializeResult=  await res.json()
    return {
      props: {
         aspirationsData : serializeResult
        
      }
    }
  }
