import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";

function Database() {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Database</Typography>
      <Outlet />
      <Typography>-or-</Typography>
      <Button variant="outlined" href="/submit">
        Submit something new
      </Button>
    </Box>
  );
}

export default Database;
