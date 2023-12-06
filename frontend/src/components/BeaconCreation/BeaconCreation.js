import React, { useState, useContext, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker/DateTimePicker.js";
import { useAuth } from "../../AuthContext.js";
import { Link } from "react-router-dom";
import Echo from 'laravel-echo';
// import { useHistory } from 'react-router-dom'
import useEchoStore from "../../useEchoStore.js";

import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } 
    from "use-places-autocomplete";
 import {
     Combobox,
     ComboboxInput,
     ComboboxPopover,
     ComboboxList,
     ComboboxOption,
 } from "@reach/combobox";
 import "@reach/combobox/styles.css"
import {Places} from "../places.js";

function BeaconCreation({ beaconList }) {
    const [game, setGame] = useState(""); //game_title
    const [gameConsole, setConsole] = useState(""); //console
    const [description, setDesc] = useState(""); //description
    const [placeName, setPlaceName] = useState(""); //place_name
    const [address, setAddress] = useState(""); //address_street
    const [players, setPlayers] = useState(""); //player_wanted
    const [timeFrom, setFrom] = useState(""); //start_date_time
    const [timeTo, setTo] = useState(""); //end_date_time
    const [controllers, setControllers] = useState(""); //controllers_wanted
    const [statusCode, setStatusCode] = useState(null);
    const { authUser, userId } = useAuth();

    // const {isLoaded} = useLoadScript({
    //    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //    libraries: ["places"],
    // });
        // const PlacesAutocomplete = ({ setSelected }) => {
        //     const {
        //         ready,
        //         value,
        //         setValue,
        //         suggestions: { status, data },
        //         clearSuggestions,
        //     } = usePlacesAutocomplete();
   
        //     const handleSelect = async (value) => {
        //         setValue(address, false);
        //         clearSuggestions();
   
        //         const results = await getGeocode({address});
        //         const { lat, lng } = await getLatLng(results[0]);
        //         setSelected({ lat, lng });
        //     }
        //     return (
        //         <Combobox onSelect={handleSelect}>
        //             <ComboboxInput
        //                 value={address}
        //                 onChange={(event) => setPlaceName(event.target.value)}
        //                 disabled={!ready}
        //                 className="combobox-input"
        //                 placeholder="Search address"
        //             />
        //             <ComboboxPopover>
        //                 <ComboboxList>
        //                     {status === "OK" &&
        //                         data.map(({ place_id, description }) => (
        //                             <ComboboxOption key={place_id} value={description} />
        //                         ))}
        //                 </ComboboxList>
        //             </ComboboxPopover>
        //         </Combobox>
        //     );
        // };
     
    // const laravelEcho = useEchoStore((state) => state.laravelEcho);

    // {  DataFields
    //   console
    //   controllers_wanted
    //   created_at
    //   description
    //   end_date_time
    //   game_image
    //   game_title
    //   host_id
    //   id
    //   latitude
    //   longitude
    //   place_name
    //   players_wanted
    //   start_date_time
    //   street_address
    //   updated_at
    // }

    function displayText(text) {
        document.getElementById("displayArea").innerHTML = text;
        document.getElementById("displayArea").className =
            "font-bold relative bg-green-400 py-1 px-1 rounded float-right";
    }

    function clearForm() {
        setGame("");
        setDesc("");
        setConsole("");
        setPlayers("");
        setControllers("");
        setPlaceName("");
        setFrom("");
        setTo("");
    }

    useEffect(() => {
        const laravelEcho = new Echo({
            broadcaster: 'pusher',
            key: process.env.REACT_APP_PUSHER_APP_KEY,
            cluster: process.env.REACT_APP_PUSHER_CLUSTER,
            forceTLS: true
        });
        console.log(laravelEcho);

        // Connect to a public websocket channel
        laravelEcho.channel("new-beacon").listen("BeaconCreated", (e) => {
            // runs every time data ia pushed through the websocket
            console.log(e.beacon);
        });

        // Cleanup function to disconnect the Echo instance when the component unmounts
        return () => {
            laravelEcho.disconnect();
        };

    }, []); // Empty dependency array ensures this runs on mount and unmount only

    function onClose() {
        let data = {
            console: gameConsole,
            controllers_wanted: controllers,
            description: description,
            end_date_time: timeTo,
            game_title: game,
            host_id: userId,
            place_name: placeName,
            players_wanted: players,
            start_date_time: timeFrom,
            street_address: address,
            latitude: "39.981985",
            longitude: "-75.155562"
        };
        console.log(data);

        

        // const beaconListData = {
        //     circleLat: data.latitude,
        //     circleLng: data.longitude,
        //     beaconInfo: {
        //         username: data.host_id,
        //         gameTitle: data.game_title,
        //         console: data.game_system,
        //         miscInfo: data.misc,
        //         startTime: data.start_date_time,
        //         endTime: data.end_date_time,
        //         playerInfo: {
        //             wanted: data.num_players,
        //         },
        //         address: {
        //             address: data.address,
        //         },
        //     },
        // };

        // beaconList.push(beaconListData);
        // console.log(beaconList);

        // history.push("/");

        // define url and headers
        let url = "http://localhost/api/beacons";
        let logindata = {
            email: 'pikachu@test.com',
            password: 'secret1234',
        };
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + authUser,
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

            .catch((error) => console.log("error", error));
    }

    const [selected, setSelected] = useState(null);
    // return (
    //     <div class="bg-white rounded-lg w-full md:w-1/2 flex-col items-center justify-center m-auto shadow-lg p-4 h-auto">
    //         <tr>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input"}><br />Beacon Name<br /></label>
    //                 <input
    //                     className="m-auto p-1 border-2 border-teal-100"
    //                     id={"BeaconName"}
    //                     type={"text"}
    //                     value={name}
    //                     placeholder={"Name"}
    //                     required
    //                     onChange={(event) => {
    //                         setState(event.target.value);
    //                     }}
    //                 />
    //             </td>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input2"}><br />Game Title<br /></label>
    //                 <input
    //                     className="m-auto p-1 border-2 border-teal-100"
    //                     id={"BeaconGame"}
    //                     type={"text"}
    //                     value={game}
    //                     placeholder={"Type Game Here"}
    //                     required
    //                     onChange={(event) => {
    //                         setGame(event.target.value);
    //                     }}
    //                 />
    //             </td>
    //         </tr>
    //         <tr>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input3"}> <br />No. of players<br /></label>
    //                 <input
    //                     className="m-auto p-1 border-2 border-teal-100"
    //                     id={"Players"}
    //                     type={"number"}
    //                     min={2}
    //                     value={players}
    //                     placeholder={"How many Players?"}
    //                     required
    //                     onChange={(event) => {
    //                         setPlayers(event.target.value);
    //                     }}
    //                 />
    //             </td>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input4"}> <br />Game System<br /></label>
    //                 <input
    //                     className="m-auto p-1 border-2 border-teal-100"
    //                     id={"BeaconSystem"}
    //                     type={"text"}
    //                     value={system}
    //                     placeholder={"Which System?"}
    //                     required
    //                     onChange={(event) => {
    //                         setSystem(event.target.value);
    //                     }}
    //                 />
    //             </td>
    //         </tr>
    //         <tr>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input5"}>Location</label>
    //                 <div className="places-container min-w-auto min-h-auto text-sky-950 p-2">
    //                     <PlacesAutocomplete setSelected={setSelected} />
    //                 </div>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td className="min-w-auto min-h-auto text-sky-950 p-2">
    //                 <label htmlFor={"input6"}>Misc. Info</label>
    //                 <input
    //                     className="m-auto p-1 border-2 border-teal-100 w-full"
    //                     id={"MiscInfo"}
    //                     type={"text"}
    //                     value={misc}
    //                     placeholder={"Additional Details"}
    //                     maxLength={100}
    //                     onChange={(event) => {
    //                         setMisc(event.target.value);
    //                     }}
    //                 />
    //             </td>
    //         </tr>
    //         <div className=" flex flex-row space-x-10 justify-left  my-3">
    //             <div>
    //                 <LocalizationProvider dateAdapter={AdapterDayjs} className="p-10">
    //                     <DateTimePicker
    //                         label="From: "
    //                         value={timeFrom}
    //                         onChange={(newValue) => setFrom(newValue)}
    //                     />
    //                 </LocalizationProvider>
    //             </div>
    //             <div>
    //                 <LocalizationProvider dateAdapter={AdapterDayjs} className="p-10">
    //                     <DateTimePicker
    //                         label="To: "
    //                         value={timeTo}
    //                         onChange={(newValue) => setTo(newValue)}
    //                     />
    //                 </LocalizationProvider>
    //             </div>
    //         </div>
    //         <div className="flex flex-row space-x-2 mt-3 justify-center">

    //             <Link to="/">
    //                 <button className="font-bold relative bg-blue-400 py-1 px-1 rounded float-right">
    //                     Close
    //                 </button>
    //             </Link>

    //             <button
    //                 className="font-bold relative bg-red-500 py-1 px-1 rounded float-right"
    //                 onClick={clearForm}
    //             >
    //                 Clear
    //             </button>
    //             <button
    //                 className="font-bold relative bg-teal-500 py-1 px-1 rounded float-right"
    //                 onClick={onClose}
    //             >
    //                 Confirm
    //             </button>
    //             <div
    //                 className="font-bold relative py-1 px-1 rounded float-right"
    //                 id="displayArea"
    //             ></div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="border-box bg-white rounded-lg w-11/12 md:w-2/3 flex-col items-center justify-center my-2 md:my-10 m-auto shadow-lg p-4 h-auto text-sky-950">
            <div className='font-bold text-2xl border-b-4 border-b-sky-950 pb-2 w-full mb-2'>
                What
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex-col w-full p-1 md:p-2">
                    Game Name:
                    <input
                        value={game}
                        onChange={(e) => { setGame(e.target.value) }}
                        placeholder="What are we playing?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
                <div className="flex-col w-full p-1 md:p-2">
                    Game Console:
                    <input
                        value={gameConsole}
                        onChange={(e) => { setConsole(e.target.value) }}
                        placeholder="What are we playing on?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
            </div>
            
            <div className="flex-col w-full p-1 md:p-2">
                Description:
                <textarea
                    value={description}
                    onChange={(e) => { setDesc(e.target.value) }}
                    placeholder="Try typing something attention-grabbing..."
                    className="p-1 border-teal-100 border-2 rounded w-full"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex-col w-full p-1 md:p-2">
                    Players:
                    <input
                        value={players}
                        onChange={(e) => { setPlayers(e.target.value) }}
                        placeholder="How many people are playing?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
                <div className="flex-col w-full p-1 md:p-2">
                    Controllers:
                    <input
                        value={controllers}
                        onChange={(e) => { setControllers(e.target.value) }}
                        placeholder="How many controllers are needed?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
            </div>

            <div className='font-bold text-2xl border-b-4 border-b-sky-950 py-2 w-full mb-2'>
                Where
            </div>

            <div className="flex-col w-full p-1 md:p-2">
                <Places setSelected={setSelected} />
            </div>

            <div className='font-bold text-2xl border-b-4 border-b-sky-950 py-2 w-full mb-2'>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
                <div className="p-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="From: "
                            value={timeFrom}
                            onChange={(newValue) => setFrom(newValue)}
                            className="w-full"
                        />
                    </LocalizationProvider>
                </div>
                <div className='p-4'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="To: "
                            value={timeTo}
                            onChange={(newValue) => setTo(newValue)}
                            className="w-full"
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className="flex flex-row space-x-2 mt-3 justify-center">

                <Link to="/">
                    <button className="font-bold relative bg-sky-400 py-1 px-1 rounded">
                        Close
                    </button>
                </Link>

                <button
                    className="font-bold relative bg-red-500 py-1 px-1 rounded"
                    onClick={clearForm}
                >
                    Clear
                </button>
                <button
                    className="font-bold  bg-teal-500 py-1 px-1 rounded"
                    onClick={onClose}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}


export default BeaconCreation;

/*
<input
            className="m-auto p-1 border-2 border-teal-100 min-w-full"
            id={"Location"}
            type={"text"}
            value={location}
            placeholder={"Where to play?"}
            required
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          */

/*
Location:
                <input
                    value={placeName}
                    onChange={(e) => { setPlaceName(e.target.value) }}
                    placeholder="Where are we playing?"
                    className="p-1 border-teal-100 border-2 rounded w-full"
                />

PUT BACK IN IF GOOGLEMAPS NO WORK
*/