import React from "react";
import { useState, useEffect } from "react"; 
import Login from "../components/Login";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { updateUsername, setUser } from "../components/accountSlice";


function Account () {
  const [user, setUser] = useState(null);
  console.log(user)

  const testUser = useSelector(state => state)
  console.log(testUser)

  useEffect(() => {
    fetch("/me")
    .then(response => {
      if (response.ok) {
        response.json().then(user => setUser(user));
      }
    })
  }, []);

  if (user) {
    return <Typography>Welcome, {user.username}!</Typography>;
  } else {
    return <Login onLogin={setUser} />;
  }
}

export default Account;