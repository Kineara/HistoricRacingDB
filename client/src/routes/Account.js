import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";

function Account() {
  const user = useSelector((state) => state.account.currentUser);

  if (user) {
    return <Profile />;
  } else {
    return <Login />;
  }
}

export default Account;
