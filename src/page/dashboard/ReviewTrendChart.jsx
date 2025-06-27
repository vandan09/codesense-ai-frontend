import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getReviewTrends } from "../../api/reviewApi";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ReviewTrendChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getReviewTrends()
      .then(data => {
        const labels = data.map(item => item.date);
        const counts = data.map(item => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "PRs Reviewed",
              data: counts,
              fill: false,
              borderColor: "#4f46e5",
              tension: 0.4,
            },
          ],
        });
      })
      .catch(err => console.error("Error loading review trends", err));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#333",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#333",
        },
      },
      y: {
        ticks: {
          color: "#333",
        },
        beginAtZero: true,
        precision: 0,
      },
    },
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
      <h3 style={{ marginBottom: "20px" }}>Review Trend</h3>
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default ReviewTrendChart;
