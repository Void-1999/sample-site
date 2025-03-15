import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import styles from '../styles/Maps.module.css';

const containerStyle = {
    width: '100%',
    height: '80vh'
};

const Maps = () => {
    const [binLocations, setBinLocations] = useState([]);
    const [selectedBin, setSelectedBin] = useState(null);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [zoom, setZoom] = useState(12);

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

                    setCenter({ lat: avgLat, lng: avgLng });
                    setZoom(13); // Set initial zoom level to show all bins
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
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={zoom}
                    >
                        {binLocations.map(bin => (
                            <Marker
                                key={bin._id}
                                position={{ lat: bin.latitude, lng: bin.longitude }}
                                onClick={() => setSelectedBin(bin)}
                            />
                        ))}

                        {selectedBin && (
                            <InfoWindow
                                position={{ lat: selectedBin.latitude, lng: selectedBin.longitude }}
                                onCloseClick={() => setSelectedBin(null)}
                            >
                                <div>
                                    <h2>{selectedBin.name}</h2>
                                    <p>📍 Coordinates: {selectedBin.latitude}, {selectedBin.longitude}</p>
                                    <p>🗓️ Added On: {new Date(selectedBin.createdAt).toLocaleString()} UTC</p>
                                    {selectedBin.imagePath && (
                                        <img src={`/${selectedBin.imagePath}`} alt={selectedBin.name} width="150" />
                                    )}
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Maps;
