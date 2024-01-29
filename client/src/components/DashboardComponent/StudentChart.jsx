import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const StudentChart = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    
    const jwtToken = localStorage.getItem('token');  // Assuming you stored the JWT token in localStorage

    axios.get('http://localhost:5000/api/v1/table/students', {
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
        data: [30,40,45,50,49,60,70,91,125]
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
