import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { getTabStyles, TabPanel } from "../utils/TabPanel";
import { a11yProps, tabData } from "../data/tabData";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SelectedTrip from "../utils/SelectedTrip";
import RoundTripSection from "./RoundTripSection";
import RoundedFlightData from "../data/ROUNDWAY.json";
import OneWayFlightData from "../data/ONEWAY.json";
import OneWaySection from "./OneWaySection";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [value, setValue] = React.useState(0);
  const [selectedTrip, setSelectedTrip] = React.useState("round_trip");
  const [info, setInfo] = React.useState({
    adult: 1,
    child: 0,
    infant: 0,
    tourType: "economy",
  });
  const navigate = useNavigate();

  const handleChangeExtraInfo = (
    event: SelectChangeEvent<number> | SelectChangeEvent<string>
  ) => {
    const name = event.target.name as keyof typeof info;
    setInfo({
      ...info,
      [name]:
        name === "tourType"
          ? (event.target.value as string)
          : Number(event.target.value),
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="bg-backgroundColor">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/mainbannerimg.webp"
            alt="main banner"
            className="w-full object-full"
            style={{
              height: "clamp(200px, 50vh, 600px)",
            }}
          />
          <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <Box sx={{ width: "100%" }} className="px-4">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: "white",
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="fullWidth"
                  sx={{
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  {tabData.map((tab) => (
                    <Tab
                      key={tab.label}
                      icon={tab.icon}
                      iconPosition="start"
                      label={tab.label}
                      {...a11yProps(tab.index)}
                      sx={getTabStyles(tab.index, tab.activeColor, value)}
                    />
                  ))}
                </Tabs>
              </Box>
              <br />

              <div className="max-w-screen-xl mx-auto rounded-xl bg-white lg:grid grid-cols-3">
                <div className="col-span-2">
                  {tabData.map((tab) => (
                    <TabPanel key={tab.label} value={value} index={tab.index}>
                      <SelectedTrip
                        selectedTrip={selectedTrip}
                        setSelectedTrip={setSelectedTrip}
                      />
                      <br />
                      {selectedTrip === "round_trip" && (
                        <RoundTripSection flightData={RoundedFlightData} />
                      )}
                      {selectedTrip === "one_way" && (
                        <OneWaySection flightData={OneWayFlightData} />
                      )}
                    </TabPanel>
                  ))}
                </div>

                <div className="col-span-1 pt-8 px-4 border-l-2 border-dotted border-baseColor ">
                  <div className="flex items-center justify-between gap-3 mb-6 ">
                    <Box sx={{ width: "32%" }}>
                      <FormControl fullWidth size="small">
                        <InputLabel
                          id="adult-select-label"
                          sx={{
                            color: "#32D095",
                            "&.Mui-focused": {
                              color: "#32D095",
                            },
                          }}
                        >
                          Adult
                        </InputLabel>
                        <Select
                          labelId="adult-select-label"
                          id="adult-select"
                          name="adult"
                          value={info.adult}
                          label="Adult"
                          onChange={handleChangeExtraInfo}
                          sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                              borderWidth: "1px",
                            },
                          }}
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <MenuItem key={`adult-${num}`} value={num}>
                              {num} {num !== 1 ? "Adults" : "Adult"}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ width: "32%" }}>
                      <FormControl fullWidth size="small">
                        <InputLabel
                          id="child-select-label"
                          sx={{
                            color: "#32D095",
                            "&.Mui-focused": {
                              color: "#32D095",
                            },
                          }}
                        >
                          Child
                        </InputLabel>
                        <Select
                          labelId="child-select-label"
                          id="child-select"
                          name="child"
                          value={info.child}
                          label="Child"
                          onChange={handleChangeExtraInfo}
                          sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                              borderWidth: "1px",
                            },
                          }}
                        >
                          {[0, 1, 2, 3, 4].map((num) => (
                            <MenuItem key={`child-${num}`} value={num}>
                              {num} {num !== 1 ? "Children" : "Child"}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ width: "32%" }}>
                      <FormControl fullWidth size="small">
                        <InputLabel
                          id="infant-select-label"
                          sx={{
                            color: "#32D095",
                            "&.Mui-focused": {
                              color: "#32D095",
                            },
                          }}
                        >
                          Infant
                        </InputLabel>
                        <Select
                          labelId="infant-select-label"
                          id="infant-select"
                          name="infant"
                          value={info.infant}
                          label="Infant"
                          onChange={handleChangeExtraInfo}
                          sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#32D095",
                              borderWidth: "1px",
                            },
                          }}
                        >
                          {[0, 1, 2].map((num) => (
                            <MenuItem key={`infant-${num}`} value={num}>
                              {num} {num !== 1 ? "Infants" : "Infant"}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth size="small">
                      <InputLabel
                        id="type-select-label"
                        sx={{
                          color: "#32D095",
                          "&.Mui-focused": {
                            color: "#32D095",
                          },
                        }}
                      >
                        Class
                      </InputLabel>
                      <Select
                        labelId="type-select-label"
                        id="type-select"
                        name="tourType"
                        value={info.tourType}
                        label="Class"
                        onChange={handleChangeExtraInfo}
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#32D095",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#32D095",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#32D095",
                            borderWidth: "1px",
                          },
                        }}
                      >
                        {[
                          "economy",
                          "Premium Economy",
                          "business",
                          "Premium Business",
                          "First Class",
                        ].map((type) => (
                          <MenuItem key={`type-${type}`} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <br />
                  <br />

                  <button
                    onClick={() => navigate("/flights")}
                    className="uppercase w-full bg-baseColor text-white rounded py-2 text-sm hover:bg-opacity-90 transition"
                  >
                    Search for flights
                  </button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
};
