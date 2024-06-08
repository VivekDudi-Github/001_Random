import React from 'react'
import "../../App.css"

function Container({children}) {
  return (
  <div className=' w-full p-4 bg-fixed justify-center flex 
   bg-gradient-to-b from-indigo-700 to-white 
     '>{children}</div>
)
}

export default Container