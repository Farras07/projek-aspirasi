import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/responsePageContent'
export default function index() {
  return (
    <>
        <Layout page='dashboard' responsePage={true} focus={2}>
          <Content />
        </Layout> 
    </>
  )
}
