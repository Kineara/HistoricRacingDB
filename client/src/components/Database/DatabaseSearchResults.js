import React from "react";
import Box from "@mui/material/Box";
import ResultsCard from "./ResultsCard";

function DatabaseSearchResults({ data }) {
  // console.log(data);
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
      {data.map((entry) => {
        return <ResultsCard data={entry} key={entry.id}/>;
      })}
    </Box>
  );
}

export default DatabaseSearchResults;
