import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Maps.module.css';

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await fetch('/api/bin-locations');  // Adjust URL if necessary
                const data = await response.json();
                setBinLocations(data);
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            }
        };

        fetchBinLocations();

        const map = L.map('map').setView([0, 0], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

    }, []);

    useEffect(() => {
        if (binLocations.length > 0) {
            const map = L.map('map').setView(
                [binLocations[0].latitude, binLocations[0].longitude],
                13
            );

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            binLocations.forEach(bin => {
                L.marker([bin.latitude, bin.longitude])
                    .addTo(map)
                    .bindPopup(`
                        <b>${bin.name}</b><br>
                        Latitude: ${bin.latitude}, Longitude: ${bin.longitude}<br>
                        <img src="/${bin.imagePath}" alt="${bin.name}" width="100" />
                    `);
            });
        }
    }, [binLocations]);

    return (
        <div>
            <h1>City Map - Bin Locations</h1>
            <div id="map" className={styles.map}></div>
        </div>
    );
};

export default Maps;
