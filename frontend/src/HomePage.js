import React from "react";
import MapContainer from "./components/Beacon/MapContainer.js";
import GetBeaconInfo from "./components/BeaconInfo/GetBeaconInfo.js";

const HomePage = ({beaconList}) => {

  const beaconList2 = GetBeaconInfo();

  // console.log("coordinates");
  // console.log(beaconList2[0].coordinates.coordinates[0]);
  // console.log(beaconList2[0].coordinates.coordinates[1]);
  return (
    <>
      <MapContainer beaconList={beaconList2} />
      {/* <BeaconInfoWindow /> */}
    </>
  );
};

export default HomePage;
