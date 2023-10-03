import { Outlet, Link, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUser = searchParams.get("filter") === "active";

  return (
    <div>
      <Link to="1">Users 1</Link>
      <Link to="2">Users 2</Link>
      <Link to="3">Users 3</Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUser ? "Active Users" : "All Users"}
    </div>
  );
};
