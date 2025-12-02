import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const BookingLineChart = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [chartData, setChartData] = useState([]);

  // Sample booking totals per month
  const fetchMonthlyBookings = (year) => {
    const sampleData = {
      2025: [400, 250, 480, 200, 350, 500, 600, 700, 450, 300, 200, 100],
      2024: [120, 80, 300, 200, 250, 400, 500, 600, 450, 350, 200, 150],
    };
    return sampleData[year] || Array(12).fill(0);
  };

  useEffect(() => {
    setChartData(fetchMonthlyBookings(selectedYear));
  }, [selectedYear]);

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: `Total Bookings in ${selectedYear}`,
        data: chartData,
        borderColor: '#8FA584',
        backgroundColor: 'rgba(128,181,239,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#000',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  const totalBookings = chartData.reduce((a, b) => a + b, 0);

  return (
    <div className="w-full py-8  roboto border p-5 rounded-2xl shadow-sm transition-all">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl poppins-semibold">
          Bookings for Year {selectedYear}
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 cursor-pointer text-sm rounded-lg h-10 w-30 px-3 bg-transparent text-gray-800"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      {/* Total Bookings */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Total Bookings:</p>
        <p className="text-2xl poppins-regular font-bold text-[#232323] dark:text-white">
          {totalBookings.toLocaleString()}
        </p>
      </div>

      {/* Chart */}
      <div className="mt-6 h-80 flex items-center justify-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BookingLineChart;
