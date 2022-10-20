import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector, useDispatch } from "react-redux";
import { getResultData, setSearchUrl } from "../state/slices/databaseSlice";
import { useNavigate } from "react-router-dom";

function ResultsCard({ data }) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e) {
    navigate(`/database/${state.database.searchFormEventType}/${data.id}`)
  }

  return (
    <Box sx={{ width: 300, margin: 1}} >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.name}
            </Typography>
            <CardActions>
              <Link variant="body2" underline="none" onClick={e => handleClick(e)}>View</Link>
            </CardActions>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default ResultsCard;
