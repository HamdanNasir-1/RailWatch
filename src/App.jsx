import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import TrackStatus from "./pages/TrackStatus";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // 🔹 Fully dynamic issues (no hard-coded data)
  const [issues, setIssues] = useState([]);

  // Add new issue from ReportIssue
  function addIssue(newIssue) {
    setIssues((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newIssue,
      },
    ]);
  }

  // Update issue status from AdminDashboard
  function updateIssueStatus(id, newStatus) {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/report"
          element={<ReportIssue addIssue={addIssue} />}
        />

        <Route
          path="/status"
          element={<TrackStatus issues={issues} />}
        />

        <Route
          path="/admin"
          element={
            <AdminDashboard
              issues={issues}
              updateStatus={updateIssueStatus}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
