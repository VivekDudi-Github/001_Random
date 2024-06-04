import React from 'react'
import {Container , MainCard ,ForecastCard , MiscCards} from '../../../index'


function Today() {
  return (
    <Container>
        <div className=' w-3/5 m-5 bg-transparent'>
            <MainCard/>
            <ForecastCard/>
            <MiscCards/>
        </div>
        <div className=' m-5 bg-white'>
            ABC
        </div>
    </Container>
  )
}

export default Today