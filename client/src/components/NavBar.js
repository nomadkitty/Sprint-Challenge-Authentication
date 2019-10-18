import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to="/register">
        <button>register</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
