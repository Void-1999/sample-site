import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Maps.module.css';

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await fetch('/api/bin-locations');
                const data = await response.json();
                setBinLocations(data);
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            }
        };

        fetchBinLocations();
    }, []);

    const renderMap = () => {
        if (typeof window === 'undefined') return;

        const L = require('leaflet');

        // Calculate the average latitude and longitude to center the map over all bins
        const latitudes = binLocations.map(bin => bin.latitude);
        const longitudes = binLocations.map(bin => bin.longitude);

        const averageLatitude = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
        const averageLongitude = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;

        const map = L.map('map').setView([averageLatitude, averageLongitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        binLocations.forEach(bin => {
            L.marker([bin.latitude, bin.longitude])
                .addTo(map)
                .bindPopup(`
                    <b>${bin.name}</b><br>
                    🌍 Location: <a href="https://www.google.com/maps?q=${bin.latitude},${bin.longitude}" target="_blank">View on Google Maps</a><br>
                    🗓️ Added On: ${new Date(bin.createdAt).toLocaleString()} UTC<br>
                    ${bin.imagePath ? `<img src="/${bin.imagePath}" alt="${bin.name}" width="100" />` : ''}
                `);
        });
    };

    useEffect(() => {
        if (binLocations.length > 0) {
            renderMap();
        }
    }, [binLocations]);

    return (
        <div>
            <h1>City Map - Bin Locations</h1>
            <div id="map" className={styles.map}></div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Maps), { ssr: false });
