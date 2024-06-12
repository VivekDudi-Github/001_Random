import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function ForecastCard() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
   

     const currentDay = status ? weatherData.forecast.forecastday[0] : "NA" ;


      const item  =[
        { "timeOfDay": "Morning", "temperature": status ? `${currentDay.hour[5].temp_c}°` : "NA", "icon": "fa-smog" },
        { "timeOfDay": "Afternoon", "temperature": status ? `${currentDay.hour[15].temp_c}°` : "NA", "icon": "fa-sun" },
        { "timeOfDay": "Evening", "temperature":status ?  `${currentDay.hour[19].temp_c}°` : "NA" , "icon": "fa-cloud-sun" },
        { "timeOfDay": "Overnight", "temperature":status ?  `${currentDay.hour[23].temp_c}°` : "NA" , "icon": "fa-moon" }
      ] 

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Today's Forecast for {status ? `${weatherData.location.name}, ${weatherData.location.region}` : "Please Search"}  </div>
            
                    { item.map((entry ,index) => {
                        return(
                       <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                                <p className='w-1/5 text-left'>{entry.timeOfDay}</p>
                                <p className='w-1/5 text-center text-blue-500'>{entry.temperature}</p>
                                <i className={`fa-solid w-1/5 ${entry.icon} text-4xl m-3 text-center inline-block`}></i>
                                </div>
                    )}) 
                    }
                  

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
    
)
}

export default ForecastCard