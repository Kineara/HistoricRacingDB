import React from "react";
import DatabaseSearch from "./DatabaseSearch";
import Box from "@mui/material/Box";

function Database() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <div>Database</div>
      <DatabaseSearch />
    </Box>
  );
}

export default Database;
