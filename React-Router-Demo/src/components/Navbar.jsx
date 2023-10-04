import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "1rem",
      TextDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to="/Profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyle} to="/login">
          Login
        </NavLink>
      )}
      {auth.user && (
        <NavLink style={navLinkStyle} to="/logout">
          Logout
        </NavLink>
      )}
    </nav>
  );
};
