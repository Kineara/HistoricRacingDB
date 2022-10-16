import React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../components/accountSlice";

function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setUser(null));
    console.log("logout triggrereded");
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <button onClick={handleLogout}>Logout</button>
    </Box>
  );
}

export default Logout;
