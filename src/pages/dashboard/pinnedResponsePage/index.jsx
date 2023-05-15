import React, { useEffect } from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/pinnedResponseContent'
export default function index(props) {
  const {aspirationsData : data} = props

  
  return (
    <>
        <Layout page='dashboard' responsePage={true} focus={3}>
            <Content data={data} />
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
