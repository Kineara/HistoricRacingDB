import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ResultsCard from "./ResultsCard";
import Typography from "@mui/material/Typography";
import { fetchSearchResults } from "../state/slices/databaseSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function DatabaseSearchResults() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {category} = useParams();
  console.log(category);

  useEffect(() => {
    dispatch(fetchSearchResults(category));
  }, [dispatch, category])

  function renderResults(results) {
    if (results) {
      const render = results.map((entry) => {
        return <ResultsCard data={entry} key={entry.id} />;
      });
      return render;
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
      {renderResults(state.database.searchResults)}
    </Box>
  );
}

export default DatabaseSearchResults;
