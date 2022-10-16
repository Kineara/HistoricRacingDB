import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState } from "react";
import Box from "@mui/material/Box";

// Store JWT token
// fetch("http://localhost:3000/api/v1/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(newUserData),
// })
//   .then((r) => r.json())
//   .then((data) => {
//     // save the token to localStorage for future access
//     localStorage.setItem("jwt", data.jwt);
//     // save the user somewhere (in state!) to log the user in
//     setUser(data.user);
//   });

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
