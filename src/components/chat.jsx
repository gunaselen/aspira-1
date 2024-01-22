import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import {SubTitele} from './subTitele/SubTitele';


const YourChartComponent = ({chartId ,chartType ,header}) => {
    const style ={
        width:"100%",
        borderRadius: "6px",
        background: "#FFF",
        boxShadow: "2px 2px 2px 0px rgba(6, 40, 61, 0.05), -2px -2px 2px 0px rgba(6, 40, 61, 0.05)",
        padding: "10px",
    }
  useEffect(() => {
    const ctx = document.getElementById(chartId);
    let chart = null;

    const createChart = () => {
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: "#3282C4"
          },
          {
            label: 'My First Dataset',
            data: [6, 40, 70, 50, 6, 30, 50],
            fill: false,
            backgroundColor: "#6AAA43"
          },
          {
            label: 'My First Dataset',
            data: [16, 49, 50, 21, 86, 45, 10 ,20],
            fill: false,
            backgroundColor: "#FF6636"
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      // Destroy existing chart if it exists
      if (chart) {
        chart.destroy();
      }

      // Create a new Chart instance
      chart = new Chart(ctx, {
        type: chartType ,
        data: data,
        options: options,
      });
    };

    // Create the initial chart
    createChart();

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div style={style}>
         <SubTitele>{header}</SubTitele>
        <canvas id={chartId} />
    </div>

  );
};

export default YourChartComponent;
