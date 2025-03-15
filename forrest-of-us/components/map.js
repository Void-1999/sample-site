// components/Map.js
import { useState, useEffect } from 'react';
import { Map, Marker, Popup, Source, Layer } from 'react-map-gl';
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
  <Map
      style={{ width: '100%', height: '80%' }}
      initialViewState={{
        longitude: -74.00600,
        latitude: 40.7128,
        zoom: 10
      }}
    >
      <Source id="mapbox/streets-v11">
        <Layer type="raster" />
      </Source>
      {binLocations.map((location) => (
        <Marker key={location._id} longitude={location.longitude} latitude={location.latitude}>
          <Popup onClose={() => {}}>
            <div>
              <h3>{location.name}</h3>
              <p>Added by: {location.addedBy}</p>
              <p>Created at: {new Date(location.createdAt).toLocaleDateString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
 );
};

export default MapComponent;