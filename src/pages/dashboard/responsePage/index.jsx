import React, { useEffect, useState } from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/responsePageContent'
import { useRouter } from "next/router";

import { authPage } from '@/middlewares/pageAuth'
export default function index(props) {
  let { aspirationsData: data } = props
  const { token } = props
  const router = useRouter()
  if (data === undefined) { router.push('/') }






  return (
    <>
      <Layout page='dashboard' responsePage={true} focus={2}>
        <Content data={data} token={token} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {

  const { token } = await authPage(ctx)
  const res = await fetch("http:localhost:3000/api/aspiration", {
    method: 'GET',
    headers: {
      "Authorization": 'Bearer ' + token
    }
  })
  const serializeResult = await res.json()
  return {
    props: {
      aspirationsData: serializeResult,
      token: token

    }
  }
}
