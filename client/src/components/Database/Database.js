import React from "react";
import DatabaseSearch from "./DatabaseSearch";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SubmitForm from "./SubmitForm";
import Button from "@mui/material/Button";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

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
      <DatabaseSearch />
      <Typography>-or-</Typography>
      <Button variant="outlined" href="/submit">Submit something new</Button>
    </Box>
  );
}

export default Database;
