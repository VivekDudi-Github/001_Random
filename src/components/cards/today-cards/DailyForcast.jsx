import React from 'react'

function HoursCard() {
  return (
    <div className=' bg-white mt-3 mb-3 rounded-md p-3  shadow-md shadow-gray-600'>
        <div className='font-medium text-xl mb-2'>Daily Forecast</div>
                        
                <div className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                        <p className='w-1/5 text-left'>Today</p>
                        <span className='w-1/5 text-center text-blue-500'>38°
                        <span className='w-1/5 text-center text-sm text-blue-500'>/38°</span>
                        </span>
                       
                        <i className="fa-solid w-1/5 fa-smog text-4xl m-3 inline-block"></i>
                    </div>
                    <div className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                    <p className='w-1/5 text-left'>Sun 09</p>
                        <span className='w-1/5 text-center text-blue-500'>38°
                        <span className='w-1/5 text-center text-sm text-blue-500'>/38°</span>
                        </span>
                        <i className="fa-solid w-1/5 fa-sun text-4xl m-3 inline-block"></i>
                    </div>
                    <div className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                    <p className='w-1/5 text-left'>Mon 10</p>
                        <span className='w-1/5 text-center text-blue-500'>38°
                        <span className='w-1/5 text-center text-sm text-blue-500'>/38°</span>
                        </span>
                        <i className="fa-solid w-1/5 fa-cloud-sun text-4xl m-3 inline-block"></i>
                    </div>
                    <div className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                    <p className='w-1/5 text-left'>Tue 11</p>
                        <span className='w-1/5 text-center text-blue-500'>38°
                        <span className='w-1/5 text-center text-sm text-blue-500'>/38°</span>
                        </span>
                        <i className="fa-solid w-1/5 fa-moon text-4xl m-3 inline-block"></i>
                    </div>
                    <div className='flex justify-around border-b-2 text-xl items-center border-gray-200'>
                    <p className='w-1/5 text-left'>Wed 12</p>
                        <span className='w-1/5 text-center text-blue-500'>38°
                        <span className='w-1/5 text-center text-sm text-blue-500'>/38°</span>
                        </span>
                        <i className="fa-solid w-1/5 fa-moon text-4xl m-3 inline-block"></i>
                    </div>

            <button className=' mt-1 rounded-full bg-blue-600 text-white hover:shadow-sm p-2'> Next 48 Hours</button>
    </div>
  )
}

export default HoursCard