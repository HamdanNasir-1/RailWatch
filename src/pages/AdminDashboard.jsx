// import { useState } from "react";

// export default function AdminDashboard() {
//   const [issues, setIssues] = useState([
//     { id: 1, type: "Cleanliness", location: "Coach S4", status: "Pending" },
//     { id: 2, type: "Maintenance", location: "New Delhi Station", status: "In Progress" },
//   ]);

//   function updateStatus(id, newStatus) {
//     setIssues(
//       issues.map((issue) =>
//         issue.id === id ? { ...issue, status: newStatus } : issue
//       )
//     );
//   }

//   return (
//     <div className="hero">
//       <h2>Admin Dashboard</h2>

//       {issues.map((issue) => (
//         <div
//           key={issue.id}
//           style={{
//             background: "#fff",
//             padding: "15px",
//             marginBottom: "10px",
//             borderRadius: "6px",
//           }}
//         >
//           <strong>{issue.type}</strong>
//           <p>{issue.location}</p>
//           <p>Status: <b>{issue.status}</b></p>

//           <select
//             value={issue.status}
//             onChange={(e) => updateStatus(issue.id, e.target.value)}
//           >
//             <option>Pending</option>
//             <option>In Progress</option>
//             <option>Resolved</option>
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// }
export default function AdminDashboard({ issues, updateStatus }) {
  return (
    <div className="hero">
      <h2>Admin Dashboard</h2>

      {issues.map((issue) => (
        <div
          key={issue.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <strong>{issue.type}</strong>
          <p>{issue.location}</p>
          <p>Status: <b>{issue.status}</b></p>

          <select
            value={issue.status}
            onChange={(e) =>
              updateStatus(issue.id, e.target.value)
            }
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      ))}
    </div>
  );
}
