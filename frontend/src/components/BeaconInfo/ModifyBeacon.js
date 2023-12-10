import React, { useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker/DateTimePicker.js";
import { useAuth } from "../../AuthContext.js";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import LocationSearch from "../BeaconCreation/LocationSearch.js";
import { useLoadScript } from "@react-google-maps/api";
import GetGameByName from "../BeaconCreation/GetGameByName.js";
import GetBeaconById from './GetBeaconById.js';

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
    return (
        <div
            className={`fixed inset-0 bg-sky-900 bg-opacity-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'
                }`}
        >
            <div className="bg-white p-4 rounded shadow-lg">
                <p className="mb-4">{message}</p>
                <div className="flex justify-center space-x-2">
                    <button className='border-2 border-sky-900 rounded p-2' onClick={onCancel}>
                        Cancel
                    </button>
                    <button className='bg-sky-900 text-white rounded p-2' onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

const ModifyBeacon = () => {
    const queryParams = new URLSearchParams(useLocation().search);
    const beaconId = queryParams.get("beacon_id");

    const oldBeaconData = GetBeaconById(beaconId);
    const { authUser, userId } = useAuth();
    const [gameName, setGameName] = useState(oldBeaconData.game_title);
    const [gameImg, setGameImg] = useState(oldBeaconData.game_image);
    const [gameConsole, setConsole] = useState(oldBeaconData.console);
    const [description, setDesc] = useState(oldBeaconData.description);
    const [players, setPlayers] = useState(oldBeaconData.players_wanted);
    const [totalControllers, setTotalControllers] = useState(oldBeaconData.controllers_wanted);
    const [hostControllers, setHostControllers] = useState(oldBeaconData.host_controllers);
    const [placeName, setPlaceName] = useState(oldBeaconData.place_name);
    const [address, setAddress] = useState(oldBeaconData.street_address);
    const [latitude, setLatitude] = useState(oldBeaconData.latitude);
    const [longitude, setLongitude] = useState(oldBeaconData.longitude);
    const [timeFrom, setFrom] = useState(oldBeaconData.start_date_time);
    const [timeTo, setTo] = useState(oldBeaconData.oldBeaconData.end_date_time);
    const [autocompleteResults, setAutocompleteResults] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [clickedGameId, setClickedGameId] = useState(null);
    const [isInputFocused, setInputFocused] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const gameNameValue = e.target.value;
        setGameName(gameNameValue);
        fetchGame(gameNameValue);
        console.log("selected game", selectedGame);
    };

    const fetchGame = debounce(async (gameName) => {
        if (gameName) {
            // check if gameName is not empty
            const results = await GetGameByName(gameName, authUser);
            setAutocompleteResults(results);
        } else {
            setAutocompleteResults([]); // clear the results if gameName is empty
        }
    }, 300); // 300ms delay

    const getLocation = (locationObj) => {
        console.log("getLocation() - locationObj", locationObj);
        setPlaceName(locationObj.name);
        setAddress(locationObj.formattedAddress);
        setLatitude(locationObj.coords.lat());
        setLongitude(locationObj.coords.lng());
    };

    const config = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    function displayText(text) {
        document.getElementById("displayArea").innerHTML = text;
        document.getElementById("displayArea").className =
            "font-bold relative bg-green-400 py-1 px-1 rounded float-right";
    }

    function clearForm() {
        setGameName("");
        setSelectedGame(null);
        setDesc("");
        setConsole("");
        setPlayers("");
        setTotalControllers("");
        setPlaceName("");
        setLatitude("");
        setLongitude("");
        setFrom("");
        setTo("");
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmAction = async () => {
        console.log('Confirmed action');

        // define url and headers
        let url = `https://hku6k67uqeuabts4pgtje2czy40gldpa.lambda-url.us-east-1.on.aws/api/beacons/${beaconId}`;
        let options = {
            method: "DELETE",
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
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
        handleCloseModal();
    };

    const handleCancelAction = () => {
        console.log('Canceled action');
        handleCloseModal();
    };

    function onClose() {
        let data = {
            host_id: userId,
            game_title: selectedGame.name,
            game_image: selectedGame.image,
            console: gameConsole,
            description: description,
            start_date_time: timeFrom,
            end_date_time: timeTo,
            place_name: placeName,
            street_address: address,
            latitude: latitude,
            longitude: longitude,
            players_wanted: players,
            controllers_wanted: totalControllers,
            controllers_brought: hostControllers
        };
        console.log(data);

        // define url and headers
        let url =
            "https://hku6k67uqeuabts4pgtje2czy40gldpa.lambda-url.us-east-1.on.aws/api/beacons";
        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + authUser,
            },
            body: JSON.stringify(data),
        };

        // make api call
        fetch(url, options)
            .then((response) =>
                response.json().then((data) => {
                    console.log("Attempt post beacon api, result", data);
                    if (response.ok) {
                        displayText("Beacon Successfully Modified!");
                    }
                })
            )
            .catch((error) => console.error("Error:", error));
    }

    return (
        <div className="border-box bg-white rounded-lg w-11/12 md:w-2/3 flex-col items-center justify-center my-2 md:my-10 m-auto shadow-lg p-4 h-auto text-sky-950">
            <div className="font-bold text-2xl border-b-4 border-b-sky-950 pb-2 w-full mb-2">
                What
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex-col w-full p-1 md:p-2">
                    Game Name:
                    <input
                        value={gameName}
                        onChange={handleInputChange}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        placeholder="What are we playing?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                    {isInputFocused &&
                        autocompleteResults.map((game) => (
                            <div
                                key={game.id}
                                onMouseDown={() => {
                                    console.log("Game object:", game);
                                    setSelectedGame({
                                        name: game.name,
                                        image: game.cover ? game.cover.url : "images/catScream.jpg",
                                    });
                                    setClickedGameId(game.id);
                                    setGameName(game.name);
                                    setInputFocused(false);
                                }}
                                style={{
                                    cursor: "pointer",
                                    transition: "0.3s",
                                    animation: game.id === clickedGameId ? "flash 0.5s" : "none",
                                }}
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#ddd")
                                }
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
                                className="flex items-center my-2"
                            >
                                <img
                                    src={game.cover ? game.cover.url : "images/catScream.jpg"}
                                    alt={game.name}
                                    className="h-[4.5rem] w-[4.5rem]"
                                />
                                <p>{game.name}</p>
                            </div>
                        ))}
                </div>
                <div className="flex-col w-full p-1 md:p-2">
                    Game Console:
                    <input
                        value={gameConsole}
                        onChange={(e) => {
                            setConsole(e.target.value);
                        }}
                        placeholder="What are we playing on?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
            </div>

            <div className="flex-col w-full p-1 md:p-2">
                Description:
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                    placeholder="Try typing something attention-grabbing..."
                    className="p-1 border-teal-100 border-2 rounded w-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex-col w-full p-1 md:p-2">
                    Players:
                    <input
                        value={players}
                        onChange={(e) => {
                            setPlayers(e.target.value);
                        }}
                        placeholder="How many people are playing?"
                        className="p-1 border-teal-100 border-2 rounded w-full"
                    />
                </div>
                <div className="flex-col w-full p-1 md:p-2">
                    Controllers:
                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
                        <input
                            value={totalControllers}
                            onChange={(e) => {
                                setTotalControllers(e.target.value);
                            }}
                            placeholder="How many controllers are needed?"
                            className="p-1 border-teal-100 border-2 rounded w-full"
                        />
                        <input
                            value={hostControllers}
                            onChange={(e) => {
                                setHostControllers(e.target.value);
                            }}
                            placeholder="How many controllers do you have?"
                            className="p-1 border-teal-100 border-2 rounded w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="font-bold text-2xl border-b-4 border-b-sky-950 py-2 w-full mb-2">
                Where
            </div>

            <div className="flex-col w-full p-1 md:p-2">
                Location:
                <LocationSearch returnValue={getLocation} />
            </div>

            <div className="font-bold text-2xl border-b-4 border-b-sky-950 py-2 w-full mb-2">
                When
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
                <div className="p-4">
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
                        Cancel
                    </button>
                </Link>

                <button
                    className="font-bold relative bg-red-500 py-1 px-1 rounded"
                    onClick={handleOpenModal}
                >
                    Delete Beacon
                    <ConfirmationModal
                        isOpen={isModalOpen}
                        message="Are you sure you want to delete this beacon?"
                        onConfirm={handleConfirmAction}
                        onCancel={handleCancelAction}
                    />
                </button>
                <button
                    className="font-bold  bg-teal-500 py-1 px-1 rounded"
                    onClick={onClose}
                >
                    Save Changes
                </button>
                <div
                    className="font-bold relative py-1 px-1 rounded float-right"
                    id="displayArea"
                ></div>
            </div>
        </div>
    );
}

export default ModifyBeacon();