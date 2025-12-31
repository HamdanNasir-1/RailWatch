// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import ReportIssue from "./pages/ReportIssue";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/report" element={<ReportIssue />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import ReportIssue from "./pages/ReportIssue";
// // import Navbar from "./components/Navbar";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/report" element={<ReportIssue />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import ReportIssue from "./pages/ReportIssue";
// // import Navbar from "./components/Navbar";
// // import TrackStatus from "./pages/TrackStatus";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/report" element={<ReportIssue />} />
// //         <Route path="/status" element={<TrackStatus />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ReportIssue from "./pages/ReportIssue";
// import Navbar from "./components/Navbar";
// import TrackStatus from "./pages/TrackStatus";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/report" element={<ReportIssue />} />
//         <Route path="/status" element={<TrackStatus />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import TrackStatus from "./pages/TrackStatus";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  const [issues, setIssues] = useState([
    { id: 1, type: "Cleanliness", location: "Coach S4", status: "Pending" },
    { id: 2, type: "Maintenance", location: "New Delhi Station", status: "In Progress" },
  ]);

  function updateIssueStatus(id, newStatus) {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIssue />} />
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
