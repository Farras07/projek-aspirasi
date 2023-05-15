import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../components/dashboardContent'

export default function index() {
  return (
    <>
        <Layout page='dashboard' responsePage={false} focus={1}>
          <Content />
        </Layout> 
    </>
  )
}
