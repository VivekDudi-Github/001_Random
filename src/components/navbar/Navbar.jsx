import React from 'react'

function Navbar() {
    const array = ["Today" , "Hourly" , "10 Day" , "Weekend" , "Monthly" , "Radar" ]
  return (
    <>
          <div className=" bg-cyan-950 w-full text-white flex flex-nowrap justify-around mt-10 ">
                    <ul className=" ml-4 mr-1 w-2/3 flex justify-between flex-nowrap overflow-x-hidden" >
                        {array.map((li) => {
                            return <li key={li}  className=" flex-shrink-0 mr-5 border-b-2 border-cyan-950 p-2 hover:border-white  hover:border-b-2" >{li}</li>
                        })}
                        </ul>
                      <div className="p-2 mr-3">
                        <div className="mr-1 h-full w-full flex flex-auto flex-nowrap"> <p>More Forcast </p>
                        <i className=" ml-1 pt-1 fa-sharp fa-solid fa-caret-down"></i>
                      </div>
                        </div>
          </div>
    </>
  )
}

export default Navbar