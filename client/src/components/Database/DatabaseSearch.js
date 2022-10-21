import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { setSearchFormEventType } from "../state/slices/databaseSlice";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useParams, useNavigate } from "react-router-dom";

function DatabaseSearch() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let redirect = true;
  const {category} = useParams();


  if (category === undefined) {
    redirect = true;
  } else {
    redirect = false;
  }

  const handleChange = (e) => {
    dispatch(setSearchFormEventType(e.target.value));
    navigate(`/database/search/${e.target.value}`)
  };

  useEffect(() => {
    if (redirect) {
      navigate(`/database/search/${state.database.searchFormEventType}`);
    }
  }, [state.database.searchFormEventType]);

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
      <Outlet />
    </Box>
  );
}

export default DatabaseSearch;
