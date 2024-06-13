import React from 'react'
import {Container , MainCard ,ForecastCard , MiscCards} from '../../../index'
import DailyForecastCard from '../../cards/today-cards/DailyForcastCard'
import HoursCard from '../../cards/today-cards/HourlyCard'

function Today() {
  return (
    <>
    <Container>
        <div className=' w-full md:m-5  bg-transparent'>
            <MainCard/>
            <ForecastCard/>
            <MiscCards/>   
            <HoursCard/>
            <DailyForecastCard/>
        </div>
        <div className=' hidden sm:block m-5 w-1/3 bg-white'>
          Advertisments  
        </div>
    </Container>
   
  </>
  )
}

export default Today