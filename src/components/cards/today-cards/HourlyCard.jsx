import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function HoursCard() {
  const status = useSelector ( state => state.weather.status)
  const weatherData = useSelector (state => state.weather.weatherData)
 
  const today= new Date()
  const hour = today.getHours()

  
  const data = status? weatherData.forecast.forecastday[0] : null ;
  
    //  console.log(data.hour[hour+1].time.slice( 10  ));
    const index = (index)=> {
            if (index >= data.hour.length){
                return index % 24 
            }else {
                return index
            }
    }


  const divs = status? [
        { Hour: 'Now' , min: `${data.hour[hour].temp_c}°`, icon: `${data.hour[hour].condition.icon}` },
        { Hour: `${data.hour[index(hour+1)].time.slice(10)}` , min: `${data.hour[index(hour+1)].temp_c}°`, icon: `${data.hour[index(hour+1)].condition.icon}` },
        { Hour: `${data.hour[index(hour+2)].time.slice(10)}` , min: `${data.hour[index(hour+2)].temp_c}°`, icon: `${data.hour[index(hour+2)].condition.icon}` },
        { Hour: `${data.hour[index(hour+3)].time.slice(10)}` , min: `${data.hour[index(hour+3)].temp_c}°`, icon: `${data.hour[index(hour+3)].condition.icon}` },
        { Hour: `${data.hour[index(hour+4)].time.slice(10)}` , min: `${data.hour[index(hour+4)].temp_c}°`, icon: `${data.hour[index(hour+4)].condition.icon}` },
        
        
      ] : [
        { Hour: 'Now',   min: `NA°`, icon: 'fa-smog' },
        { Hour: "NA", min: `NA°`, icon: 'fa-sun' },
        { Hour: "NA", min: `NA°`, icon: 'fa-cloud-sun'},
        { Hour: "NA", min: `NA°`, icon: 'fa-moon' },
        { Hour: `NA`, min: `NA°`, icon: 'fa-moon' }
      ]

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Hourly Forecast</div>

                    {  divs.map((entry , index) => { 
                        return (
                        <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-100'>
                             <p className='w-1/5 text-lg md:text-2xl text-left'>{entry.Hour}</p>
                        <span className='w-1/5 font-medium text-center text-blue-500'>{entry.min}
                        </span>
                        <img className={` duration-200 md:m-2 m-1 md:h-16 h-10 text-center inline-block`} src={`${entry.icon}` }></img>
                            </div>
                    )}
                    )}

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
  )
}

export default HoursCard