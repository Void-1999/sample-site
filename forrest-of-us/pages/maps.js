import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]); // Default location, will be updated later

    useEffect(() => {
        const fetchBinLocations = async () => {
            try {
                const response = await axios.get('/api/bin-locations');
                const locations = response.data;

                if (locations.length > 0) {
                    setBinLocations(locations);

                    // Calculate the map center based on the average of all bin locations
                    const avgLat = locations.reduce((sum, loc) => sum + loc.latitude, 0) / locations.length;
                    const avgLng = locations.reduce((sum, loc) => sum + loc.longitude, 0) / locations.length;
                    setMapCenter([avgLat, avgLng]);
                }
            } catch (error) {
                console.error('Error fetching bin locations:', error);
            }
        };

        fetchBinLocations();
    }, []);

    if (mapCenter[0] === 0 && mapCenter[1] === 0) return <div>Loading map...</div>;

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {binLocations.map((location) => (
                <Marker key={location._id} position={[location.latitude, location.longitude]}>
                    <Popup>
                        <strong>{location.name}</strong><br />
                        Added on: {new Date(location.createdAt).toLocaleString()}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Maps;
