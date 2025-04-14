/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps) => {
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
};

export const getTabStyles = (
  tabValue: number,
  activeColor: string,
  value: any
) => ({
  minHeight: "48px",
  color: value === tabValue ? activeColor : "#32D095",
  backgroundColor: value === tabValue ? "#32D095" : "transparent",
  "&.Mui-selected": {
    color: activeColor,
    backgroundColor: "baseColor",
  },
  "&:hover": {
    backgroundColor: value === tabValue ? "darkBaseColor" : "action.hover",
  },
  transition: "all 0.3s ease",
  borderRadius: "9999px",
  margin: "4px",
  width: "calc(25% - 8px)",
  textTransform: "none",
  fontWeight: value === tabValue ? "bold" : "normal",
});
