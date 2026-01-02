export default function TrackStatus({ issues }) {
  return (
    <div className="hero">
      <h2>Track Issue Status</h2>

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
        </div>
      ))}
    </div>
  );
}
