import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">SmartPlace</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/places">Places</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
