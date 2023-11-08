import React, { useState, onClose, useContext } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker/DateTimePicker.js";
import {AuthContext, useAuth }from "../../AuthContext.js";


function BeaconCreation() {
  const [name, setState] = useState("");
  const [game, setGame] = useState("");
  const [system, setSystem] = useState("");
  const [misc, setMisc] = useState("");
  const [location, setLocation] = useState("");
  const [players, setPlayers] = useState("");
  const [timeFrom, setFrom] = useState("");
  const [timeTo, setTo] = useState("");
  const [statusCode, setStatusCode] = useState(null);
  const {authUser} = useAuth();

  function displayText(text) {
    document.getElementById("displayArea").innerHTML = text;
    document.getElementById("displayArea").className = "font-bold relative bg-green-400 py-1 px-1 rounded float-right";
  }

  function onClose() {
    let data = {
      // exepected json schema
      host_id: "653578eeab2e358c510a1eb2", // required
      title: name, // required
      game_title: game, // required
      game_system: system, //required
      description: misc, //required
      start_date_time: timeFrom, // required
      end_date_time: timeTo, //required
      address: location, // required
      latitude: 40.758, // required
      longitude: 73.9795, // required
      num_players: players, // required
    };
    console.log(data);

    // define url and headers
    let url = "http://localhost/api/beacons";
    let logindata = {
      email: "pikachu@test.com",
      password: "secret1234",
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " + authUser,
      },
      body: JSON.stringify(data),
    };

    // make api call
    fetch(url, options)
      .then((response) => {
        const responseclone = response.clone();
        if (responseclone.ok) {
          displayText("Beacon Confirmed!");
          return responseclone; 
        }
      })

      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      /*
      .then((responseclone)=> {
        if (responseclone.ok) {
           displayText("Hey");
        }   
      })
        */

      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <div class="bg-white rounded-lg w-full leading-relaxed max-w-md mx-auto shadow-lg my-5 p-2 px-2 text-left absolute">
        <tr>
          <th className="min-w-screen min-h-screen bg-black bg-opacity-25 flex justify-center items-center">
            <label htmlFor={"input"}>Beacon Name</label>
            <input
              id={"BeaconName"}
              type={"text"}
              value={name}
              placeholder={"Name"}
              required
              onChange={(event) => {
                setState(event.target.value);
              }}
            />
          </th>
          <th className="min-w-screen min-h-screen bg-black bg-opacity-25 flex p-2 justify-center items-center">
            <label htmlFor={"input2"}>Game Title</label>
            <input
              id={"BeaconGame"}
              type={"text"}
              value={game}
              placeholder={"Type Game Here"}
              required
              onChange={(event) => {
                setGame(event.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th className="min-w-screen min-h-screen bg-black  bg-opacity-25 flex p-2 justify-center items-center">
            <label htmlFor={"input3"}>No. of players</label>
            <input
              id={"Players"}
              type={"text"}
              value={players}
              placeholder={"How many Players?"}
              required
              onChange={(event) => {
                setPlayers(event.target.value);
              }}
            />
          </th>
          <th className="min-w-screen min-h-screen bg-black bg-opacity-25 flex p-2 justify-center items-center">
            <label htmlFor={"input4"}>Game System</label>
            <input
              id={"BeaconSystem"}
              type={"text"}
              value={system}
              placeholder={"Which System?"}
              required
              onChange={(event) => {
                setSystem(event.target.value);
              }}
            />
          </th>
        </tr>
        <th className="min-w-screen min-h-screen bg-black  bg-opacity-25 flex p-2 justify-center items-center">
          <label htmlFor={"input5"}>Location</label>
          <input
            id={"Location"}
            type={"text"}
            value={location}
            placeholder={"Where to play?"}
            required
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </th>
        <tr>
          <th className="min-w-screen min-h-screen border-10 bg-black bg-opacity-25 flex p-2 span-5 justify-center items-center">
            <label htmlFor={"input6"}>Misc. Info</label>
            <input
              id={"MiscInfo"}
              type={"text"}
              value={misc}
              placeholder={"Additional Details"}
              maxLength={100}
              onChange={(event) => {
                setMisc(event.target.value);
              }}
            />
          </th>
        </tr>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="p-20">
            <DateTimePicker
              label="From: "
              value={timeFrom}
              onChange={(newValue) => setFrom(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="p-20">
            <DateTimePicker
              label="To: "
              value={timeTo}
              onChange={(newValue) => setTo(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <button
            className="font-bold relative bg-red-500 py-1 px-1 rounded float-right"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="font-bold relative bg-blue-400 py-1 px-1 rounded float-right"
            onClick={onClose}
          >
            Confirm
          </button>
          <div
            className="font-bold relative py-1 px-1 rounded float-right"
            id="displayArea"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BeaconCreation;
