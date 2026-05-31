import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

function Navbar() {

  const { logout } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  function handleLogout(){

    logout();

    navigate("/login");

  }

  return (
    <nav className="navbar">
      <h2 className="brand">AI Productivity OS</h2>
      <div className="nav-links">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/habits">
          Habits
        </Link>
        <button
          type="button"
          className="btn btn-secondary logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );

}

export default Navbar;