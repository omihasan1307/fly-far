import React from "react";
import SIdeBar from "./SIdeBar";
import SearchBar from "./SearchBar";
import FlightList from "./FlightList";
import roundwayJsonData from "../data/ROUNDWAY.json";

const Flight = () => {
  return (
    <div className="bg-backgroundColor">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <SIdeBar />
        </div>
        <div className="col-span-3 space-y-3">
          <SearchBar />
          <FlightList flightData={roundwayJsonData} />
        </div>
      </div>
    </div>
  );
};

export default Flight;
