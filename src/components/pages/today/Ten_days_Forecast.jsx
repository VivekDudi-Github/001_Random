import React from 'react'
import Container from '../../container/Container'
import {Ten_Days_Forecast_card , Hourly} from "../../../index"

function Ten_Days_Forecast() {
  return (
    <>
    <Container>
        <div className=' w-full md:m-1  bg-transparent'>
            <Ten_Days_Forecast_card/>
        </div>
        <div className=' hidden sm:block md:m-5 ml-3 md:w-1/2 w-4/5 bg-transparent'>
          <img className='p-4 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
          <img className='p-4 bg-white rounded-lg mb-4' src='https://tpc.googlesyndication.com/simgad/8755113534239921333?'/>
          <img className='p-4 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
        </div>
    </Container>
   
    </>
  )
}

export default Ten_Days_Forecast