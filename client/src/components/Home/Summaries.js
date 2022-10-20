import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSummaries } from "../state/slices/databaseSlice";
import CreateTable from "./SummariesTable";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DatabaseSummary() {
  const state = useSelector(state => state)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchSummaries());
  }, [dispatch]);

  return (
    <Box sx={{ p: 2, m: 5, border: "1px solid grey" }}>
      <Typography variant="h5" align="center">
        Current Data Summary
      </Typography>
        <CreateTable tableData={state.database.summaries} />
    </Box>
  );
}

export default DatabaseSummary;
