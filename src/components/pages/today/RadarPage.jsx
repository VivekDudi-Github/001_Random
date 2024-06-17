import React, { useState } from 'react'
import {Container} from "../../../index"
import { useSelector } from 'react-redux'
import SimpleMap from '../../radar/Map'
import Map from "../../radar/Map_tiler"


function RadarPage() {
  const IsLoading = useSelector( state => state.weather.fetching_api)
 const [map_layer , setMap_Layer] = useState("precipitation_new")


 return (
<>
    {/* { IsLoading ? <div role="status" className =" fixed filter-none z-50 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 -scale-150 ">
      <svg aria-hidden="true" className ="w-9 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
  </div> : null } */}

  
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