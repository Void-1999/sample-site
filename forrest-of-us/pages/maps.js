import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]);

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await axios.get('/api/binLocations');
                setBinLocations(response.data);

                if (response.data.length > 0) {
                    const avgLat = response.data.reduce((sum, loc) => sum + loc.latitude, 0) / response.data.length;
                    const avgLng = response.data.reduce((sum, loc) => sum + loc.longitude, 0) / response.data.length;
                    setMapCenter([avgLat, avgLng]);
                }
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            }
        };

        fetchBinLocations();
    }, []);

    if (typeof window === 'undefined') return null; // Prevent SSR issues

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {binLocations.map((location) => (
                    <Marker
                        key={location._id}
                        position={[location.latitude, location.longitude]}
                        icon={new L.Icon({
                            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                        })}
                    >
                        <Popup>
                            <div>
                                <h3>{location.name}</h3>
                                <p>Coordinates: {location.latitude}, {location.longitude}</p>
                                <p>Added On: {new Date(location.createdAt).toLocaleString()}</p>
                                <img src={`/uploads/${location.imagePath}`} alt={location.name} width="200" />
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Maps;
