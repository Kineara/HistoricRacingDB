import React from "react";
import Box from "@mui/material/Box";
import ResultsCard from "./ResultsCard";

function DatabaseSearchResults({ data }) {
  // console.log(data);
  return (
    <Box display="flex">
      {data.map((entry) => {
        return <ResultsCard data={entry} />;
      })}
    </Box>
  );
}

export default DatabaseSearchResults;
