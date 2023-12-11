import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext.js";

const GetBeaconById = (id) => {
  const { authUser } = useAuth();
  const [beaconData, setBeaconData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // define url and headers
      let url = `http://localhost/api/beacons/${id}`;
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + authUser,
        },
      };
      try {
        // make api call
        const response = await fetch(url, options);

        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON and return it
        const data = await response.json();
        setBeaconData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You might want to throw the error or handle it in some way
        throw error;
      }
    };

    fetchData();
  }, [id, authUser]); // Add authUser as a dependency if needed

  return beaconData;
};

export default GetBeaconById;
