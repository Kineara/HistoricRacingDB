import React from "react";

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
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;
