import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getNationalities,
  postNewSeries,
  postNewNationality,
  postNewTrack,
  postNewTeam,
  postNewManufacturer,
  postNewCompetitor,
  setSubmitFormSeriesName,
  setSubmitFormSeriesVehicleType,
  setSubmitFormNationalityName,
  setSubmitFormTrackName,
  setSubmitFormTeamName,
  setNationality,
  setSubmitFormManufacturerName,
  setSubmitFormCompetitorFirstName,
  setSubmitFormCompetitorLastName,
} from "../state/slices/databaseSlice";

function SubmitFormData({ category }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.database);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNationalities());
  }, [dispatch]);

  function nationalitySelect() {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="select-nationality-label"
            id="select-nationality"
            value={state.nationality}
            label="Select Nationality"
            onChange={(e) => setNationality(e.target.value)}
          >
            {state.nationalities.map((entry) => {
              return <MenuItem value={entry.id} key={entry.id}>{entry.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    );
  }

  function displayForm(category) {
    switch (category) {
      case "nationalities":
        function handleNationalitySubmit(e) {
          e.preventDefault();
          const data = {
            name: state.submitFormNationalityName,
          };
          dispatch(postNewNationality(data));
          navigate("/database/search/nationalities");
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
              <Button
                variant="outlined"
                onClick={(e) => handleNationalitySubmit(e)}
              >
                Submit
              </Button>
            </div>
          </Box>
        );

      case "serieses":
        function handleSeriesSubmit(e) {
          e.preventDefault();
          const data = {
            name: state.submitFormSeriesName,
            vehicle_type: state.submitFormSeriesVehicleType,
          };
          dispatch(postNewSeries(data));
          navigate("/database/search/serieses");
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

      case "tracks":
        function handleTrackSubmit(e) {
          e.preventDefault();
          const data = {
            
              name: state.submitFormTrackName,
              nationality_id: state.nationality,
            
          };
          dispatch(postNewTrack(data));
          navigate("/database/search/tracks");
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
                id="track-name"
                label="Track Name"
                value={state.submitFormTrackName}
                onChange={(e) =>
                  dispatch(setSubmitFormTrackName(e.target.value))
                }
              />
            </div>
            <div>
              {nationalitySelect()}
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleTrackSubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );

      case "teams":
        function handleTeamSubmit(e) {
          e.preventDefault();
          const data = {
            team: {
              name: state.submitFormTeamName,
              nationality_id: state.nationality,
            },
          };
          dispatch(postNewTeam(data));
          navigate("/database/search/teams");
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
                id="team-name"
                label="Team Name"
                value={state.submitFormTeamName}
                onChange={(e) =>
                  dispatch(setSubmitFormTeamName(e.target.value))
                }
              />
            </div>
            <div>
              {nationalitySelect()}
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleTeamSubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );
      case "manufacturers":
        function handleManufacturerSubmit(e) {
          e.preventDefault();
          const data = {
            
              name: state.submitFormManufacturerName,
              nationality_id: state.nationality,
            
          };
          dispatch(postNewManufacturer(data));
          navigate("/database/search/manufacturers");
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
                id="manufacturer-name"
                label="Manufacturer Name"
                value={state.submitFormManufacturerName}
                onChange={(e) =>
                  dispatch(setSubmitFormManufacturerName(e.target.value))
                }
              />
            </div>
            <div>
              {nationalitySelect()}
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleManufacturerSubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );
      case "competitors":
        function handleCompetitorSubmit(e) {
          e.preventDefault();
          const data = {
            
              first_name: state.submitFormCompetitorFirstName,
              last_name: state.submitFormCompetitorLastName,
              nationality_id: state.nationality,
            
          };
          dispatch(postNewCompetitor(data));
          navigate("/database/search/competitors");
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
                id="competitor-first-name"
                label="Competitor First Name"
                value={state.submitFormCompetitorFirstName}
                onChange={(e) =>
                  dispatch(setSubmitFormCompetitorFirstName(e.target.value))
                }
              />
            </div>
            <div>
              <TextField
                required
                id="competitor-last-name"
                label="Competitor Last Name"
                value={state.submitFormCompetitorLastName}
                onChange={(e) =>
                  dispatch(setSubmitFormCompetitorLastName(e.target.value))
                }
              />
            </div>
            <div>
              {nationalitySelect()}
            </div>
            <div>
              <Button variant="outlined" onClick={(e) => handleCompetitorSubmit(e)}>
                Submit
              </Button>
            </div>
          </Box>
        );
      default:
        return <div>Oops, nothing here</div>;
    }
  }
  return <div>{displayForm(category)}</div>;
}

export default SubmitFormData;
