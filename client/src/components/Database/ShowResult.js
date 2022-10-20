import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getResultData } from "../state/slices/databaseSlice";

function ShowResult() {
  const store = useSelector(store => store);
  

  function renderResult() {
    if (store.database.searchResultData) {
      return <Typography>Yay data</Typography>
    } else {
      return <Typography>Oops, nothing here...</Typography>
    }
  }
  

  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    >
      {renderResult()}
    </Box>
  )
}

export default ShowResult;