import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function DatabaseSearch() {
  const [searchCategory, setSearchCategory] = useState("series");

  useEffect(() => {
    fetch("/serieses")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const searchCategories = ["series", "tracks", "teams", "manufacturers", "competitors"];

  const handleChange = (e) => {
    setSearchCategory(e.target.value);
  };

  return (
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
                {option.replace(/\b[a-z]/, x => x.toUpperCase())}
              </MenuItem>
            ))}
          </TextField>
      </div>
    </Box>
  );
}

export default DatabaseSearch;
