import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CompletionRateChart = () => {
  const [chartData, setChartData] = useState(null);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    fetch("http://localhost/backend/api/get_completion_rate.php")
      .then(res => res.json())
      .then(data => {
        setRate(data.completion_rate);

        setChartData({
          labels: ["Completed", "Pending", "Cancelled"],
          datasets: [
            {
              data: [data.completed, data.pending, data.cancelled],
              backgroundColor: [
                "#4CAF50", // Completed
                "#FFC107", // Pending
                "#F44336"  // Cancelled
              ],
              borderColor: "#ffffff",
              borderWidth: 2
            }
          ]
        });
      });
  }, []);

  if (!chartData) return <p>Loading Chart...</p>;

  return (
    <div className="w-100 bg-white p-5">
      <h3 className="poppins-semibold text-xl" style={{ marginBottom: "20px" }}>
        Booking Completion Rate
      </h3>

      <Doughnut data={chartData} />

      <h2 style={{ marginTop: "15px" }}>
        {rate}% Completed
      </h2>
    </div>
  );
};

export default CompletionRateChart;
