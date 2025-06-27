import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-box">CS</div>
        <span className="logo-text">CodeSense AI</span>
      </div>
      <ul className="nav">
        <li>
          <Link
            to="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className={`nav-item ${location.pathname === "/reviews" ? "active" : ""}`}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
