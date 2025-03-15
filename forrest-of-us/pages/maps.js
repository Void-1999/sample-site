import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from '../styles/Maps.module.css';

// Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);
    const [center, setCenter] = useState([0, 0]);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await axios.get('/api/bin-locations');
                const data = response.data;
                setBinLocations(data);

                if (data.length > 0) {
                    const lats = data.map(bin => bin.latitude);
                    const lngs = data.map(bin => bin.longitude);
                    const avgLat = lats.reduce((a, b) => a + b) / lats.length;
                    const avgLng = lngs.reduce((a, b) => a + b) / lngs.length;
                    
                    setCenter([avgLat, avgLng]);
                }
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            }
        };

        fetchBinLocations();
    }, []);

    return (
        <div>
            <h1>City Map - Bin Locations</h1>
            <div className={styles.mapContainer}>
                <MapContainer center={center} zoom={zoom} style={{ height: "80vh", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {binLocations.map(bin => (
                        <Marker
                            key={bin._id}
                            position={[bin.latitude, bin.longitude]}
                        >
                            <Popup>
                                <div>
                                    <h2>{bin.name}</h2>
                                    <p>📍 Coordinates: {bin.latitude}, {bin.longitude}</p>
                                    <p>🗓️ Added On: {new Date(bin.createdAt).toLocaleString()} UTC</p>
                                    {bin.imagePath && (
                                        <img src={`/${bin.imagePath}`} alt={bin.name} width="150" />
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Maps;
