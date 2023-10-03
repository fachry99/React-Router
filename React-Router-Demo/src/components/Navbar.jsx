import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "1rem",
      TextDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
    </div>
  );
};
