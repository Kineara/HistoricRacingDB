import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatabaseSearchResults from "./DatabaseSearchResults";
import fetchSearchResults from "../state/slices/databaseSlice";
import { setSearchFormEventType } from "../state/slices/databaseSlice";
import { useSelector, useDispatch } from "react-redux";

function DatabaseSearch() {
  // const [searchCategory, setSearchCategory] = useState("serieses");
  // const [searchResults, setSearchResults] = useState([]);
  const state = useSelector((state) => state);
  // const searchCategories = state.database.searchCategories

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [dispatch]);

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
            onChange={handleChange}
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
      <DatabaseSearchResults data={fetchSearchResults(state.database.searchFormEventType)} />
    </Box>
  );
}

export default DatabaseSearch;
