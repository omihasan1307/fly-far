/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import {
  Box,
  styled,
  TextField,
  InputAdornment,
  MenuItem,
  Popover,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StyledFlightIcon = styled(FlightIcon)(({ theme }) => ({
  color: theme.palette.baseColor?.main || "#32D095",
  transform: "rotate(90deg)",
  fontSize: "64px",
}));

const StyledReturnFlightIcon = styled(FlightIcon)(({ theme }) => ({
  color: theme.palette.baseColor?.main || "#32D095",
  transform: "rotate(270deg)",
  fontSize: "64px",
}));

const OneWaySection = ({ flightData }: any) => {
  const [selectedDeparture, setSelectedDeparture] = useState(
    flightData.godeparture
  );
  const [selectedArrival, setSelectedArrival] = useState(flightData.goarrival);
  const [departureAnchorEl, setDepartureAnchorEl] =
    useState<null | HTMLElement>(null);
  const [arrivalAnchorEl, setArrivalAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());

  const departureOptions = [
    {
      code: flightData.godeparture,
      name: flightData.segments.go[0].departureAirport,
      time: flightData.godepartureTime,
      date: flightData.godepartureDate,
    },
  ];

  const arrivalOptions = [
    {
      code: flightData.goarrival,
      name: flightData.segments.go[0].arrivalAirport,
      time: flightData.goarrivalTime,
      date: flightData.goarrivalDate,
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="rounded-lg p-4 grid grid-cols-3 gap-5 place-items-center">
        {/* Departure Section */}
        <div className="flex items-center flex-col space-y-2 w-full">
          <div className="flex items-center flex-col space-y-2 w-full">
            <h1 className="text-sm text-gray-600">FROM</h1>
            <p className="text-4xl text-baseColor font-semibold">
              {selectedDeparture}
            </p>

            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={selectedDeparture}
              onClick={(e) => setDepartureAnchorEl(e.currentTarget)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightIcon style={{ color: "#32D095" }} />
                  </InputAdornment>
                ),
                readOnly: true,
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32D095",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32D095",
                  },
                },
              }}
            />

            <Popover
              open={Boolean(departureAnchorEl)}
              anchorEl={departureAnchorEl}
              onClose={() => setDepartureAnchorEl(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <div className="p-2 w-48">
                {departureOptions.map((option) => (
                  <MenuItem
                    key={`dep-${option.code}`}
                    onClick={() => {
                      setSelectedDeparture(option.code);
                      setDepartureAnchorEl(null);
                    }}
                    className="text-sm"
                  >
                    {option.code} - {option.name}
                  </MenuItem>
                ))}
              </div>
            </Popover>

            <DatePicker
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                  sx: {
                    mt: 1,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#32D095",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#32D095",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Flight Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
            }}
          >
            <StyledFlightIcon />
            <StyledReturnFlightIcon />
          </Box>
        </Box>

        {/* Arrival Section */}
        <div className="flex items-center flex-col space-y-2 w-full">
          <div className="flex items-center flex-col space-y-2 w-full">
            <h1 className="text-sm text-gray-600">TO</h1>
            <p className="text-4xl text-baseColor font-semibold">
              {selectedArrival}
            </p>

            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={selectedArrival}
              onClick={(e) => setArrivalAnchorEl(e.currentTarget)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightIcon style={{ color: "#32D095" }} />
                  </InputAdornment>
                ),
                readOnly: true,
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32D095",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32D095",
                  },
                },
              }}
            />

            <Popover
              open={Boolean(arrivalAnchorEl)}
              anchorEl={arrivalAnchorEl}
              onClose={() => setArrivalAnchorEl(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <div className="p-2 w-48">
                {arrivalOptions.map((option) => (
                  <MenuItem
                    key={`arr-${option.code}`}
                    onClick={() => {
                      setSelectedArrival(option.code);
                      setArrivalAnchorEl(null);
                    }}
                    className="text-sm"
                  >
                    {option.code} - {option.name}
                  </MenuItem>
                ))}
              </div>
            </Popover>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default OneWaySection;
