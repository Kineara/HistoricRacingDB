import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postNewSeries,
  postNewNationality,
  setSubmitFormSeriesName,
  setSubmitFormSeriesVehicleType,
  setSubmitFormNationalityName,
} from "../state/slices/databaseSlice";

function SubmitFormData({ category }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.database);
  const navigate = useNavigate();

  console.log(state);
  function displayForm(category) {
    switch (category) {
      case "nationalities":
        function handleNationalitySubmit(e) {
          e.preventDefault();
          const data = {
            name: state.submitFormNationalityName,
          };
          dispatch(postNewNationality(data));
          navigate("/database/search/nationalities")
        }
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
                required
                id="nationality-name"
                label="Nationality Name"
                value={state.submitFormNationalityName}
                onChange={(e) =>
                  dispatch(setSubmitFormNationalityName(e.target.value))
                }
              />
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleNationalitySubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );
        break;
      case "serieses":
        function handleSeriesSubmit(e) {
          e.preventDefault();
          const data = {
            name: state.submitFormSeriesName,
            vehicle_type: state.submitFormSeriesVehicleType,
          };
          dispatch(postNewSeries(data));
          navigate("/database/search/serieses")
        }

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
                required
                id="series-name"
                label="Series Name"
                value={state.submitFormSeriesName}
                onChange={(e) =>
                  dispatch(setSubmitFormSeriesName(e.target.value))
                }
              />
            </div>
            <div>
              <RadioGroup
                aria-labelledby="vehicle-type-radio-buttons-label"
                value={state.submitFormSeriesVehicleType}
                onChange={(e) =>
                  dispatch(setSubmitFormSeriesVehicleType(e.target.value))
                }
                name="vehicle-type-radio-buttons"
              >
                <FormControlLabel
                  value="motorcycle"
                  control={<Radio />}
                  label="Motorcycle"
                />
                <FormControlLabel value="car" control={<Radio />} label="car" />
              </RadioGroup>
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleSeriesSubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );
        break;
      case "tracks":
        break;
      case "teams":
        break;
      case "manufacturers":
        break;
      case "competitors":
        break;
      default:
        return <></>;
    }
  }
  return <div>{displayForm(category)}</div>;
}

export default SubmitFormData;
