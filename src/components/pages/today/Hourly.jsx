import React from 'react'
import {Container , MainCard ,ForecastCard, DailyForecastCard , MiscCards} from '../../../index'

import {Hourly_div} from '../../../index'


function Hourly() {
  return (
    <>
        <Container>
            <div className=' w-full md:m-5  bg-transparent'>
              <Hourly_div/>
            </div>
            <div className=' hidden sm:block md:m-5 ml-3 md:w-1/2 w-4/5 bg-transparent'>
            <img className='p-4 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
            <img className='p-4 bg-white rounded-lg mb-4' src='https://tpc.googlesyndication.com/simgad/8755113534239921333?'/>
            <img className='p-4 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
            <img className='p-4 bg-white rounded-lg mb-4' src='https://tpc.googlesyndication.com/simgad/8755113534239921333?'/>
            </div>
     </Container>
</>
  )
}

export default Hourly