import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import DatabaseSummary from "./Summaries";
import Link from "@mui/material/Link";

function Home() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Historic Racing Database
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Welcome to the Historic Racing Database! Here you'll find a compendium
        of racing history, including historical results, grid lists, competitor
        data, and series information. The database aims to be a one-stop
        location for all things racing related, past to present, so if you have
        access to information that isn't yet in the database, why not{" "}
        <Link href="/createAccount" underline="none">
          create an account
        </Link>{" "}
        and upload them today!
      </Typography>
      <DatabaseSummary />
    </Box>
  );
}

export default Home;
