import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Reviews from "./page/review/Reviews";
import Dashboard from "./page/dashboard/Dashboard";


// chartConfig.js or App.jsx
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import MainLayout from "./layout/MainLayout";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function App() {
  return (
    <Router>
      <div className="app-bg">
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/reviews" element={<MainLayout><Reviews /></MainLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
