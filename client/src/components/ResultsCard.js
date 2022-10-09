import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ResultsCard({ data }) {

  return (
    <Box sx={{ minWidth: 275, margin: "10px", maxWidth: "100%"}}>
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
              <Button size="small">View</Button>
            </CardActions>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default ResultsCard;
