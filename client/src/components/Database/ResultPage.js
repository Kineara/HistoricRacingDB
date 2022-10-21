import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import DataTable from "./DataTable";
import { useSelector, useDispatch } from "react-redux";
import { getResultData } from "../state/slices/databaseSlice";
import { useParams } from "react-router-dom";



function ResultPage() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { category, id } = useParams();
  

  useEffect(() => {
    dispatch(getResultData(`/api/v1/${category}/${id}`))
  }, [dispatch, category, id])

  return (
    <Box>
      <DataTable data={state.database.searchResultData} />
    </Box>
  )
};

export default ResultPage;