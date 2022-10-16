import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatabaseSearchResults from "./DatabaseSearchResults.js";
import { useSelector } from "react-redux";

function DatabaseSearch() {
  const [searchCategory, setSearchCategory] = useState("serieses");
  const [searchResults, setSearchResults] = useState([]);
  const state = useSelector(state => state);
  const searchCategories = state.database.categories 

  useEffect(() => {
    fetch(`/${searchCategory}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, [searchCategory]);

  const handleChange = (e) => {
    setSearchCategory(e.target.value);
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
            value={searchCategory}
            onChange={handleChange}
            helperText="Select a search category"
          >
            {searchCategories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label.replace(/\b[a-z]/, (x) => x.toUpperCase())}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <DatabaseSearchResults data={searchResults} />
    </Box>
  );
}

export default DatabaseSearch;
