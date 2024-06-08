import React, { useState } from 'react'

function ForecastCard() {

      const [item , setitems] = useState([
        { "timeOfDay": "Morning", "temperature": "38°", "icon": "fa-smog" },
        { "timeOfDay": "Afternoon", "temperature": "41°", "icon": "fa-sun" },
        { "timeOfDay": "Evening", "temperature": "36°", "icon": "fa-cloud-sun" },
        { "timeOfDay": "Overnight", "temperature": "32°", "icon": "fa-moon" }
      ] )

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Today's Forecast for Block N, Haryana  </div>
            
                    { item.map((entry ,index) => {
                        return(
                       <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                                <p className='w-1/5 text-left'>{entry.timeOfDay}</p>
                                <p className='w-1/5 text-center text-blue-500'>{entry.temperature}</p>
                                <i className={`fa-solid w-1/5 ${entry.icon} text-4xl m-3 text-center inline-block`}></i>
                                </div>
                    )}) 
                    }
                    {/* {item.map((entry, index) => {
                            return (
                                <div key={index} className='flex justify-between border-b-2 text-xl items-center border-gray-200'>
                                    <p className='w-1/5'>{entry.timeOfDay}</p>
                                    <p className='w-1/5 text-center text-blue-500'>{entry.temperature}</p>
                                    <i className={`fa-solid ${entry.icon} text-4xl m-3 inline-block`}></i>
                                </div>
                            );
                        })} */}

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
    
)
}

export default ForecastCard