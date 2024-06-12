import React from 'react'
import { useSelector } from 'react-redux'


function MiscCards() {
    const status = useSelector ( state => state.weather.status)
    const weatherData = useSelector (state => state.weather.weatherData)
    

  return (
    <div className='bg-white  rounded-md shadow-md shadow-gray-600 p-3flex float-endex-col '>
       
        <div className=' font-normal text-2xl p-3 mb-2'>Weather Today in New Delhi,Delhi</div>
       
        <div className=' w-full bg-green-100 flex p-3 justify-between'>
                <div className='p-3 ml-5 ' >
                    <p>Feels Like</p>
                    <p className='text-5xl font-medium '>37°</p>
                </div>
                <div className='p-3 ml-5 ' >
                    <p className='text-right text-ms'>Sunrise-Sunset</p>
                    <p className='text-4xl text-right font-bold'>05:22 - 19:16</p>
                </div>
         </div>
       
       
       
        <div className='mt-2 flex md:flex-row md:flex-wrap flex-col flex-wrap p-5 duration-500'>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                    <div className='m-2 '><i className="fa-solid fa-temperature-half"></i>
                                <span className='pl-2'>High/Low</span>
                    </div>
                <div className=' m-2 '>--/31°</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                   <div className='m-2'><i className="fa-solid fa-wind "></i>
                                <span className='pl-2'>Wind</span>
                   </div>
                <div className=' m-2 '>--/31°</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                   <div className='m-2 '><i className="fa-solid fa-droplet "></i>
                                <span className='pl-2'>Humidity</span>
                   </div>
                <div className=' m-2 '>30%</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                   <div className='m-2'><i className="fa-solid fa-droplet "></i>
                                <span className='pl-2'>Dew Point</span>
                   </div>
                <div className=' m-2 '>16°</div>
            </div>

            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                    <div className='m-2'><i className="fa-solid fa-arrows-to-circle "></i>
                                <span className='pl-2'>Pressure</span>
                    </div>
                <div className=' m-2 '>999.3 mb</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                    <div className='m-2 '><i className="fa-solid fa-arrows-to-eye "></i>
                                 <span className='pl-2'>UV Index</span>
                    </div>
                <div className=' m-2 '>0 of 11</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                    <div className='m-2 '><i className="fa-solid fa-eye "></i>
                                 <span className='pl-2'>Visiblity</span>
                    </div>
                <div className=' m-2 '>Unlimited</div>
            </div>

            <div className='p-2 border-b border-gray-200 flex justify-between md:w-1/2'>
                    <div className='m-2 '><i className="fa-solid fa-moon "></i>
                                 <span className='pl-2'>Moon Phase</span>
                    </div>
                <div className=' m-2 '>Waning Crescent</div>
            </div>

           
           
        </div>
    </div>
  )
}

export default MiscCards