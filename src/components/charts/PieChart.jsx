import {Pie} from 'react-chartjs-2'
import { pieChartData } from '../../data'
import { Chart as ChartJS, Legend, Tooltip, ArcElement } from 'chart.js'

ChartJS.register(Legend, Tooltip, ArcElement);

const PieChart = () => {
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    responsive: true,
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
    elements: {
      arc: {
        borderWidth: 6, // Set the border width around each sector
        borderColor: '#FFFFFF',
      },
    },
  };
  return (
    <Pie data={pieChartData} options={options} />
  )
}

export default PieChart