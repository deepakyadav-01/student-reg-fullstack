import React from 'react'
import Navbar from '../Navbar'
import AdminSidebar from '../Sidebar/AdminSidebar'

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <AdminSidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
