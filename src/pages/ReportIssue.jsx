// export default function ReportIssue() {
//   return (
//     <div className="container">
//       <h2>Report Railway Issue</h2>

//       <form>
//         <div>
//           <label>Upload Photo</label><br />
//           <input type="file" />
//         </div>

//         <div>
//           <label>Issue Type</label><br />
//           <select>
//             <option>Cleanliness</option>
//             <option>Maintenance</option>
//             <option>Safety</option>
//           </select>
//         </div>

//         <div>
//           <label>Coach / Station</label><br />
//           <input type="text" placeholder="e.g. S4 or New Delhi" />
//         </div>

//         <button type="submit">Submit Issue</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function ReportIssue() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="hero">
        <h2>✅ Issue Reported Successfully</h2>
        <p>
          Your issue has been recorded and will be reviewed by the railway
          authorities.
        </p>
      </div>
    );
  }

  return (
    <div className="hero">
      <h2>Report Railway Issue</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Photo</label><br />
          <input type="file" required />
        </div>

        <div>
          <label>Issue Type</label><br />
          <select required>
            <option value="">Select issue type</option>
            <option>Cleanliness</option>
            <option>Maintenance</option>
            <option>Safety</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label>Coach / Station</label><br />
          <input
            type="text"
            placeholder="e.g. S4 or New Delhi"
            required
          />
        </div>

        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}
