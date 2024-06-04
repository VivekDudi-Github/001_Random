import React from 'react'

function Navbar() {
    const array = ["Today" , "Hourly" , "10 Day" , "Weekend" , "Monthly" , "Radar" ]
  return (
    <>
          <div className=" bg-gray-800 w-full p-2 text-white flex flex-nowrap justify-between ">
                    <ul className=" ml-4 mr-1 w-2/3 flex justify-between flex-nowrap overflow-x-hidden" >
                        {array.map((li) => {
                            return <li key={li}  className=" flex-shrink-0 mr-5 h-full  hover:underline" >{li}</li>
                        })}
                        </ul>
                      <div className=" mr-3">
                        <div className="mr-1 h-full w-full hover:underline flex flex-auto flex-nowrap"> <p>More Forcast </p>
                        <i className=" ml-1 fa-sharp fa-solid fa-caret-down"></i>
                      </div>
                        </div>
          </div>
    </>
  )
}

export default Navbar