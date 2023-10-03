import { useParams } from "react-router-dom";
export const UserDetails = () => {
  const { userId } = useParams(); // userId is the name of the parameter in the route
  return <div>Details about users {userId}</div>;
};
