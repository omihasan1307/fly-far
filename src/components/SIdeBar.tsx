import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  styled,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

// Create a styled checkbox with baseColor
const BaseColorCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.baseColor?.main || "#32D095",
  "&.Mui-checked": {
    color: theme.palette.baseColor?.main || "#32D095",
  },
}));

// Create a styled slider with baseColor
const BaseColorSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.baseColor?.main || "#32D095",
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${
        theme.palette.baseColor?.main || "#32D095"
      }33`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${
        theme.palette.baseColor?.main || "#32D095"
      }33`,
    },
  },
}));

const SIdeBar = () => {
  const [priceRange, setPriceRange] = React.useState([6768, 7307]);
  const [fareType, setFareType] = React.useState({
    refundable: true,
    nonRefundable: false,
  });
  const [stops, setStops] = React.useState({
    nonStop: true,
    oneStop: false,
    onePlusStops: false,
  });
  const [departureTimes, setDepartureTimes] = React.useState({
    midnight: false,
    morning: false,
    afternoon: false,
    evening: false,
  });
  const [arrivalTimes, setArrivalTimes] = React.useState({
    midnight: false,
    morning: false,
    afternoon: false,
    evening: false,
  });

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleFareTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFareType({
      ...fareType,
      [event.target.name]: event.target.checked,
    });
  };

  const handleStopsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStops({
      ...stops,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDepartureTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartureTimes({
      ...departureTimes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleArrivalTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setArrivalTimes({
      ...arrivalTimes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleReset = () => {
    setPriceRange([6768, 7307]);
    setFareType({
      refundable: true,
      nonRefundable: false,
    });
    setStops({
      nonStop: true,
      oneStop: false,
      onePlusStops: false,
    });
    setDepartureTimes({
      midnight: false,
      morning: false,
      afternoon: false,
      evening: false,
    });
    setArrivalTimes({
      midnight: false,
      morning: false,
      afternoon: false,
      evening: false,
    });
  };

  return (
    <Paper sx={{ p: 3, width: 280 }} elevation={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#32D095" }}>
          <FilterAltIcon sx={{ mr: 1, color: "#32D095" }} />
          FILTERS
        </Typography>
        <Button
          startIcon={<RestartAltIcon sx={{ color: "#32D095" }} />}
          onClick={handleReset}
          size="small"
          sx={{ color: "#32D095" }}
        >
          RESET
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#32D095",
            "&:hover": { backgroundColor: "#2AB885" },
            flex: 1,
          }}
          size="small"
        >
          CHEAPEST
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#32D095",
            borderColor: "#32D095",
            "&:hover": { borderColor: "#2AB885" },
            flex: 1,
          }}
          size="small"
        >
          FASTEST
        </Button>
      </Box>

      <Divider sx={{ my: 2, borderColor: "#32D095" }} />

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#32D095" }}
      >
        Price Range
      </Typography>
      <BaseColorSlider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={5000}
        max={10000}
        step={100}
        sx={{ mb: 3 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ color: "#32D095" }}>
          ↓ {priceRange[0]}
        </Typography>
        <Typography variant="body2" sx={{ color: "#32D095" }}>
          ↓ {priceRange[1]}
        </Typography>
      </Box>

      <Divider sx={{ my: 2, borderColor: "#32D095" }} />

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#32D095" }}
      >
        Fare Type
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={fareType.refundable}
              onChange={handleFareTypeChange}
              name="refundable"
            />
          }
          label="Refundable"
          sx={{ color: "#32D095" }}
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={fareType.nonRefundable}
              onChange={handleFareTypeChange}
              name="nonRefundable"
            />
          }
          label="Non Refundable"
          sx={{ color: "#32D095" }}
        />
      </FormGroup>

      <Divider sx={{ my: 2, borderColor: "#32D095" }} />

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#32D095" }}
      >
        Stops
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={stops.nonStop}
              onChange={handleStopsChange}
              name="nonStop"
            />
          }
          label="Non Stop"
          sx={{ color: "#32D095" }}
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={stops.oneStop}
              onChange={handleStopsChange}
              name="oneStop"
            />
          }
          label="One Stop"
          sx={{ color: "#32D095" }}
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={stops.onePlusStops}
              onChange={handleStopsChange}
              name="onePlusStops"
            />
          }
          label="One Plus Stops"
          sx={{ color: "#32D095" }}
        />
      </FormGroup>

      <Divider sx={{ my: 2, borderColor: "#32D095" }} />

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#32D095" }}
      >
        Departure Times
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={departureTimes.midnight}
              onChange={handleDepartureTimeChange}
              name="midnight"
            />
          }
          label="00:00 - 05:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={departureTimes.morning}
              onChange={handleDepartureTimeChange}
              name="morning"
            />
          }
          label="06:00 - 11:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={departureTimes.afternoon}
              onChange={handleDepartureTimeChange}
              name="afternoon"
            />
          }
          label="12:00 - 17:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={departureTimes.evening}
              onChange={handleDepartureTimeChange}
              name="evening"
            />
          }
          label="18:00 - 23:59"
        />
      </FormGroup>

      <Divider sx={{ my: 2, borderColor: "#32D095" }} />

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1, color: "#32D095" }}
      >
        Arrival Times
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={arrivalTimes.midnight}
              onChange={handleArrivalTimeChange}
              name="midnight"
            />
          }
          label="00:00 - 05:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={arrivalTimes.morning}
              onChange={handleArrivalTimeChange}
              name="morning"
            />
          }
          label="06:00 - 11:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={arrivalTimes.afternoon}
              onChange={handleArrivalTimeChange}
              name="afternoon"
            />
          }
          label="12:00 - 17:59"
        />
        <FormControlLabel
          control={
            <BaseColorCheckbox
              checked={arrivalTimes.evening}
              onChange={handleArrivalTimeChange}
              name="evening"
            />
          }
          label="18:00 - 23:59"
        />
      </FormGroup>
    </Paper>
  );
};

export default SIdeBar;
