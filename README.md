# CodeSense AI - Frontend Dashboard

CodeSense AI is an intelligent pull request reviewer that uses AI to analyze GitHub PR diffs and provide contextual feedback. This repository contains the React-based frontend dashboard built with the Devias Kit template.

## ✨ Features

- Modern UI with glassmorphic design (purple/white theme)
- Dashboard showing:
  - PR statistics
  - Feedback trends
  - Category-wise feedback insights
- Reviews page showing detailed AI feedback on each PR
- Sidebar navigation and responsive layout

## 🚀 Tech Stack

- React JS
- Tailwind CSS
- Devias Kit (MUI + Custom styling)
- Axios (for API calls)
- Recharts (for visualizations)

## 📁 Folder Structure

src/
├── api/ # API services
├── components/ # Reusable UI components
├── pages/ # Pages (Dashboard, Reviews, etc.)
├── styles/ # Custom CSS
├── App.js # Root component
└── main.jsx # Entry point


## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/codesense-ai-frontend.git
cd codesense-ai-frontend
```
### 2. Install Dependencies

npm install

### 3. Configure Environment Variables
Create a .env file in the root directory and add your backend API base URL:

### 4. Start Development Server
npm run dev

## 📦 Deployment
This project can be deployed using platforms like:

Vercel

Netlify

Render

## 🧠 Future Improvements
Authentication integration

PR filtering and search functionality

Enhanced feedback categorization and filters

Analytics for team-wide usage and performance

