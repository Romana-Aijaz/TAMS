import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return <div className="headerContainer">
  <div className="headerLinks">
        <ul>
          <li><a href="/SignUp">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
          <li><Link to="/Home">Home</Link></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Projects</a></li>
        </ul>
      </div>
  </div>;
}