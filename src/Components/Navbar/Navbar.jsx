import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1>Yummy</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="favorites" smooth={true} duration={500}>
              Favorites
            </Link>
          </li>
        </ul>
        <button className="add-recipe">Add Recipe</button>
      </div>
    </nav>
  );
}

export default Navbar;
