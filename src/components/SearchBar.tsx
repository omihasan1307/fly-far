import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import PeopleIcon from "@mui/icons-material/People";
import EditIcon from "@mui/icons-material/Edit";

const SearchBar = () => {
  return (
    <div>
      <Paper elevation={3} sx={{ mb: 2, borderRadius: 2 }}>
        <Box
          sx={{
            px: 3,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#32D095",
            borderRadius: "5px",
          }}
        >
          {/* Flight route and info */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              DAC – CXB
              <FlightIcon
                sx={{ mx: 1, color: "white", transform: "rotate(90deg)" }}
              />
              Total 3 Flights
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
              14 Apr 2025
              <PeopleIcon sx={{ mx: 1, fontSize: "1rem", color: "white" }} />1
              Traveler
            </Typography>
          </Box>

          {/* Modify search button */}
          <Button
            variant="contained"
            startIcon={<EditIcon sx={{ color: "white" }} />}
            sx={{
              color: "white",
              borderColor: "#white",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(50, 208, 149, 0.08)",
              },
            }}
          >
            MODIFY SEARCH
          </Button>
        </Box>
      </Paper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          border: "1px solid white",
          backgroundColor: "white",
          p: 1,
          borderRadius: "5px",
        }}
      >
        <Typography variant="body1">BS</Typography>
        <Typography variant="h6" sx={{ color: "#32D095" }}>
          BDT 5,539
        </Typography>
      </Box>
    </div>
  );
};

export default SearchBar;
