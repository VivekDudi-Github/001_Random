import React from 'react'

function ForecastCard() {
  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Today's Forecast for Block N, Haryana  </div>
            
        <div className='flex justify-around border-b-2  items-center border-gray-200'> <p className='w-1/5 '> Morning</p>
                 <p className='text-center'> 38° </p>
                <i  className="fa-solid fa-smog text-4xl m-3 inline-block"></i>
            </div>
            <div className='flex justify-around border-b-2 items-center  border-gray-200'> <p className='w-1/5'> AfterNoon  </p> 
                 <p className='text-center'> 41° </p>
                 <i className="fa-solid fa-sun  text-4xl m-3 inline-block "></i>
            </div>
            <div className='flex justify-around border-b-2 items-center  border-gray-200'> <p className='w-1/5' > Evening  </p>
                <p className='text-center'> 36° </p>
                <i className="fa-solid fa-cloud-sun text-4xl m-3 inline-block"></i>
            </div>
            <div className='flex justify-around border-b-2  items-center border-gray-200'> <p className='w-1/5 '> Overnight  </p>
                 <p className='text-center'> 32° </p>
                <i  className="fa-solid fa-moon text-4xl m-3 inline-block"></i>
            </div>

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
    
)
}

export default ForecastCard