// pages/map.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen'; // Correct import for leaflet.fullscreen
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
          iconUrl: `/images/${location.imagePath}`, // Adjust the path as needed
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
      const mapInstance = L.map('map').setView([40.7128, -74.00600]);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance);

      // Add controls
      L.control.zoom().addTo(mapInstance);
      L.control.scale().addTo(mapInstance);

      // Add fullscreen control
      L.control.fullscreen({
        position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
        title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
        titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
        content: null, // change the content of the button, can be HTML, default null
        forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
        forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
        fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
      }).addTo(mapInstance);

      // Events for fullscreen
      mapInstance.on('enterFullscreen', function () {
        console.log('entered fullscreen');
      });
      mapInstance.on('exitFullscreen', function () {
        console.log('exited fullscreen');
      });

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