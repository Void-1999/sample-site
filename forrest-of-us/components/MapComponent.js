import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fixing the marker icon issue
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Configure Leaflet’s default icon
const DefaultIcon = new L.Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41], // Default size
    iconAnchor: [12, 41], // Anchor point
    popupAnchor: [1, -34], // Popup position relative to the icon
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ binLocations }) => {
    // Calculate the map center based on the average of all bin locations
    const mapCenter = binLocations.length > 0 ? [
        binLocations.reduce((sum, loc) => sum + loc.latitude, 0) / binLocations.length,
        binLocations.reduce((sum, loc) => sum + loc.longitude, 0) / binLocations.length
    ] : [0, 0]; // Default center if no bins exist

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {binLocations.map((bin, index) => (
                <Marker key={index} position={[bin.latitude, bin.longitude]}>
                    <Popup>
                        <strong>{bin.name}</strong><br />
                        Location: [{bin.latitude}, {bin.longitude}]
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
