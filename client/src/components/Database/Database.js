import React from "react";
import DatabaseSearch from "./DatabaseSearch";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SubmitForm from "./SubmitForm";
import Button from "@mui/material/Button";

function Database() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Database</Typography>
      <DatabaseSearch />
      <Typography>-or-</Typography>
      <Button variant="outlined" href="/submit">Submit something new</Button>
    </Box>
  );
}

export default Database;
