import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';
import {  Language  ,  Map, config, MapStyle} from '@maptiler/sdk';
import {TemperatureLayer, WindLayer } from "@maptiler/weather"

export default function Maps() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 139.753, lat: 35.6844 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = 'Ou6ohMkdgVeEly7obuTk';

    config.primaryLanguage = Language.ENGLISH;

    const layerBg = new TemperatureLayer({
        opacity: 0.8,
      });

      const layer = new WindLayer ({
        opacity : 0.5 ,
      }) ;
      

    map.on('load', function () {
        // Darkening the water layer to make the land stand out
        map.setPaintProperty("Water", 'fill-color', "rgba(0, 0, 0, 0.6)");
        map.addLayer(layer);
        map.addLayer(layerBg, "Water");
  
      });

    

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.BACKDROP,
          center: [tokyo.lng, tokyo.lat],
          zoom: zoom ,
          language: Language.ENGLISH
        });
      
      }, [tokyo.lng, tokyo.lat, zoom]);


return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
    }