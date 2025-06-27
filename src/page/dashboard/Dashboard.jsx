import React, { useEffect, useState } from "react";
import TopStats from "../../component/TopBoxes";
import FeedbackChart from "./FeedbackChart";
import ReviewTrendChart from "./ReviewTrendChart";
import { getDashboardStats } from "../../api/dashboardApi";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Error loading dashboard", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="overlay-loader">
        <div className="loader" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      <TopStats stats={stats} />
      <div className="chart-row">
        <div className="chart-box">
          <h3 className="chart-title">Feedback Overview</h3>
          <div className="chart-inner">
            <FeedbackChart/>
          </div>
        </div>
        <div className="chart-box">
          <h3 className="chart-title">Review Trends</h3>
          <div className="chart-inner">
            <ReviewTrendChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
