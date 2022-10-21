import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getResultData } from "../state/slices/databaseSlice";
import { useParams } from "react-router-dom";
import ResultPage from "./ResultPage";
import { Grid } from "gridjs-react";
import RenderGrid from "./RenderGrid";

function ShowResult() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {category, id} = useParams();

  //gridjs
  // const row = () => ["riley", "hoock"];
  // const [data, setData] = useState([row()]);
  // const update = () => {
  //   setData(data.slice(0).concat([row()]));
  // }
  //-----

  // useEffect(() => {
  //   dispatch(getResultData(`/${category}/${id}`))
  //   console.log("useeffect fired")
  // }, [dispatch])
  

  function renderResult() {
    if (true) {
      return (
        <Box>
          <RenderGrid />
        </Box>
      )
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