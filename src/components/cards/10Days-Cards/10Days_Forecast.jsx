import React , {useState} from 'react'
import { useSelector } from 'react-redux'

function Ten_Days_Forecast() {
   const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)

    const all_forecast = status ? weatherData.forecast
    .forecastday : null
    
    const unslice_lastUpdated = status ? weatherData.current.last_updated : null  ;
    const lastUpdated = status ? unslice_lastUpdated.slice(unslice_lastUpdated.indexOf(' ')+1 ) : null ;

    
    const [ is_open_1 , setIs_open] = useState([true , ...Array(14).fill(false)])

    const display_div = (index) => {
        const new_is_open_1 = [...is_open_1]
        new_is_open_1[index] = !new_is_open_1[index]
         setIs_open(new_is_open_1)
    
         
    const days_of_week = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]

    const day_date = (time) => {
        let specific_date = new Date(time)
      
        let day_index = specific_date.getDay()
        let day = days_of_week[day_index]

        let date = specific_date.getDate()
        const fullMonthName = specific_date.toLocaleString('default', { month: 'long' })

        return `${day} ,${date} ${fullMonthName}  `
    }

    
        }

  return (
    <>
    <div className='bg-white rounded-lg w-full p-4 pl-5 pr-5  '>
        <div className='border-b-2 border-gray-200'>
        <span className='flex justify-start items-end'>
            <p className='font-bold text-xl'>10-Day Weather &nbsp; </p> 
            <p className='  '>{ status? `${weatherData.location.name}, ${weatherData.location.country}` : ` Search any City--` }</p> 
        </span>
            <span className=' text-gray-400'>As of {`${status? `${lastUpdated}`: "NA"}`} </span>
        </div>

    {status ? all_forecast.map((entry , index ) => 
         <div key={index}>
            
        <div className=' py-3 flex flex-wrap border-b-2 duration-200 hover:scale-105 border-black items-center justify-around'
           key={index}  onClick={()=> display_div(index)}
        >
            <p className=' mr-1 '>{(entry.date.slice(5))}</p>
            <span className='w-10 '><b>{entry.day.maxtemp_c}°</b>/{entry.day.mintemp_c}°</span>
                 
            <img className="fa-solid w-9 ml-2 " src={`${entry.day.condition.icon}`}></img>
            <i className="fa-solid fa-droplet w-5">{entry.day.daily_chance_of_rain
            }% </i>
            <i className='fa-solid fa-caret-down'></i>

        </div>
        <div className= {`flex flex-wrap flex-row ${is_open_1[index] ? 'block' : 'hidden'} `}>
            <div className='flex flex-col p-2 w-full lg:w-1/2 '>
                <div className='text-left'>{entry.date.slice(5)} | Day</div>
                <div className='flex justify-between '>
                    <div className='font-bold text-5xl mx-1'>{entry.day.avgtemp_c}°
                        <i className='fa-solid fa-cloud-sun text-4xl mx-1'></i>
                    </div>
                    <div className='  flex flex-col'>
                        <div className='text-left'>
                            <i className='fa-solid fa-droplet w-16 mx-1 text-left'>&nbsp; </i> <p className='text-left'>{entry.day.totalprecip_mm}mm</p>
                        </div>
                        <div className=''>
                            <i className='fa-solid fa-wind mx-1'></i> WNW19 km/h
                        </div>
                    </div>
                </div>
                <div className=' my-2 '>
                Desc.-{entry.day.condition.text}. High {entry.day.maxtemp_c}°C. Winds {entry.hour[12].wind_dir} at {entry.hour[8].wind_kph} to {entry.hour[16].wind_kph} km/h.
                </div>

                <div className='border border-1 border-gray-300 rounded-lg p-2 flex flex-wrap justify-between'>
                
                        <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                            <i className='fa-solid fa-droplet text-xl'></i>
                            <span className='ml-2 flex flex-col items-start'>
                                <p className=' text-sm'>Humidty </p> 
                                <p className=' text-sm'><b>{entry.hour[13].humidity}%</b></p>
                            </span>
                        </div>
                        <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                            <i className='fa-solid fa-arrows-to-eye text-xl'></i>
                            <span className='ml-2 flex flex-col items-start'>
                                <p className=' text-sm'>UV Index </p> 
                                <p className=' text-sm'><b>{entry.day.uv}</b></p>
                            </span>
                        </div>
                    

                   
                        <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                            <i className='fa-solid fa-arrows-up-to-line text-xl'></i>
                            <span className='ml-2 flex flex-col items-start'>
                                <p className=' text-sm'>Sunrise </p> 
                                <p className=' text-sm'><b>{entry.astro.sunrise}</b></p>
                            </span>
                        </div>
                        <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                            <i className='fa-solid fa-arrows-down-to-line text-xl'></i>
                            <span className='ml-2 flex flex-col items-start'>
                                <p className=' text-sm'>Sunset </p> 
                                <p className=' text-sm'><b>{entry.astro.sunset}</b></p>
                            </span>
                        </div>
                   
                    
                </div>
            </div>


            <div className='flex flex-col p-2 w-full lg:w-1/2 '>
                <div className='text-left'>{entry.date.slice(5)} | Night</div>
                <div className='flex justify-between '>
                    <div className='font-bold text-5xl mx-1'>{entry.day.mintemp_c}°
                        <i className='fa-solid fa-cloud-moon text-4xl mx-1'></i>
                    </div>
                    <div className='  flex flex-col'>
                        <div className='text-left'>
                            <i className='fa-solid fa-droplet w-16 '>&nbsp; </i><p className='text-left'>{entry.hour[23].precip_mm}mm</p>
                        </div>
                        <div className=''>
                            <i className='fa-solid fa-wind mx-1'></i> {entry.hour[23].wind_dir} {entry.hour[23].wind_kph} km/h
                        </div>
                    </div>
                </div>
                <div className=' my-2'>
                    Desc.-{entry.hour[23].condition.text} . Low {entry.day.mintemp_c}°C. Winds {entry.hour[23].wind_dir} at {entry.hour[22].wind_kph} to {entry.hour[23].wind_kph} km/h.
                </div>

                <div className='border border-1 border-gray-300 rounded-lg p-2 flex flex-wrap justify-between'>
                    <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                        <i className='fa-solid fa-droplet text-xl'></i>
                        <span className='ml-2 flex flex-col items-start'>
                            <p className=' text-sm'>Humidty </p> 
                            <p className=' text-sm'><b>{entry.hour[23].humidity}%</b></p>
                        </span>
                    </div>
                    <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                        <i className='fa-solid fa-arrows-to-eye text-xl'></i>
                        <span className='ml-2 flex flex-col items-start'>
                            <p className=' text-sm'>UV Index </p> 
                            <p className=' text-sm'><b>{entry.hour[23].uv}</b></p>
                        </span>
                    </div>
                    <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                        <i className='fa-solid fa-arrows-up-to-line text-xl'></i>
                        <span className='ml-2 flex flex-col items-start'>
                            <p className=' text-sm'>Moonrise </p> 
                            <p className=' text-sm'><b>{entry.astro.moonrise}</b></p>
                        </span>
                    </div>
                    <div className='flex justify-start border-b-2 pl-1 pt-2 items-center w-1/2 pb-2 '>
                        <i className='fa-solid fa-arrows-down-to-line text-xl'></i>
                        <span className='ml-2 flex flex-col items-start'>
                            <p className=' text-sm'>Moonset </p> 
                            <p className=' text-sm'><b>{entry.astro.moonset}</b></p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        ) : null }
    </div>
    </>
  )
}

export default Ten_Days_Forecast