import React from 'react'
import StudentChart from '../components/DashboardComponent/StudentChart'
import PieChart from '../components/DashboardComponent/PieChart'
import StudentRatio from '../components/DashboardComponent/StudentRatioChart'

const Dashboard = () => {
    return( <div className='dark:text-white'>
        
        <div className="flex space-x-4">
  <PieChart />
  <StudentRatio />
</div>
        <StudentChart/>
    </div>
    )
}

export default Dashboard
