import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatabaseSearchResults from "./DatabaseSearchResults";
import { setSearchFormEventType } from "../state/slices/databaseSlice";
import { useSelector, useDispatch } from "react-redux";

function DatabaseSearch() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchFormEventType(e.target.value));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="select-search-category"
            select
            label="Category"
            value={state.database.searchFormEventType}
            onChange={(e) => handleChange(e)}
            helperText="Select a search category"
          >
            {state.database.searchCategories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label.replace(/\b[a-z]/, (x) => x.toUpperCase())}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <DatabaseSearchResults category={state.database.searchFormEventType} key={state.database.searchFormEventType} />
    </Box>
  );
}

export default DatabaseSearch;
