import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFormEventType } from "../state/slices/databaseSlice";

function SubmitForm() {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>Submit Data</Typography>
      <Typography>Here you can submit data not already contained in the database. Select a type from the dropdown below, and fill in the prompted fields to submit it!</Typography>
      <FormControl>
        <InputLabel id="event-type-label">Event Type</InputLabel>
        <Select 
          labelId="event-type-label"
          id="event-type"
          value={state.database.searchFormEventType}
          label="Type"
          onChange={(e) => dispatch(setSearchFormEventType(e.target.value))}
          >
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="competitor">Competitor</MenuItem>
          </Select>
      </FormControl>
    </Box>
  )
}

export default SubmitForm;