import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function Account() {
  const user = useSelector((state) => state.account.currentUser);

  if (user) {
    return (
      <>
        <Typography>Welcome, {user.username}!</Typography>
        <Logout />
      </>
    );
  } else {
    return <Login />;
  }
}

export default Account;
