import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSummaries } from "../State/Slices/summariesSlice";
import CreateTable from "./SummariesTable";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DatabaseSummary() {
  const summaryData = useSelector((state) => state.summaries.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummaries());
  }, [dispatch]);

  return (
    <Box sx={{ p: 2, m: 5, border: "1px solid grey" }}>
      <Typography variant="h5" align="center">
        Current Data Summary
      </Typography>
        <CreateTable tableData={summaryData} />
    </Box>
  );
}

export default DatabaseSummary;
