import React from 'react'

function Container({children}) {
  return (
  <div className=' w-full p-4 bg-gradient-to-b from-sky-700 to-blue-100  flex justify-center'
     >{children}</div>
)
}

export default Container