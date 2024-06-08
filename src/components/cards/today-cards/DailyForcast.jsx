import React, { useState } from 'react'

function HoursCard() {

    const [divs , setdivs]  = useState([
        { day: 'Today',  temperature: '38°', minMax: '38°', icon: 'fa-smog' },
        { day: 'Sun 09', temperature: '38°', minMax: '38°', icon: 'fa-sun' },
        { day: 'Mon 10', temperature: '44°', minMax: '38°', icon: 'fa-cloud-sun' },
        { day: 'Tue 11', temperature: '45°', minMax: '38°', icon: 'fa-moon' },
        { day: 'Wed 12', temperature: '45°', minMax: '38°', icon: 'fa-moon' }
      ])

  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Daily Forecast</div>

                    {  divs.map((entry , index) => { 
                        return (
                        <div key={index} className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                             <p className='w-1/5 text-left'>{entry.day}</p>
                        <span className='w-1/5 text-center text-blue-500'>{entry.temperature}
                        <span className='w-1/5 text-center text-sm text-blue-500'>/{entry.minMax}</span>
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