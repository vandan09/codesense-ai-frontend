import React from "react";
import { FaCheckCircle, FaClock, FaCodeBranch } from "react-icons/fa";
import "../styles/Dashboard.css";

const TopStats = ({ stats }) => {
    console.log(stats)
    if (!stats) return null;

    const statCards = [
        { icon: <FaCodeBranch />, label: "Total PRs", value: stats.totalPRs || 0 },
        { icon: <FaClock />, label: "Avg. Review Time", value: stats.avgReviewTime || "0 hrs" },
        { icon: <FaCheckCircle />, label: "Review Accuracy", value: stats.reviewAccuracy || "0%" },
    ];

    return (
        <div className="stats-row">
            {statCards.map((stat, idx) => (
                <div key={idx} className="stat-card stat-clean">
                    <div className="stat-left">
                        <p className="stat-label">{stat.label}</p>
                        <h2 className="stat-value">{stat.value}</h2>
                    </div>
                    <div className="stat-icon-right">{stat.icon}</div>
                </div>
            ))}
        </div>
    );
};

export default TopStats;