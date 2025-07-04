import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>
          About
        </Link>
        <Link to="/tasks" style={{ marginRight: "1rem" }}>
          Tasks
        </Link>
        <Link to="/users" style={{ marginRight: "1rem" }}>
          Users
        </Link>
        <Link to="/contact" style={{ marginRight: "1rem" }}>
          Contact
        </Link>
        <Link to="/posts" style={{ marginRight: "1rem" }}>
          Posts
        </Link>
        <Link to="/students">Student</Link>
      </nav>
    </header>
  );
}

export default Header;
