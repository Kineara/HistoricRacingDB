import React from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setUser } from "../state/slices/accountSlice";

function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setUser(null));
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
