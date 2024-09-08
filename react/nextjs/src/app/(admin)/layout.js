import React from 'react'
import SideBar from '../components/sidebar/page'

const AdminLayout = ({children}) => {
  return (
    <div>
        <SideBar/>
        {children}</div>
  )
}

export default AdminLayout