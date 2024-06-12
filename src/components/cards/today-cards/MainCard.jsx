import React from 'react'
import { useSelector } from 'react-redux' 


function MainCard() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
 
    return (
    <div className=' flex flex-col rounded-md bg-white overflow-hidden text-white font-bold shadow-md shadow-gray-600'>
        <div className=' bg-slate-800 p-2'>
            <p>{status? `${weatherData.location.name}, ${weatherData.location.region}` :  "Search any City--"}</p> 
            <p className= 'font-sans font-normal text-xs'>As of {status? `${weatherData.current.last_updated}`: "NA"}</p>
        </div>

        <div className='p-4 bg-gradient-to-b from-purple-200 to-purple-900 duration-200'>
            <div className='w-full  flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='  text-6xl md:text-8xl'>{status? `${weatherData.current.temp_c}°`: "NA"}</p>
                    <p className=' md:text-3xl'>{status? `${weatherData.current.condition.text}`: "NA"}</p>
                </div>
           
            <div>
                 <i  className="fa-solid duration-200 fa-smog text-6xl md:text-8xl m-3"></i>
            </div>
            </div>
            <div className=' text-left '> 
                Day {status ? `${weatherData.forecast.forecastday[0].day.maxtemp_c}` : ``}° •
                 Night {status ? `${weatherData.forecast.forecastday[0].day.mintemp_c}` : ``}°</div>
        </div>
        
    </div>
  )
}

export default MainCard