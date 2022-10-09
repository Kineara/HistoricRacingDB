import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatabaseSearchResults from "./DatabaseSearchResults.js";

function DatabaseSearch() {
  const [searchCategory, setSearchCategory] = useState("series");
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    fetch("/serieses")
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []);

  const searchCategories = [
    "nationalities",
    "series",
    "tracks",
    "teams",
    "manufacturers",
    "competitors",
  ];

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
              <MenuItem key={option} value={option}>
                {option.replace(/\b[a-z]/, (x) => x.toUpperCase())}
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
