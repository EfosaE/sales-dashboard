import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
} from 'chart.js';
import { lineChartData } from '../../data';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  Legend,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  CategoryScale
);
const options = {
  responsive: true,
  maintainAspectratio: false,
  aspectRatio: 0,
  tension: 0.4,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true, // Display the legend labels as dots
        pointStyle: 'circle', // Customize the point style (e.g., 'circle', 'rect')
      },
    },
  },

  layout: {
    padding: 20,
  },
};
const LineChart = () => {
  return <Line data={lineChartData} options={options} />;
};

export default LineChart;
