import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container-link">
        <Link to="/">
          <h1>Workout History</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
