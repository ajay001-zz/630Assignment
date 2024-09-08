import React from 'react'
import SideBar from '@/components/sidebar/page'

const AdminLayout = ({children}) => {
  return (
    <div>
       <div className='bg-gray-100 flex'></div>
        <SideBar/>
        {children}
        </div>
  )
}

export default AdminLayout