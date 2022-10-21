import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setSubmitFormCategory } from "../state/slices/databaseSlice";
import SubmitFormData from "./SubmitFormData";

function SubmitForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function mapCategories() {
    const categories = state.database.searchCategories.map((entry) => {
      return (
        <MenuItem value={entry.value} key={entry.value}>
          {entry.label.replace(/\b[a-z]/, (x) => x.toUpperCase())}
        </MenuItem>
      );
    });
    return categories;
  }

  mapCategories();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>Submit Data</Typography>
      <Typography>
        Here you can submit data not already contained in the database. Select a
        type from the dropdown below, and fill in the prompted fields to submit
        it!
      </Typography>
      <Box
        margin="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
        <Box
        margin="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
          <InputLabel id="event-type-label">Event Type</InputLabel>
          <Select
            labelId="event-type-label"
            id="event-type"
            value={state.database.submitFormCategory}
            label="Type"
            onChange={(e) => dispatch(setSubmitFormCategory(e.target.value))}
          >
            {mapCategories()}
          </Select>
          </Box>
        </FormControl>
      </Box>
      <SubmitFormData category={state.database.submitFormCategory} />
    </Box>
  );
}

export default SubmitForm;
