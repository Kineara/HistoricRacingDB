import React from "react";
import Box from "@mui/material/Box";

function Logout() {

  function handleLogout({ onLogout }) {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      // onLogout()
      console.log("logout triggrereded");
    });
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <button onClick={handleLogout}>Logout</button>
    </Box>
  );
}

export default Logout;
