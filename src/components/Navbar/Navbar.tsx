import React from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="navbar nav-wrapper">
        <ul className="text-black hide-on-med-and-down">
          <li>
            <NavLink to="/">Random dish</NavLink>
          </li>
          <li>
            <NavLink to="/favourite">Favourites</NavLink>
          </li>
        </ul>

        {location.pathname !== "/" && (
          <button className="navbarBtn right" type="button">
            Add custom dish
          </button>
        )}
      </div>
    </nav>
  );
};
