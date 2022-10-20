import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SubmitForm from "./SubmitForm";
import Button from "@mui/material/Button";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchFormEventType } from "../state/slices/databaseSlice";

function Database() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setSearchFormEventType(e.target.value));
  };

  useEffect(() => {
    navigate(`/database/${state.database.searchFormEventType}`);
  }, [state.database.searchFormEventType]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Database</Typography>
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
        {/* <Outlet /> */}
        {/* <DatabaseSearchResults category={state.database.searchFormEventType} key={state.database.searchFormEventType} /> */}
      </Box>
      <Outlet />
      <Typography>-or-</Typography>
      <Button variant="outlined" href="/submit">
        Submit something new
      </Button>
    </Box>
  );
}

export default Database;
