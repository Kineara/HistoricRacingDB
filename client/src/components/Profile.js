import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./Logout";

function Profile() {
  const user = useSelector((state) => state.account.currentUser);

  return (
    <Box>
      <Typography>Welcome, {user.username}!</Typography>
      <Logout />
    </Box>
  );
}

export default Profile;
