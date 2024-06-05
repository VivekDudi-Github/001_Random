import React from 'react'
import {Container , MainCard ,ForecastCard , MiscCards} from '../../../index'


function Today() {
  return (
    <>
    <Container>
        <div className=' w-full md:m-5  bg-transparent'>
            <MainCard/>
            <ForecastCard/>
            <MiscCards/>
        </div>
        <div className=' hidden md:block m-5 w-1/3 bg-white'>
          Advertisments  
        </div>
    </Container>
   {/* <div className=' bg-black h-screen fixed z-10 w-full'> Abc</div> */}
  </>
  )
}

export default Today