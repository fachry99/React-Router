import { Outlet, Link } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <Link to="1">Users 1</Link>
      <Link to="2">Users 2</Link>
      <Link to="3">Users 3</Link>
      <Outlet />
    </div>
  );
};
