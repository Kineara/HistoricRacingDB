import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { postNewSeries, setSubmitFormSeriesName, setSubmitFormSeriesVehicleType } from "../state/slices/databaseSlice";

function SubmitFormData({category}) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.database);

  console.log(state);
  function displayForm(category) {
    switch(category) {
      case "nationalities":

        break;
      case "serieses":
        function handleSubmit(e) {
          e.preventDefault()
          const data = {
            name: state.submitFormSeriesName,
            vehicle_type: state.submitFormSeriesVehicleType,
          }
          dispatch(postNewSeries(data));
        }

        return (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
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
                  onChange={(e) => dispatch(setSubmitFormSeriesName(e.target.value))}
                  />
              </div>
              <div>
                <RadioGroup 
                  aria-labelledby="vehicle-type-radio-buttons-label"
                  value={state.submitFormSeriesVehicleType}
                  onChange={(e) => dispatch(setSubmitFormSeriesVehicleType(e.target.value))}
                  name="vehicle-type-radio-buttons"
                  >
                    <FormControlLabel value="motorcycle" control={<Radio />} label="Motorcycle" />
                    <FormControlLabel value="car" control={<Radio />} label="car" />
                  </RadioGroup>
              </div>
              <div>
                <Button variant="outlined" onClick={(e) => handleSubmit(e)}>Submit</Button>
              </div>
            </Box>
        )
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
        return <></>
    }
  }
  return (
    <div> 
      {displayForm(category)}
    </div>
  )
}

export default SubmitFormData;