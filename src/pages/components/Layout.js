import React from "react";
import { useUserAuth } from "../../context/userContext";
import { NavLink } from "react-router-dom";
import logo from "/Users/tolulopeadelye/exam/src/assets/logo.png";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color:  "#e6a948",
    transition: "all 1s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      to={to}
      end
      {...props}
    />
  );
};

const Layout = () => {
  const { user, logIn } = useUserAuth();
  function onClick(e) {
    e.preventDefault();
    logIn();
  }

  return (
    <nav className="navigation-container">
      <div className="logo">
        <img src={logo} alt="Hauxano Logo" width="40%"></img>
        
      </div>
      <div className="links">
        {" "}
        <CustomNavLink to="/">Home</CustomNavLink>{" "}
        <CustomNavLink to="/programtracks">Program Tracks</CustomNavLink>{" "}
        <button className="login-button">
          <CustomNavLink to="/auth">Log In</CustomNavLink>{" "}
        </button>
      </div>
    </nav>
  );
};

export default Layout;
