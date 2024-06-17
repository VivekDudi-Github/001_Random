import React from 'react'
import { useSelector } from 'react-redux' 


function MainCard() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
    const Is_F= useSelector(state => state.weather.IsFarenheit)

    const unslice_lastUpdated = status ? weatherData.current.last_updated : null  ;
    const lastUpdated = status ? unslice_lastUpdated.slice(unslice_lastUpdated.indexOf(' ')+1 ) : null ;

    const temp_switch = status? weatherData.forecast.forecastday[0].day : null 

    return (
    <div className=' duration-200  flex flex-col rounded-md bg-white overflow-hidden text-white font-bold shadow-md shadow-gray-600 transition-property-height'>
        <div className=' bg-slate-800 p-2'>
            <p>{status? `${weatherData.location.name}, ${weatherData.location.country}` :  "Search any City--"}</p> 
            <p className= 'font-sans font-normal text-xs'>As of {status? `${lastUpdated}`: "NA"}</p>
        </div>

        <div className='p-4 bg-gradient-to-b from-purple-200 to-purple-900 duration-200'>
            <div className='w-full  flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='  text-5xl md:text-8xl'>{status? `${ Is_F ? weatherData.current.temp_f : weatherData.current.temp_c}°`: "NA"}</p>
                    <p className=' md:text-3xl'>{status? `${weatherData.current.condition.text}`: "NA"}</p>
                </div>
           
            <div>
                 <img  className=" duration-200 h-22 md:h-36 " src={status ? `${weatherData.current.condition.icon} ` : null}/>
            </div>
            </div>
            <div className=' text-left '> 
                Day {status ? `${ Is_F? temp_switch.maxtemp_f : temp_switch.maxtemp_c}` : `NA`}° •
                 Night {status ? `${Is_F? temp_switch.mintemp_f : temp_switch.mintemp_c}` : `NA`}°</div>
        </div>
        
    </div>
  )
}

export default MainCard