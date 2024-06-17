import React, { useRef , useState , useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useSelector } from "react-redux";

const SimpleMap = ({prop}) => {
  
const status = useSelector(state => state.weather.status)
const weatherData = useSelector(state => state.weather.weatherData)
  
    const mapRef = useRef(null);
    const [latitude , setLatitude ] = useState( status ? weatherData.location.lat  : 51.505  ) ;
    const [longitude , setLongitude ] = useState( status ? weatherData.location.lon :  -0.09 )  ;

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
          url="http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=1af76109d612fd815ba7710011adb5e2"
          opacity={1}
          zIndex={10}
        />}
        </MapContainer>
        </>
    );
  }
  
  export default SimpleMap;