import React from "react";
import "../styles/Layout.css";
import Sidebar from "../component/Sidebar";

const MainLayout = ({ children }) => {
  return (
     <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
