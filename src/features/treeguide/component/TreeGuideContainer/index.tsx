import React, { useState } from 'react';
import Map, { MapProvider } from 'react-map-gl';
import DeckGL from '@deck.gl/react';

const TreeGuideContainer = () => {

    // Set your mapbox access token here
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3NoaW4iLCJhIjoiY2xlOGFiY2xsMGRtOTNubHU5emc2cDU4cyJ9.HyYeSUUN_yUD6X8bUGoVJA';

    // Viewport settings
    const INITIAL_VIEW_STATE = {
        longitude: -122.41669,
        latitude: 37.7853,
        zoom: 13,
        pitch: 0,
        bearing: 0
    };


    const [viewport, setViewport] = useState({
        longitude: -233,
        latitude: 37.5,
        zoom: 9,
        pitch: 0,
        bearing: 0
    });

    return (
        <Map
            initialViewState={viewport}
            style={{ height: '80vh', borderRadius: "15px" }}
            mapStyle="mapbox://styles/mapbox/navigation-night-v1"
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />

    )
}
export default TreeGuideContainer