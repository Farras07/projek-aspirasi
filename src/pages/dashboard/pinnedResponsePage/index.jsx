import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/pinnedResponseContent'
export default function index() {
  return (
    <>
        <Layout page='dashboard' responsePage={true} focus={3}>
            <Content />
        </Layout> 
    </>
  )
}
