export default function AdminDashboard({ issues, updateStatus }) {
  return (
    <div className="hero">
      <h2>Admin Dashboard</h2>

      {issues.length === 0 && <p>No issues reported yet.</p>}

      {issues.map((issue) => (
        <div
          key={issue.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "6px",
          }}
        >
          <strong>{issue.type}</strong>

          <p>🚆 Train: {issue.trainNumber}</p>
          <p>🚪 Coach: {issue.coach}</p>
          <p>📍 Station: {issue.station}</p>

          <p
            className={`status-text ${
              issue.status === "Resolved"
                ? "status-resolved"
                : issue.status === "In Progress"
                ? "status-progress"
                : "status-pending"
            }`}
          >
            Status: {issue.status}
          </p>

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
