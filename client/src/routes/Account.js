import React from "react";
import Login from "../components/Login";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../components/accountSlice";


function Account () {

  function onLogin(data) {
    dispatch(setUser(data.user));
    localStorage.setItem("jwt", data.jwt);
  }

  const user = useSelector((state) => state.account.currentUser)
  const dispatch = useDispatch();

  if (user) {
    return <Typography>Welcome, {user.username}!</Typography>;
  } else {
    return <Login onLogin={onLogin}/>;
  }
}

export default Account;