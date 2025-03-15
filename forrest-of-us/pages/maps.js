import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// Dynamically import leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]);
    const [customIcon, setCustomIcon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await axios.get('/api/bin-locations');
                const locations = response.data;

                if (locations.length > 0) {
                    setBinLocations(locations);

                    const avgLat = locations.reduce((sum, loc) => sum + loc.latitude, 0) / locations.length;
                    const avgLng = locations.reduce((sum, loc) => sum + loc.longitude, 0) / locations.length;
                    setMapCenter([avgLat, avgLng]);
                }
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBinLocations();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');

            // Create a custom marker icon
            const icon = new L.Icon({
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                iconSize: [30, 45],
                iconAnchor: [15, 45],
                popupAnchor: [0, -45]
            });

            setCustomIcon(icon);
        }
    }, []);

    if (loading || !customIcon || (mapCenter[0] === 0 && mapCenter[1] === 0)) {
        return (
            <div style={styles.loadingContainer}>
                <div style={styles.loader}></div>
                <p style={styles.loadingText}>Loading Map...</p>
            </div>
        );
    }

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {binLocations.map((location) => (
                <Marker 
                    key={location._id} 
                    position={[location.latitude, location.longitude]} 
                    icon={customIcon}
                >
                    <Popup>
                        <strong>{location.name}</strong><br />
                        Added on: {new Date(location.createdAt).toLocaleString()}<br />
                        {location.imagePath && (
                            <div style={{ marginTop: '5px' }}>
                                <img 
                                    src={`/uploads/${location.imagePath}`} 
                                    alt={location.name} 
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '5px' }} 
                                />
                            </div>
                        )}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

const styles = {
    loadingContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        zIndex: 1000,
    },
    loader: {
        border: '6px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '6px solid #4CAF50',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
    },
    loadingText: {
        marginTop: '10px',
        fontSize: '18px',
        color: '#333',
    }
};

export default Maps;
