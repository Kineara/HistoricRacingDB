import React from "react";
import Login from "../components/Login";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../components/accountSlice";


function Account () {



  const user = useSelector((state) => state.account.currentUser)
  const dispatch = useDispatch();

  if (user) {
    return <Typography>Welcome, {user.username}!</Typography>;
  } else {
    return <Login />;
  }
}

export default Account;