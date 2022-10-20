import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getResultData } from "../state/slices/databaseSlice";
import { useParams } from "react-router-dom";

function ShowResult() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {category, id} = useParams();

  useEffect(() => {
    dispatch(getResultData(`/${category}/${id}`))
  }, [dispatch, category, id])
  

  function renderResult() {
    if (state.database.searchResultData) {
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