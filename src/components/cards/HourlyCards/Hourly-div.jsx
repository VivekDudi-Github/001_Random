import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Hourly_div() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
   

    const unslice_lastUpdated = status ? weatherData.current.last_updated : null  ;
    const lastUpdated = status ? unslice_lastUpdated.slice(unslice_lastUpdated.indexOf(' ')+1 ) : null ;


    const [ is_open_1 , setIs_open] = useState(new Array(24).fill(false))

    const display_div = (index) => {
        const new_is_open_1 = [...is_open_1]
        new_is_open_1[index] = !new_is_open_1[index]
         setIs_open(new_is_open_1)
    }


    const hour = status ? weatherData.forecast.forecastday[0].hour : null

    


  return (
    <>
    <div className='bg-white rounded-t-lg w-full p-4 pl-5 pr-5 '>

        <div className='border-b-2 border-gray-200'>
        <span className='flex justify-start items-end'>
            <p className='font-bold text-xl'>Hourly Weather </p> 
            <p className='  '>{ status? ` -${weatherData.location.name}, ${weatherData.location.country}` :  "Search any City--" }</p> 
        </span>
            <span>As of {`${status? `${lastUpdated}`: "NA"}`} </span>
        </div>
        <div className='font-bold pt-2 pb-2 text-xl border-b-2 border-gray-200'>Friday, 14 June</div>

 { hour ?  hour.map((hour , index ) => 
        <div className= {`hover:cursor-pointer border-b-2 border-gray-200 ` } key={index} >
        <div className={`  py-3 flex flex-wrap border-b-2 duration-300 hover:scale-105 border-black items-center justify-around ${is_open_1[index] ? "border-2 border-black" : "border-none" } ` } onClick={()=> display_div(index)}>
            <p className='w-12'>{`${ hour.time.slice(10)}`}</p>
            {/* <p className='w-36'>{`${hour.condition.text}`}</p> */}
            <p className='w-8'>{`${ status ? hour.temp_c : "NA "}`}</p>
            <img className="fa-solid fa-cloud-sun w-8" src={`${hour.condition.icon}`}></img>
            <i className="fa-solid fa-droplet w-16"> {` ${hour.chance_of_rain}%`}</i>
            <i className='fa-solid fa-caret-down'></i>

        </div>
        <div className={` transition transform duration-200 ${is_open_1[index] ? " block " : " hidden "} ` } >
            <p className='font-bold my-2'>{`${hour.condition.text}`}</p> 
            <div className=' flex flex-wrap justify-around rounded-lg px-4  border-2 border-gray-200'>

                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-temperature-half text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>Feels Like </p> 
                        <p className=' text-sm'><b>{hour.feelslike_c}°</b></p>
                    </span>
                </div>
                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-wind text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>Wind </p> 
                        <p className=' text-sm'><b>{hour.wind_dir} {hour.wind_kph} km/h</b></p>
                    </span>
                </div>
                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-droplet text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>Humidity </p> 
                        <p className=' text-sm'><b>{hour.humidity}%</b></p>
                    </span>
                </div>
                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-arrows-to-eye text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>UV Index </p> 
                        <p className=' text-sm'><b>{hour.uv} of 11</b></p>
                    </span>
                </div>
                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-cloud text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>Cloud Cover </p> 
                        <p className=' text-sm'><b>{hour.cloud}%</b></p>
                    </span>
                </div>
                <div className='flex justify-start border-b-2 pt-2 items-start w-36 pb-2 '>
                    <i className='fa-solid fa-cloud-rain text-xl'></i>
                    <span className='ml-2 flex flex-col items-start'>
                        <p className=' text-sm'>Rain Amount </p> 
                        <p className=' text-sm'><b>{hour.precip_mm} mm</b></p>
                    </span>
                </div>
                
            </div>
        </div>

    </div>
        ) : 
        <div>Please Search a City First </div>
        }
        
   
    </div>
    

    </>
  )
}

export default Hourly_div