import React from "react";
import {Link} from 'react-router-dom' ;
function Footer () {
return(
<>
    <div className="  bg-white mt-10 ">
        <div className="flex m-5 flex-wrap flex-col ">

            <div className=" flex flex-row flex-wrap  justify-around mt-9"> 
              <div className="font-bold font-sans text-xl flex flex-wrap mb-7 "> <p> Connect with us </p> </div> 
                <span className="ml-2 mb-2 ">
                <span className="m-1 bg-blue-200 p-2 rounded-l hover:bg-blue-500 hover:text-white duration-200"><i className="fa-brands fa-youtube text-xl"></i></span>
                <span className="m-1 bg-blue-200 p-2 rounded-l hover:bg-blue-500 hover:text-white duration-200"> <i className="fa-brands fa-instagram text-xl "></i></span>
            
                <span className="m-1 bg-blue-200 p-2 rounded-l hover:bg-blue-500 hover:text-white duration-200"><i className="fa-brands fa-facebook text-xl"></i></span>
                <span className="m-1 bg-blue-200 p-2 rounded-l hover:bg-blue-500 hover:text-white duration-200"><i className="fa-brands fa-x-twitter text-xl"></i></span>
             </span> 
             <span className=" flex flex-row ">
                <img className=" ml-2 w-10 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Weather_Company_logo.svg/1200px-The_Weather_Company_logo.svg.png"/>
                <img className="w-8 h-8  ml-2 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Weather_Channel_logo_2005-present.svg/1200px-The_Weather_Channel_logo_2005-present.svg.png" alt="the weather channel" />
                <img className="h-8 ml-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Yze-jt6Es1eaIajLFIXBSAXNfCj5gdFtUQ&s" alt="weather underground" />
             </span>
            </div>
        </div>
     
        <div className=" m-5 mt-14 flex justify-center">
            <Link 
            className=" m-3 text-base hover:text-blue-500"
            to="/">
                    Feedback
            </Link>
            <Link 
            className=" m-3 text-base hover:text-blue-500"
            to="/">
                    Weather API
            </Link>
            <Link 
            className=" m-3 text-base hover:text-blue-500"
            to="/">
                    News Room
            </Link>
        
        </div>

        <div className=" m-4 mt-6 flex justify-center flex-wrap font-s">
        <Link 
            className=" m-3 font-bold hover:text-blue-500 border-r-2 border-black pr-2"
            to="/">
                   Terms of Use
            </Link>
        <Link
           className=" m-2 font-bold hover:text-blue-500 border-r-2 border-black pr-2"
           to="/">
                  Privacy Policy
        </Link>
        <Link
           className=" m-2 font-bold hover:text-blue-500 border-r-2 border-black pr-2"
           to="/">
                  Accessiblity Statement Policy
        </Link> 
         <Link
           className=" m-2 font-bold hover:text-blue-500 border-r-2 border-black pr-2"
           to="/">
                  Data Vendors
        </Link>


        </div>

        <div className=" m-4 mt-10">
            <ul className="flex flex-row 
             justify-center">
                <li>  <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Georgia_peach_logo.svg/225px-Georgia_peach_logo.svg.png" alt="georgia-logo" /></li>
              <Link> <span className=" flex justify-start relative">
                <li className="flex justify-center items-center p-1 bg-blue-300 w-8  rounded-full  absolute top-3 left-2"> <i className="fa-solid fa-wheelchair rounded-md "></i></li>
                {/* <li className="flex justify-center items-center absolute bg-white rounded-full w-4 top-4 left-7 z-10" > <i className="fa-solid fa-greater-than"></i></li> */}
                <li className="flex justify-center items-center p-1 bg-blue-300 w-8 rounded-full  absolute top-3 left-9"> <i className="fa-solid fa-desktop"></i></li>
                </span></Link>
             </ul>
        </div>

        <div className=" m-4 mt-10" >
          <p className="text-center"> We recognise our responsibility to use data and technology for good. We may use or share your <br/>data with our data vendors. Take control of your data. </p>
        </div>
        <div className=" m-4 mt-10 text-center">
           <Link to="/"><span className="font-bold text-center hover:text-blue-500 " >Data Rights</span></Link>  
        </div>
        <div className="text-center font-extralight">
        © The Weather Company, LLC 2024
        </div>
    </div>
</>

)
}
export default Footer
