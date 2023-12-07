import "./header.css";

export default function Header() {
  return <div className="headerContainer">
   <div className="headerLinks">
        <ul>
        <li><a href="#">Sign Up</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Projects</a></li>
        </ul>
      </div>
  </div>;
}