import React, { useRef , useState , useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useSelector } from "react-redux";
import config from "../../conf";

const SimpleMap = (props) => {
  
const status = useSelector(state => state.weather.status)
const weatherData = useSelector(state => state.weather.weatherData)
  
    const mapRef = useRef(null);
    const [latitude , setLatitude ] = useState( status ? weatherData.location.lat  : 18.98  ) ;
    const [longitude , setLongitude ] = useState( status ? weatherData.location.lon :  72.83 )  ;


  useEffect(()=> {
    if (status){
      setLatitude( weatherData.location.lat) ;
      setLongitude( weatherData.location.lon) ;
    }
  } , [weatherData])
    
 

    return ( 
      <>

        <MapContainer center={[latitude, longitude]}  zoom={7} style={{height: "100%", width: "100%"  }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            opacity={1}
          />
          { <TileLayer
          attribution='&copy; <a href="https://openweathermap.org/">openWeather</a>'
          url={`http://tile.openweathermap.org/map/${props.map_layer}/{z}/{x}/{y}.png?appid=${config.map_api_key}`}
          opacity={1}
          zIndex={10}
        />}
        </MapContainer>
        </>
    );
  }
  
  export default SimpleMap;