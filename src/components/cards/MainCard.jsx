import React from 'react'

function MainCard() {
  return (
    <div className=' flex flex-col rounded-md bg-white overflow-hidden text-white font-bold shadow-md shadow-gray-600'>
        <div className=' bg-slate-800 p-2'>
            <p>Block C, Uttar Pradesh</p> 
            <p className= 'font-sans font-normal text-xs'>As of 12:35 IST</p>
        </div>

        <div className='p-4 bg-gradient-to-b from-purple-200 to-purple-900 duration-200'>
            <div className='w-full  flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='  text-6xl md:text-8xl'>42°</p>
                    <p className=' md:text-3xl'>Widespread Dust</p>
                </div>
           
            <div>
                 <i  className="fa-solid duration-200 fa-smog text-6xl md:text-8xl m-3"></i>
            </div>
            </div>
            <div className=' text-left '> Day 43° • Night 32°</div>
        </div>
        
    </div>
  )
}

export default MainCard