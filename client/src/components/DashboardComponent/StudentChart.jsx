import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';
import { API_URLS } from "../../config.js";
const StudentChart = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    
    const jwtToken = localStorage.getItem('token');  // Assuming you stored the JWT token in localStorage

    axios.get(API_URLS.USERS, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then(response => {
        // Assuming your API response has a data field containing employee details
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  console.log(studentData)
  

  const chartOptions = {
    chart: {
        type: 'bar'
      },
      series: [{
        name: 'students',
        data: [10,20,30,40,50,60,70,80,90]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
    
    // Add other chart options here
  

  return (
    <div id="barChart">
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={350} />
    </div>
  );
};

export default StudentChart;
