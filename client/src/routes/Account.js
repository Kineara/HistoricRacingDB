import React from "react";
import { useState, useEffect } from "react"; 
import Login from "../components/Login";
import Typography from '@mui/material/Typography';


function Account () {
  const [user, setUser] = useState(null);

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