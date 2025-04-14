import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HeroDuplicate = () => {
  const [value, setValue] = React.useState(0);

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
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <Box sx={{ width: "100%" }} className="px-8">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: "white",
                  borderRadius: "4px 4px 0 0",
                }}
                className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="FLIGHT" {...a11yProps(0)} />
                  <Tab label="HOTEL" {...a11yProps(1)} />
                  <Tab label="TOUR" {...a11yProps(2)} />
                  <Tab label="VISA" {...a11yProps(3)} />
                </Tabs>
              </Box>

              {/* Flight Search Panel */}
              <CustomTabPanel value={value} index={0}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0 0 4px 4px",
                    p: 2,
                  }}
                  className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
                >
                  {/* Flight Type */}
                  <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1a237e",
                        "&:hover": { backgroundColor: "#303f9f" },
                        textTransform: "none",
                        borderRadius: "4px",
                        px: 2,
                        py: 1,
                      }}
                    >
                      FOUND-WAY
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#1a237e",
                        color: "#1a237e",
                        textTransform: "none",
                        borderRadius: "4px",
                        px: 2,
                        py: 1,
                      }}
                    >
                      ONE-WAY
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#1a237e",
                        color: "#1a237e",
                        textTransform: "none",
                        borderRadius: "4px",
                        px: 2,
                        py: 1,
                      }}
                    >
                      MULTI-CITY
                    </Button>
                  </Box>

                  {/* From/To Section */}
                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        FROM DAC
                      </Typography>
                      <Typography variant="h6">
                        Hazrat Shahjabi Int Airport (DAC)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        19 Mar 25
                      </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        TO CXB
                      </Typography>
                      <Typography variant="h6">
                        Cox's Bazar Airport (CXB)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        21 Mar 25
                      </Typography>
                    </Box>
                  </Box>

                  {/* Visa Section */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      VISA
                    </Typography>
                    <Typography variant="body1">I-VOLUT</Typography>
                    <Typography variant="body2" color="text.secondary">
                      0 CHILD • 0 WENT
                    </Typography>
                  </Box>

                  {/* Class & Search */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Economy</Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1a237e",
                        "&:hover": { backgroundColor: "#303f9f" },
                        textTransform: "none",
                        borderRadius: "4px",
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      SEARCH FOR FLIGHT
                    </Button>
                  </Box>
                </Box>
              </CustomTabPanel>

              {/* Other Tab Panels */}
              <CustomTabPanel value={value} index={1}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0 0 4px 4px",
                    p: 3,
                  }}
                  className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
                >
                  Hotel Search Content
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0 0 4px 4px",
                    p: 3,
                  }}
                  className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
                >
                  Tour Search Content
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0 0 4px 4px",
                    p: 3,
                  }}
                  className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto"
                >
                  Visa Search Content
                </Box>
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroDuplicate;
