import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const array = [
      { text: "Today", navLink: "/" },
      { text: "Hourly", navLink: "/hourly" },
      { text: "10 Day", navLink: "/10-day" }, 
      { text: "Weekend", navLink: "/weekend" },
      { text: "Monthly", navLink: "/monthly" },
      { text: "Radar", navLink: "/radar" }
    ];

  return (
    <>
          <div className=" bg-cyan-950 w-full text-white flex flex-nowrap justify-around mt-10 ">
                    <ul className=" ml-4 mr-1 w-2/3 flex justify-between flex-nowrap overflow-hidden " >
                        {array.map((li) => {
                            return (
                              <NavLink key={li.text} to={li.navLink} className={({isActive}) => ` flex-shrink-0 mr-5  border-b-2 ${isActive? "border-white" : " border-cyan-950 " } p-2 hover:border-white  hover:border-b-2` }>
                              <li key={li.text} className=""  >{li.text}</li> 
                              </NavLink>)
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