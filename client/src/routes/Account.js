import React from "react";
import { useState, useEffect } from "react"; 
import Login from "../components/Login";

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
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }
}

export default Account;