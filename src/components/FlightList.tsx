/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Paper,
  Modal,
  IconButton,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FlightList = ({ flightData }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeString: any) => {
    return timeString.split("T")[1]?.slice(0, 5);
  };

  return (
    <div>
      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <div className="grid grid-cols-4  gap-5">
          <div className="col-span-3">
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {flightData.segments.go[0].marketingcareerName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#32D095" }}>
                    {flightData.segments.go[0].marketingcareer}-
                    {flightData.segments.go[0].marketingflight}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#32D095" }}
                  >
                    {flightData.godeparture}
                  </Typography>
                  <Typography variant="subtitle2">
                    {flightData.segments.go[0].departureAirport}
                  </Typography>
                  <Typography variant="body2">
                    {formatTime(flightData.segments.go[0].departureTime)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#32D095" }}>
                    {formatDate(flightData.segments.go[0].departureTime)}
                  </Typography>
                </Box>
                <FlightIcon
                  sx={{
                    color: "#32D095",
                    transform: "rotate(90deg)",
                    fontSize: "100px",
                  }}
                />
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#32D095" }}
                  >
                    {flightData.backdeparture}
                  </Typography>

                  <Typography variant="subtitle2">
                    {flightData.segments.go[0].arrivalAirport}
                  </Typography>
                  <Typography variant="body2">
                    {formatTime(flightData.segments.go[0].arrivalTime)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#32D095" }}>
                    {formatDate(flightData.segments.go[0].arrivalTime)}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <div className="text-center space-y-1">
                  <Typography variant="body2">
                    {flightData.goflightduration}
                  </Typography>
                  <Divider />
                  <Typography variant="body2" sx={{ color: "#32D095" }}>
                    NON STOP
                  </Typography>
                </div>
                <Typography variant="body2" sx={{ color: "#32D095" }}>
                  {flightData.refundable}
                </Typography>
                <Typography variant="body2">{flightData.class}</Typography>
                <Typography variant="body2">{flightData.bags} Kg</Typography>
              </Box>
            </Box>
          </div>
          <div className="col-span-1 text-right">
            <Box
              sx={{
                borderLeft: "1px dotted #32D095",
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="h4" sx={{ color: "#32D095" }}>
                <span>৳</span>
                {flightData.BasePrice}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#32D095",
                  textDecoration: "line-through",
                  opacity: 0.7,
                }}
              >
                <span style={{ color: "#32D095" }}>৳</span>{" "}
                {flightData.customerPrice}
              </Typography>

              <Box
                sx={{
                  mt: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#32D095",
                    "&:hover": { backgroundColor: "#2AB885" },
                    py: 1,
                  }}
                >
                  BOOK NOW
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  endIcon={
                    <ArrowForwardIosIcon sx={{ fontSize: "0.875rem" }} />
                  }
                  sx={{
                    color: "#32D095",
                    borderColor: "#32D095",
                    "&:hover": { borderColor: "#2AB885" },
                    py: 1,
                  }}
                  onClick={handleOpenModal}
                >
                  FLIGHT DETAILS
                </Button>
              </Box>
            </Box>
          </div>
        </div>

        {/* Flight Details Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              overflowY: "auto",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography variant="h6" sx={{ color: "#32D095" }}>
                Flight Details
              </Typography>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Flight Itinerary */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {flightData.godeparture} to {flightData.goarrival}
              </Typography>

              <Paper sx={{ p: 2, mb: 2 }} elevation={1}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {flightData.segments.go[0].marketingcareerName}
                  </Typography>
                  <Typography variant="body1">
                    {flightData.segments.go[0].marketingcareer}-
                    {flightData.segments.go[0].marketingflight}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {formatTime(flightData.segments.go[0].departureTime)}
                    </Typography>
                    <Typography variant="body2">
                      {formatDate(flightData.segments.go[0].departureTime)}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {flightData.segments.go[0].departureAirport}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2">
                      {flightData.goflightduration}
                    </Typography>
                    <Divider sx={{ my: 1 }}>
                      <FlightIcon
                        sx={{
                          color: "#32D095",
                          transform: "rotate(90deg)",
                          fontSize: "1rem",
                        }}
                      />
                    </Divider>
                    <Typography variant="body2" sx={{ color: "#32D095" }}>
                      NON STOP
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {formatTime(flightData.segments.go[0].arrivalTime)}
                    </Typography>
                    <Typography variant="body2">
                      {formatDate(flightData.segments.go[0].arrivalTime)}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {flightData.segments.go[0].arrivalAirport}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>

            {/* Flight Information */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Flight Information
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Class
                  </Typography>
                  <Typography variant="body2">{flightData.class}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Baggage
                  </Typography>
                  <Typography variant="body2">{flightData.bags} Kg</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Refundable
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#32D095" }}>
                    {flightData.refundable}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Last Ticket Time
                  </Typography>
                  <Typography variant="body2">
                    {formatTime(flightData.lastTicketTime)}{" "}
                    {formatDate(flightData.lastTicketTime)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Price Breakdown */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Price Breakdown
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Base Fare</Typography>
                <Typography variant="body2">
                  BDT {flightData.BasePrice}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Taxes & Fees</Typography>
                <Typography variant="body2">BDT {flightData.Taxes}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Total Price
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#32D095" }}
                >
                  BDT {flightData.customerPrice}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Paper>
    </div>
  );
};

export default FlightList;
