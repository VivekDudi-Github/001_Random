import React from 'react'

function MiscCards() {
  return (
    <div className='bg-white rounded-md shadow-md shadow-gray-600 p-3flex float-endex-col '>
        <div className=' font-normal text-2xl p-3 mb-2'>Weather Today in New Delhi,Delhi</div>
        <div className=' w-full bg-green-100 flex justidy-between'>
                <div className='p-3 ml-5 ' >
                    <p>Feels Like</p>
                    <p className='text-5xl font-medium '>37°</p>
                </div>
                <div className='p-3 mr-5'>
                05:27
                </div>
         </div>
       
       
       
        <div className='mt-2 flex flex-col p-4'>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                    <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-temperature-half"></i>
                                <span className='pl-2'>High/Low</span>
                    </div>
              
                <div className=' m-2 border-b border-gray-200'>--/31°</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                   <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-wind "></i>
                                <span className='pl-2'>Wind</span>
                   </div>
              
                <div className=' m-2 border-b border-gray-200'>--/31°</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                   <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-droplet "></i>
                                <span className='pl-2'>Humidity</span>
                   </div>
                <div className=' m-2 border-b border-gray-200'>30%</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                   <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-droplet "></i>
                                <span className='pl-2'>Dew Point</span>
                   </div>
                <div className=' m-2 border-b border-gray-200'>16°</div>
            </div>


            <div className='p-2 border-b border-gray-200 flex justify-between'>
                    <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-arrows-to-circle "></i>
                                <span className='pl-2'>Pressure</span>
                    </div>
                <div className=' m-2 border-b border-gray-200'>999.3 mb</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                    <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-arrows-to-eye "></i>
                                 <span className='pl-2'>UV Index</span>
                    </div>
                <div className=' m-2 border-b border-gray-200'>0 of 11</div>
            </div>
            <div className='p-2 border-b border-gray-200 flex justify-between'>
                    <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-eye "></i>
                                 <span className='pl-2'>Visiblity</span>
                    </div>
                <div className=' m-2 border-b border-gray-200'>Unlimited</div>
            </div>

            <div className='p-2 border-b border-gray-200 flex justify-between'>
                    <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-moon "></i>
                                 <span className='pl-2'>Moon Phase</span>
                    </div>
                <div className=' m-2 border-b border-gray-200'>Waning Crescent</div>
            </div>

           
             
             
             
                {/* 
               
                <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-droplet "></i>
                                  <span className='pl-2'>Dew Point</span>
                </div>
                <div className='m-2 border-b border-gray-200'><i className="fa-solid fa-droplet "></i>
                                  <span className='pl-2'>Humidity</span>
                </div> */}



            
        </div>
    </div>
  )
}

export default MiscCards
