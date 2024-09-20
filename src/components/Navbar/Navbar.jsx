import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  // Handler to navigate to a specific route
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div id="navbar-main">
      <div className="navbar-body">
        <div
          className="navbar-logo"
          onClick={() => handleNavigation("/")} // Redirects to home page
        >
          AAYSTrack
        </div>
        <div className="activity-buttons">
          <div
            className="button"
            onClick={() => handleNavigation("/signup")} // Redirects to signup page
          >
            Signup
          </div>
          <div
            className="button"
            onClick={() => handleNavigation("/login")} // Redirects to login page
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
