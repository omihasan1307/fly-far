import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import ExploreIcon from "@mui/icons-material/Explore";
import ReceiptIcon from "@mui/icons-material/Receipt";

export interface TabConfig {
  label: string;
  icon: React.ReactElement; // More specific type
  activeColor: string;
  index: number;
}

// Create icon components first
const icons = {
  flight: <FlightIcon />,
  hotel: <HotelIcon />,
  explore: <ExploreIcon />,
  receipt: <ReceiptIcon />,
};

export const tabData: TabConfig[] = [
  {
    label: "FLIGHT",
    icon: icons.flight,
    activeColor: "white",
    index: 0,
  },
  {
    label: "HOTEL",
    icon: icons.hotel,
    activeColor: "white",
    index: 1,
  },
  {
    label: "TOUR",
    icon: icons.explore,
    activeColor: "white",
    index: 2,
  },
  {
    label: "VISA",
    icon: icons.receipt,
    activeColor: "white",
    index: 3,
  },
];

export const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});
