import React from "react";
import Box from "@mui/material/Box";
import ResultsCard from "./ResultsCard";
import Typography from "@mui/material/Typography";

function DatabaseSearchResults({ data }) {
  function parseData(data) {
    if (data) {
      const results = data.map((entry) => {
        return <ResultsCard data={entry} key={entry.id} />;
      });
      return results;
    } else {
      return <Typography>Loading...</Typography>;
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {parseData(data)}
    </Box>
  );
}

export default DatabaseSearchResults;
