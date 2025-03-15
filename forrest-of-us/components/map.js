// components/Map.js
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-map-gl';
import axios from 'axios';

const MapComponent = () => {
  const [binLocations, setBinLocations] = useState([]);

  useEffect(() => {
    const fetchBinLocations = async () => {
      try {
        const response = await axios.get('/api/bin-locations');
        setBinLocations(response.data);
      } catch (error) {
        console.error('Error fetching bin locations:', error);
      }
    };
    fetchBinLocations();
  }, []);

  return (
    <MapContainer
      style={{ width: '100%', height: '80%' }}
      initialViewState={{
        longitude: -74.00600,
        latitude: 40.7128,
        zoom: 10
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {binLocations.map((location) => (
        <Marker key={location._id} latitude={location.latitude} longitude={location.longitude}>
          <Popup onClose={() => {}}>
            <div>
              <h3>{location.name}</h3>
              <p>Added by: {location.addedBy}</p>
              <p>Created at: {new Date(location.createdAt).toLocaleDateString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;