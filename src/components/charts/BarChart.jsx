import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  Title,
  layouts,
} from 'chart.js';
import { barChartData } from '../../data';
import { Bar } from 'react-chartjs-2'; 
import { useEffect, useRef } from 'react';

ChartJS.register(
  Title,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  Colors,
  LinearScale,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
    aspectRatio: 1,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true, // Display the legend labels as dots
        pointStyle: 'circle', // Customize the point style (e.g., 'circle', 'rect')
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
      y: {
        beginAtZero: true,
      },
  },
  layout: {
    padding: 20,
  },
};

export default function BarChart() {

  return <Bar data={barChartData} options={options} />;
}
