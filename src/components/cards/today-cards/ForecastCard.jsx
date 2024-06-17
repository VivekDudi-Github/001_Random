import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function ForecastCard() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
    const Is_F= useSelector(state => state.weather.IsFarenheit)

     const currentDay = status ? weatherData.forecast.forecastday[0] : "NA" ;


      const item  =[
        { "timeOfDay": "Morning",   "temperature": status ? `${Is_F ? currentDay.hour[ 8].temp_f : currentDay.hour[ 8].temp_c}°` : "NA", "icon": status? `${currentDay.hour[8].condition.icon}` : "NA" },
        { "timeOfDay": "Afternoon", "temperature": status ? `${Is_F ? currentDay.hour[15].temp_f : currentDay.hour[15].temp_c}°` : "NA", "icon": status? `${currentDay.hour[15].condition.icon}` : "NA" },
        { "timeOfDay": "Evening",   "temperature": status ? `${Is_F ? currentDay.hour[19].temp_f : currentDay.hour[19].temp_c}°` : "NA" , "icon": status? `${currentDay.hour[19].condition.icon}` : "NA" },
        { "timeOfDay": "Overnight", "temperature": status ? `${Is_F ? currentDay.hour[23].temp_f : currentDay.hour[23].temp_c}°` : "NA" , "icon": status? `${currentDay.hour[23].condition.icon}` : "NA" }
      ] 

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Today's Forecast for <strong>{status ? `${weatherData.location.name}, ${weatherData.location.region}` : "Please Search"} </strong> </div>
            
                    { item.map((entry ,index) => {
                        return(
                       <div key={index} className='flex justify-around border-b-2 md:text-xl text-sm  items-center border-gray-200'>
                                <p className='w-1/5 text-left'>{entry.timeOfDay}</p>
                                <p className='w-1/5 text-center font-bold text-blue-500'>{entry.temperature}</p>
                                <img className={` md:m-2 m-1 md:h-16 h-10 text-center inline-block`} src={`${entry.icon}`}/>
                                </div>
                    )}) 
                    }
                  

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
    
)
}

export default ForecastCard