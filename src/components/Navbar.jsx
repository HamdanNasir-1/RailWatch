// import { Link } from "react-router-dom";
// // import "../styles/app.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>RailWatch</h2>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/report">Report</Link>
//       </div>
//     </nav>
//   );
// }
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>RailWatch</h2>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/report">Report</Link>
//         <Link to="/status">Status</Link>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>RailWatch</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <Link to="/status">Status</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
