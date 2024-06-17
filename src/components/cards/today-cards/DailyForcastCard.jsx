import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function DailyForcastCard() {
  const status = useSelector ( state => state.weather.status)
  const weatherData = useSelector (state => state.weather.weatherData)
  const Is_F= useSelector(state => state.weather.IsFarenheit)

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

  const data = status? weatherData.forecast.forecastday : null ;

  const divs = status? [
        { day: 'Today',  Max: `${Is_F ? data[0].day.maxtemp_f :data[0].day.maxtemp_c }°` , min: `${Is_F ? data[0].day.mintemp_f : data[0].day.mintemp_c}°`, icon: `${data[0].day.condition.icon}` },
        { day: `${dayNames[index(weekday + 1)]}`, Max: `${Is_F ? data[1].day.maxtemp_f :data[1].day.maxtemp_c }°` , min: `${Is_F ? data[1].day.mintemp_f : data[1].day.mintemp_c}°`, icon: `${data[1].day.condition.icon}`},
        { day: `${dayNames[index(weekday + 2)]}`, Max: `${Is_F ? data[2].day.maxtemp_f :data[2].day.maxtemp_c }°` , min: `${Is_F ? data[2].day.mintemp_f : data[2].day.mintemp_c}°`, icon: `${data[2].day.condition.icon}`},
        // { day: `${dayNames[index(weekday + 3)]}`, Max: `${data[3].day.maxtemp_c}°`, min: `${data[3].day.mintemp_c}°`, icon: `${data[3].day.condition.icon}` },
        // { day: `${dayNames[index(weekday + 4)]}`, Max: `${data[4].day.maxtemp_c}°`, min: `${data[4].day.mintemp_c}°`, icon: `${data[4].day.condition.icon}` }
      ] : [
        { day: 'Today',  Max: `NA°` , min: `NA°`, icon: 'fa-smog' },
        { day: "NA", Max: `NA°`, min: `NA°`, icon: 'fa-sun' },
        { day: "NA", Max: `NA°`, min: `NA°`, icon: 'fa-cloud-sun'},
        // { day: "NA", Max: `NA°`, min: `NA°`, icon: 'fa-moon' },
        // { day: `NA`, Max: `NA°`, min: `NA°`, icon: 'fa-moon' }
      ]

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Daily Forecast</div>

                    {  divs.map((entry , index) => { 
                        return (
                        <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-100'>
                             <p className='w-1/5 text-lg md:text-2xl text-left'>{entry.day}</p>
                        <span className='w-1/5 font-medium text-center text-blue-500'>{entry.Max}
                        <span className='w-1/5 text-center text-sm text-blue-500'>/{entry.min}</span>
                        </span>
                        <img className={` duration-200 md:m-2 m-1 md:h-16 h-10 text-center inline-block`} src={`${entry.icon}` }></img>
                            </div>
                    )}
                    )}

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 7 Days </button>
    </div>
  )
}

export default DailyForcastCard