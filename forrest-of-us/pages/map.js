// pages/map.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-fullscreen/dist/leaflet.fullscreen.css';
import axios from 'axios';

const MapPage = () => {
  const [map, setMap] = useState(null);
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

  useEffect(() => {
    if (map) {
      // Clear existing markers
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add new markers
      binLocations.forEach((location) => {
        const icon = L.icon({
          iconUrl: location.imagePath, // Assuming imagePath contains the URL of the custom icon
          iconSize: [38, 95], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        const marker = L.marker([location.latitude, location.longitude], { icon })
          .bindPopup(`
            <div>
              <h3>${location.name}</h3>
              <p>Added by: ${location.addedBy}</p>
              <p>Created at: ${new Date(location.createdAt).toLocaleDateString()}</p>
            </div>
          `)
          .on('click', function (e) {
            console.log('Marker clicked:', e.target.getLatLng());
          })
          .addTo(map);
      });
    }
  }, [map, binLocations]);

  useEffect(() => {
    const initMap = () => {
      const mapInstance = L.map('map').setView([40.7128, -74.0], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance);

      // Add controls
      L.control.zoom().addTo(mapInstance);
      L.control.scale().addTo(mapInstance);
      L.control.fullscreen().addTo(mapInstance);

      setMap(mapInstance);
    };

    initMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>City Map</title>
      </Head>
      <div id="map" style={{ width: '100%', height: '80%' }} />
    </>
  );
};

export default MapPage;