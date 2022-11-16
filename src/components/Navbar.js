import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let active = useLocation();

  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#"> iNote  </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-link ${active.pathname==="/"? "active": ""}`}> <Link className="nav-link" to="/">  Home  </Link>  </li>
          <li className={`nav-link ${active.pathname==="/about"? "active": ""}`}> <Link className="nav-link" to="/about"> About </Link> </li>          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
