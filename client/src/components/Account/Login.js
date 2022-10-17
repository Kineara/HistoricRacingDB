import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserToken, setLoginUsername, setLoginPassword } from "../state/slices/accountSlice";

function Login() {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

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
        username: state.account.loginUsername,
        password: state.account.loginPassword,
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
            value={state.account.loginUsername}
            onChange={(e) => dispatch(setLoginUsername(e.target.value))}
          />
          <label htmlFor="password">Password</label>
          <input type="password" value={state.account.loginPassword} onChange={(e) => dispatch(setLoginPassword(e.target.value))}/>
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
