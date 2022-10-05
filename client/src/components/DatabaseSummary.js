import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSummaries } from "./summarySlice";
import CreateTable from "./CreateTable";
import Typography from '@mui/material/Typography';

function DatabaseSummary() {
  // read from store
  const summaries = useSelector((state) => state.summaries);
  // console.log(summaries);

  // dispatch to store
  const dispatch = useDispatch();

  // get db summaries from api, dispatch to state
  useEffect(() => {
    fetch("/db_summary")
      .then((r) => r.json())
      .then((d) => dispatch(updateSummaries(d)));
  }, [dispatch]);

  return (
    <>
      <Typography align="center">Data Summary</Typography>
      <CreateTable tableData={summaries} />
    </>
  );
}

export default DatabaseSummary;
