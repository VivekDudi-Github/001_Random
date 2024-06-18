import React, { useState } from 'react'
import {Container} from "../../../index"
import { useSelector } from 'react-redux'
import SimpleMap from '../../radar/Map'


function RadarPage() {
  const IsLoading = useSelector( state => state.weather.fetching_api)
 const [map_layer , setMap_Layer] = useState("precipitation_new")


 return (
<>
  
    <Container>
           <div className=' flex flex-col w-full h-full  '>
           <div className='md:ml-5 m-1 mb-2 h-10 flex flex-wrap '>
              <button className={`ml-1 text-sm  px-1  rounded-sm duration-200 text-white active:scale-90 ${ map_layer == "precipitation_new" ? "bg-black" : "bg-blue-900"} `}
               onClick={()=> {setMap_Layer("precipitation_new")}}><i className=' w-6 fa-solid fa-cloud-showers-heavy'></i></button>
             
               <button className={`ml-1 text-sm  px-1 rounded-sm duration-200 text-white active:scale-90 ${ map_layer == "clouds_new" ? "bg-black" : "bg-blue-900"} `}
               onClick={()=> {setMap_Layer("clouds_new")}}><i className='w-6 fa-solid fa-cloud'></i></button>
             
               <button className={`ml-1 text-sm  px-1  rounded-sm duration-200 text-white active:scale-90 ${ map_layer == "wind_new" ? "bg-black" : "bg-blue-900"} `}
               onClick={()=> {setMap_Layer("wind_new")}}><i className=' w-6 fa-solid fa-wind'></i></button>
             
               <button className={`ml-1 text-sm  px-1 rounded-sm duration-200 text-white active:scale-90 ${ map_layer == "temp_new" ? "bg-black" : "bg-blue-900"} `}
               onClick={()=> {setMap_Layer("temp_new")}}><i className=' w-6 fa-solid fa-temperature-high'></i></button>
              
             
            </div>

                  <div className={` border-gray-500 border-2 rounded-lg md:h-3/4 h-96 w-full m-1 md:mt-1 md:m-5 duration-200 saturate-150 brightness-75 contrast-150  bg-white ${IsLoading? `blur-sm` : "" } ` }>
                  { IsLoading ? <h1>Searching into cordinates</h1>:<SimpleMap map_layer={map_layer} />} 
                
                  </div>
                
            </div>
           
            <div className=' hidden md:block md:ml-5 p-4 ml-3 md:w-1/4 bg-transparent'>
            <img className='p-2 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
            <img className='p-2 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
            <img className='p-2 bg-white rounded-lg mb-4 ' src='https://tpc.googlesyndication.com/simgad/8415435527389080299?'/>
            <img className='p-2 bg-white rounded-lg mb-4' src='https://tpc.googlesyndication.com/simgad/8755113534239921333?'/>
           
            </div>
     </Container>
  

     </>
  )
}

export default RadarPage