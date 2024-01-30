import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [10, 5],
    labels: ['Total Users', 'Active Users'],
  });

  const chartOptions = {
    series: chartData.series,
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: chartData.labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <div id="piechart">
      <ApexCharts options={chartOptions} series={chartData.series} type="pie" width={380} />
    </div>
  );
};

export default PieChart;
