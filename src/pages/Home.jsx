// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="container">
//       <h1>RailWatch</h1>
//       <p>Smart Railway Issue Monitoring System</p>

//       <Link to="/report">
//         <button>🚨 Report an Issue</button>
//       </Link>
//     </div>
//   );
// // }
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="hero">
//       <h1>RailWatch</h1>
//       <p>Smart Railway Issue Monitoring System</p>

//       <Link to="/report">
//         <button> Report an Issue</button>
//       </Link>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>RailWatch</h1>
      <p>Smart Railway Issue Monitoring System</p>

      <Link to="/report">
        <button> Report an Issue</button>
      </Link>

      {/* How it works */}
      <div className="features">
        <div className="feature-box">
          <h4> Report</h4>
          <p>Upload an image and describe the railway issue.</p>
        </div>

        <div className="feature-box">
          <h4> Track</h4>
          <p>Monitor the status of your complaint transparently.</p>
        </div>

        <div className="feature-box">
          <h4> Resolve</h4>
          <p>Authorities review and resolve issues efficiently.</p>
        </div>
      </div>
    </div>
  );
}
