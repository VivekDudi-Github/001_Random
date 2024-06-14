import React from 'react'
import { useSelector } from 'react-redux' 


function MainCard() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
 

    const unslice_lastUpdated = status ? weatherData.current.last_updated : null  ;
    const lastUpdated = status ? unslice_lastUpdated.slice(unslice_lastUpdated.indexOf(' ')+1 ) : null ;

    const Temp = ".temp_c"

    return (
    <div className=' duration-200  flex flex-col rounded-md bg-white overflow-hidden text-white font-bold shadow-md shadow-gray-600 transition-property-height'>
        <div className=' bg-slate-800 p-2'>
            <p>{status? `${weatherData.location.name}, ${weatherData.location.country}` :  "Search any City--"}</p> 
            <p className= 'font-sans font-normal text-xs'>As of {status? `${lastUpdated}`: "NA"}</p>
        </div>

        <div className='p-4 bg-gradient-to-b from-purple-200 to-purple-900 duration-200'>
            <div className='w-full  flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='  text-5xl md:text-8xl'>{status? `${weatherData.current.temp_c}°`: "NA"}</p>
                    <p className=' md:text-3xl'>{status? `${weatherData.current.condition.text}`: "NA"}</p>
                </div>
           
            <div>
                 <img  className=" duration-200 h-22 md:h-36 " src={status ? `${weatherData.current.condition.icon} ` : null}/>
            </div>
            </div>
            <div className=' text-left '> 
                Day {status ? `${weatherData.forecast.forecastday[0].day.maxtemp_c}` : `NA`}° •
                 Night {status ? `${weatherData.forecast.forecastday[0].day.mintemp_c}` : `NA`}°</div>
        </div>
        
    </div>
  )
}

export default MainCard