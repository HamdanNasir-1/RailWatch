// export default function TrackStatus() {
//   const mockIssues = [
//     {
//       id: 1,
//       type: "Cleanliness",
//       location: "Coach S4",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       type: "Maintenance",
//       location: "New Delhi Station",
//       status: "In Progress",
//     },
//   ];

//   return (
//     <div className="hero">
//       <h2>Track Issue Status</h2>

//       {mockIssues.map((issue) => (
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
//         </div>
//       ))}
//     </div>
//   );
// }
export default function TrackStatus({ issues }) {
  return (
    <div className="hero">
      <h2>Track Issue Status</h2>

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
          <p>
            Status: <b>{issue.status}</b>
          </p>
        </div>
      ))}
    </div>
  );
}
