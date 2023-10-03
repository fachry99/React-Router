import { Outlet, Link } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <Link to="user1">Users 1</Link>
      <Link to="user2">Users 2</Link>
      <Link to="user3">Users 3</Link>
      <Outlet />
    </div>
  );
};
