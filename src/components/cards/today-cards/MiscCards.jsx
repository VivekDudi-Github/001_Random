import React from 'react'
import { useSelector } from 'react-redux'


function MiscCards() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
    const Is_F= useSelector(state => state.weather.IsFarenheit)

    const current_Data = status ? weatherData.current : null ;
    const min_max_temp = status ? weatherData.forecast.forecastday[0].day : null ;

    const misc = status ? [ 
        { icon: 'fa-solid fa-temperature-half', label: 'High/Low', value: `${ Is_F ? min_max_temp.maxtemp_f : min_max_temp.maxtemp_c }°/${ Is_F ? min_max_temp.mintemp_f : min_max_temp.mintemp_c }°`},
        { icon: 'fa-solid fa-wind', label: 'Wind', value: `${current_Data.wind_kph}km/h-${current_Data.wind_dir}` },
        { icon: 'fa-solid fa-droplet', label: 'Humidity', value: `${current_Data.humidity}%` },
        { icon: 'fa-solid fa-droplet', label: 'Dew Point', value: `${Is_F ? current_Data.dewpoint_f :current_Data.dewpoint_c}°` },
        { icon: 'fa-solid fa-arrows-to-circle', label: 'Pressure', value: `${current_Data.pressure_mb} mb` },
        { icon: 'fa-solid fa-arrows-to-eye', label: 'UV Index', value: `${current_Data.uv}` },
        { icon: 'fa-solid fa-eye', label: 'Visiblity', value:`${current_Data.vis_km}` },
        { icon: 'fa-solid fa-moon', label: 'Moon Phase', value: `${weatherData.forecast.forecastday[0].astro.moon_phase}` },
      ] : [
        { icon: 'fa-solid fa-temperature-half', label: 'High/Low', value: 'NA' },
        { icon: 'fa-solid fa-wind', label: 'Wind', value: 'NA' },
        { icon: 'fa-solid fa-droplet', label: 'Humidity', value: 'NA' },
        { icon: 'fa-solid fa-droplet', label: 'Dew Point', value: 'NA' },
        { icon: 'fa-solid fa-arrows-to-circle', label: 'Pressure', value: 'NA' },
        { icon: 'fa-solid fa-arrows-to-eye', label: 'UV Index', value: 'NA' },
        { icon: 'fa-solid fa-eye', label: 'Visiblity', value: 'NA' },
        { icon: 'fa-solid fa-moon', label: 'Moon Phase', value: 'NA' },
      ]
      ;
      
      const sunrise = status ? weatherData.forecast.forecastday[0].astro.sunrise.slice(0 , -2) :null
      const sunset = status ? weatherData.forecast.forecastday[0].astro.sunset.slice(0 , -2) :null
      

  return (
    <div className='bg-white  rounded-md shadow-md shadow-gray-600 p-3flex float-endex-col '>
       
        <div className=' font-normal text-2xl p-3 mb-2'>{status? `Weather Today in ${weatherData.location.name}, ${weatherData.location.country}` :  "Search any City to see weather"}</div>
       
        <div className=' w-full bg-green-100 flex p-3 justify-between'>
                <div className='p-3 ml-5 ' >
                    <p>Feels Like</p>
                    <p className='text-5xl font-medium '><b>{ status? `${ Is_F ? weatherData.current.feelslike_f : weatherData.current.feelslike_c }°` : `NA`}</b></p>
                </div>
                <div className='p-3 ml-5 ' >
                    <p className='text-right text-ms'>Sunrise-Sunset</p>
                    <p className='text-4xl text-right font-bold'>{status ? `${sunrise}-${sunset}` : `NA`}</p>
                </div>
         </div>


         <div className='mt-2 flex md:flex-row md:flex-wrap flex-col flex-wrap p-5 duration-500'>
       
{/* loop */}
         {misc.map((item) => (
        <div key={item.label} className="p-2 border-b border-gray-200 flex justify-between md:w-1/2">
          <div className="m-2">
            <i className={item.icon}></i>
            <span className="pl-2">{item.label}</span>
          </div>
          <div className="m-2">{item.value}</div>
        </div>
      ))}


    </div>

    </div>
  )
}

export default MiscCards