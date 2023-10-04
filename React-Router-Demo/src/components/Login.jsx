import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path ?? "/";

  const handleLogin = () => {
    auth.login(username);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Username:{" "}
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
