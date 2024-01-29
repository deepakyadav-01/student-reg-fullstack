import React from 'react'
import Navbar from '../Navbar'
import UserSidebar from '../Sidebar/UserSidebar'

const UserLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <UserSidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default UserLayout
