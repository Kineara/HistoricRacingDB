import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import Profile from "./Profile";

function Account() {
  const user = useSelector((state) => state.account.currentUser);

  if (user) {
    return <Profile />;
  } else {
    return <Login />;
  }
}

export default Account;
