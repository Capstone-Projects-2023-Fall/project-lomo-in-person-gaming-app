import React, { useRef, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import Beacon from './Beacon.js';

const MapContainer = ({ beaconList }) => {
  const mapStyles = {
    height: '94vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 39.9812, // default latitude
    lng: -75.1554, // default longitude
  };

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [activeBeacon, setActiveBeacon] = useState(null);
  const mapRef = useRef(null);

  const handleBeaconClick = (id) => {
    if (activeBeacon === id) {
      setActiveBeacon(null);
      mapRef.current.setOptions({ gestureHandling: 'cooperative' });
    } else {
      setActiveBeacon(id);
      setMapCenter(mapRef.current.getCenter());
      mapRef.current.setOptions({ gestureHandling: 'none' });
    }
  }

  const handleMapClick = () => {
    setActiveBeacon(null);
  }

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log(beaconList);
  
  return (
    <div className='absolute top-70 left-0 w-full'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={mapCenter}
        onLoad={(map) => {
          mapRef.current = map;
        }}
        onClick={handleMapClick}
        googleMapsApiKey={apiKey}
      >
        {beaconList.map((beacon, index) => (
          <Beacon
            key={index}
            id={beacon.id}
            activeBeacon={activeBeacon}
            onBeaconClick={handleBeaconClick}
            beacon={beacon}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
