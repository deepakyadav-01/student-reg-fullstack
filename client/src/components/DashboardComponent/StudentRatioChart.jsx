import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const StudentRatio = () => {
  const [RatioData, setRatioData] = useState({
    series: [10, 5],
    labels: ['Total Student', 'Total Users'],
  });


var ChartOptions = {
    series: RatioData.series,
    chart: {
      type: 'donut',
    },
    labels: RatioData.labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  
  return (
    <div id="ratiopiechart">
      <ApexCharts options={ChartOptions} series={RatioData.series} type="donut" width={380} />
    </div>
  );
};

export default StudentRatio;
