import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { LoadScript, useLoadScript } from '@react-google-maps/api';
import './App.css';
import { useAuth } from './AuthContext.js';
import Login from './components/Login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import HomePage from './HomePage.js';
import BeaconApplication from './components/BeaconApplication/BeaconApplication.js';
import BeaconCreation from './components/BeaconCreation/BeaconCreation.js';
import NavBar from './components/NavBar/NavBar.jsx';
import CommentSection from './components/Comments.jsx';
import GetBeaconInfo from './components/GetBeaconInfo.js';


function App() {
  const { isLoggedIn } = useAuth();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const beaconList = [
    {
      circleLat: 40,
      circleLng: -75,
    },
    {
      beaconInfo: {
        gameTitle: "Super Mario Bros. Wonder",
        miscInfo: "Let's beat the first World!\nIdk I haven't played yet",
        username: "amofro",
        console: "Switch",
        address: {
          name: "Howard Gittis Student Center",
          address: "1755 N 13th St, Philadelphia, PA 19122"
        },
        gamePic: "images/catScream.jpg",
        userPic: "images/catMonster.jpg",
        startTime: "4:30 PM",
        endTime: "7:00 PM",
        playerInfo: {
          available: 1,
          wanted: 4
        },
        controllerInfo: {
          available: 2,
          wanted: 4,
          description: [
            "Joycons",
            "Pro Controller",
            "Gamecube Controller",
            "Idk madcatz or something... I'm wanna sleep"
          ]
        }
      },
    },
    {
      circleLat: 40.05,
      circleLng: -75.1,
      beaconInfo: {
        miscInfo: "AYYYYYY fahgettaboudit",
        username: "abkrivo",
        gamePic: "images/catWut.jpg",
        userPic: "images/catScream.jpg",
        console: "Xbox Classic",
        gameTitle: "Halo Classic"
      },
    },
  ];

  
  return (
    <div className='App bg-gradient-to-b from-sky-500 to-teal-600 h-screen'>
        <Router>
          <LoadScript googleMapsApiKey={apiKey}>
            <NavBar />
            <Routes>
              <Route path='/login' element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
              <Route path='/signup' element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
              <Route path='/beaconlist' element={<GetBeaconInfo />} />
              <Route path='/createbeacon' element={isLoggedIn ? <BeaconCreation beaconList={beaconList} /> : <Navigate to='/login' />} />
              <Route path='/joinbeacon' element={isLoggedIn ? <BeaconApplication beaconList={beaconList} /> : <Navigate to='/login' />} />
              <Route path='/' element={isLoggedIn ? <HomePage beaconList={beaconList} googleMapsApiKey={apiKey}/> : <Navigate to='/login' />} />
            </Routes>
          </LoadScript>
        </Router>
    </div>
  );
}

export default App;
