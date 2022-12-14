import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserToken, setCreateAccountUsername, setCreateAccountPassword, setCreateAccountPasswordConfirmation } from "../state/slices/accountSlice";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    if (state.account.createAccountPassword === state.account.createAccountPasswordConfirmation) {
      fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: state.account.createAccountUsername,
            password: state.account.createAccountPassword,
          },
        }),
      })
        .then((r) => r.json())
        .then((data) => onCreateAccount(data));
    }
    else {
      console.log("Non-matching passwords")
    }
  }

  function onCreateAccount(data) {
    dispatch(setUser(data.user));
    dispatch(setUserToken(data.jwt))
    localStorage.setItem("jwt", data.jwt);
    navigate("/account")
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
            value={state.account.createAccountUsername}
            onChange={(e) => dispatch(setCreateAccountUsername(e.target.value))}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={state.account.createAccountPassword}
            onChange={(e) => dispatch(setCreateAccountPassword(e.target.value))}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={state.account.createAccountPasswordConfirmation}
            onChange={(e) => dispatch(setCreateAccountPasswordConfirmation(e.target.value))}
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
