import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../components/dashboardContent'
import { authPage } from '@/middlewares/pageAuth'


export default function index(props) {
  const {aspirationsData : data} = props
  const {token} ={props}
  return (
    <>
        <Layout page='dashboard' token={token} responsePage={false} focus={1}>
          <Content data={data} />
        </Layout> 
    </>
  )
}

export async function getServerSideProps(ctx) {

 const {token} = await authPage(ctx)
 console.log('jancoks')
 console.log(token)
  const res = await fetch("http:localhost:3000/api/aspiration",{
    method:'GET',
    headers:{
      "Authorization": 'Bearer ' + token
    }
  })
    const serializeResult=  await res.json()
    return {
      props: {
         aspirationsData : serializeResult,
         token:token
        
      }
    }
  }

