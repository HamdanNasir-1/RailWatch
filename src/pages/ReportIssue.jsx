import { useState } from "react";

export default function ReportIssue({ addIssue }) {
  const [type, setType] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [coach, setCoach] = useState("");
  const [station, setStation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    addIssue({
      type,
      trainNumber,
      coach,
      station,
      status: "Pending",
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="hero">
        <h2>✅ Issue Reported Successfully</h2>
        <p>Your issue has been recorded.</p>
      </div>
    );
  }

  return (
    <div className="hero">
      <h2>Report Railway Issue</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Issue Type</label><br />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select issue type</option>
            <option>Cleanliness</option>
            <option>Maintenance</option>
            <option>Safety</option>
          </select>
        </div>

        <div>
          <label>Train Number</label><br />
          <input
            type="text"
            placeholder="e.g. 12303"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Coach Number</label><br />
          <input
            type="text"
            placeholder="e.g. S4, B1"
            value={coach}
            onChange={(e) => setCoach(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Station Name</label><br />
          <input
            type="text"
            placeholder="e.g. Kanpur Central"
            value={station}
            onChange={(e) => setStation(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}
