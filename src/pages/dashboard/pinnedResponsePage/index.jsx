import React, { useEffect, useState } from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/pinnedResponseContent'
import { authPage } from '@/middlewares/pageAuth'
import { useRouter } from "next/router";

export default function index(props) {

  const { aspirationsData: data } = props

  const { token } = props





  return (
    <>
      <Layout page='dashboard' responsePage={true} focus={3}>
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
