import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserToken } from "../State/Slices/accountSlice";
import { setUsername, setPassword, setPasswordConfirmation } from "../State/Slices/createAccountSlice";

function CreateAccount() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.createAccount.username);
  const password = useSelector(state => state.createAccount.password);
  const passwordConfirmation = useSelector(state => state.createAccount.passwordConfirmation);

  const state = useSelector(state => state);
  console.log(state);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === passwordConfirmation) {
      fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
            // password_confirmation: passwordConfirmation,
          },
        }),
      })
        .then((r) => r.json())
        .then((data) => onCreateAccount(data));
    }
    else {
      console.log("fix your password yo")
    }
  }

  function onCreateAccount(data) {
    dispatch(setUser(data.user));
    dispatch(setUserToken(data.jwt))
    localStorage.setItem("jwt", data.jwt);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>Create an Account</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => dispatch(setPasswordConfirmation(e.target.value))}
          />
          <button type="submit">Submit</button>
        </Box>
      </form>
      <Typography>
        <Link href="/login" underline="none">
          Back to login
        </Link>
      </Typography>
    </Box>
  );
}

export default CreateAccount;
