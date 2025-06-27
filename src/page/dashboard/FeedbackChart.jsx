import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getSeverityData } from "../../api/dashboardApi";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const FeedbackSeverityChart = () => {
  const [severityData, setSeverityData] = useState({ critical: 0, medium: 0, normal: 0 });

  useEffect(() => {
    getSeverityData().then((data) => {
      console.log("Fetched Severity Data:", data);
      setSeverityData(data);
    });
  }, []);


  console.log(severityData.critical);

  const chartData = {

    labels: ["Critical", "Medium", "Normal"],
    datasets: [
      {
        data: [
          severityData.critical,
          severityData.medium,
          severityData.normal
        ],
        backgroundColor: ["#ef4444", "#facc15", "#10b981"], // red, yellow, green
      },
    ],
  };



  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-center">Severity Overview</h3>
      <Pie  style={{ maxWidth: "280px", maxHeight: "250px" }} data={chartData} />
    </div>
  );
};

export default FeedbackSeverityChart;
