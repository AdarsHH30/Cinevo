import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="app-name">
        <Link to="/" className="nav-links">
          Cinevo
        </Link>
      </div>
      <div className="nav-barlinks">
        <Link to="/" className="nav-links">
          Movies
        </Link>
        <Link to="/favorites" className="nav-links">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
