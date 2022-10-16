import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserToken } from "../State/Slices/accountSlice";
import { setUsername, setPassword } from "../State/Slices/loginSlice";

function Login() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.login.username);
  const password = useSelector(state => state.login.password);

  function onLogin(data) {
    dispatch(setUser(data.user));
    dispatch(setUserToken(data.jwt))
    localStorage.setItem("jwt", data.jwt);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: {
        username,
        password,
      } }),
    })
      .then((r) => r.json())
      .then((data) => {
        onLogin(data)
      });
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>Please log in to continue</Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
          <button type="submit">Login</button>
        </Box>
      </form>

      <Typography>
        No account? <Link href="/createAccount" underline="none">Create one</Link> to upload and
        save events!
      </Typography>
    </Box>
  );
}

export default Login;
