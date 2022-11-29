import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Navbar() {
  let active = useLocation();
  let history = useHistory();

  function handleLogout(e){
    localStorage.removeItem("token");
    history.push("/login");
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="#"> iNote  </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-link ${active.pathname==="/"? "active": ""}`}> <Link className="nav-link" to="/">  Home  </Link>  </li>
          <li className={`nav-link ${active.pathname==="/about"? "active": ""}`}> <Link className="nav-link" to="/about"> About </Link> </li>          
        </ul>
      </div>
      {localStorage.getItem("token") ? 
      <button type="button" class="btn btn-secondary" onClick={handleLogout}>LOGOUT</button> : 
       <>
       <a className="btn btn-primary mx-1" href="/login" role="button">Login</a>
       <a className="btn btn-primary mx-1" href="/signin" role="button">SignUp</a>
       </>    
      
      }
    </nav>
  );
}

export default Navbar;
