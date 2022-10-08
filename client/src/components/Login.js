import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState } from "react";
import Box from "@mui/material/Box";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => {
        onLogin(user)
        console.log(user);
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input type="password" />
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
