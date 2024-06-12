import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function HoursCard() {
  const status = useSelector ( state => state.weather.status)
  const weatherData = useSelector (state => state.weather.weatherData)
 
  const today= new Date()
  const weekday = today.getDay()

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
  const index = (index) => {
    if(index >= dayNames.length ){
      return index % 7
    }else {
      return index
    }
  }

  const data = weatherData.forecast.forecastday

  const divs = [
        { day: 'Today',  Max: `${data[0].day.maxtemp_c}°` , min: `${data[0].day.mintemp_c}°`, icon: 'fa-smog' },
        { day: `${dayNames[index(weekday + 1)]}`, Max: `${data[1].day.maxtemp_c}°`, min: `${data[1].day.mintemp_c}°`, icon: 'fa-sun' },
        { day: `${dayNames[index(weekday + 2)]}`, Max: `${data[2].day.maxtemp_c}°`, min: `${data[2].day.mintemp_c}°`, icon: 'fa-cloud-sun'},
        { day: `${dayNames[index(weekday + 3)]}`, Max: `${data[3].day.maxtemp_c}°`, min: `${data[3].day.mintemp_c}°`, icon: 'fa-moon' },
        { day: `${dayNames[index(weekday + 4)]}`, Max: `${data[4].day.maxtemp_c}°`, min: `${data[4].day.mintemp_c}°`, icon: 'fa-moon' }
      ]

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Daily Forecast</div>

                    {  divs.map((entry , index) => { 
                        return (
                        <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                             <p className='w-1/5 text-left'>{entry.day}</p>
                        <span className='w-1/5 text-center text-blue-500'>{entry.Max}
                        <span className='w-1/5 text-center text-sm text-blue-500'>/{entry.min}</span>
                        </span>
                        <i className={`fa-solid w-1/5 ${entry.icon} text-4xl text-center m-3 inline-block`}></i>
                            </div>
                    )}
                    )}

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
  )
}

export default HoursCard