import { Typography } from "@mui/material";
import React from "react";
import DatabaseSummary from '../components/DatabaseSummary';

function Home() {
  


  return (
    <>
      <Typography>Welcome to the Historic Racing Database</Typography>
      <DatabaseSummary />
    </>
  );
}

export default Home;
