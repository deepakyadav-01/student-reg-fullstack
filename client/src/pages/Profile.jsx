import React from 'react'

const Profile = () => {
    return <div className='dark:text-white'><div className="container mx-auto p-4">
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold dark:text-white">fullname</h2>
        <p className="text-gray-500 dark:text-gray-300">DOB:</p>
        <p className="text-gray-500 dark:text-gray-300">Age:</p>
        <p className="text-gray-500 dark:text-gray-300">Email:</p>
        <p className="text-gray-500 dark:text-gray-300">Mobile:</p>
        <p className="text-gray-500 dark:text-gray-300">Gender:</p>
        <p className="text-gray-500 dark:text-gray-300">Address:</p>
      </div>
    </div>
  </div></div>
}

export default Profile
