import React from 'react'
import "../../App.css"

function Container({children}) {
  return (
    <>

  <div className=' w-full p-4 bg-fixed mb-4 
   bg-gradient-to-b from-sky-700 to-white 
     '>
      <div><img className="m-auto " src='https://tpc.googlesyndication.com/simgad/8419533411674054302?'/></div>
       
        <div className='flex justify-center'>
        <div className=' mt-5 w-full md:w-4/5 justify-center  flex '>
        {children}
        </div>
        
        </div>
        <div className='mb-2'><img className="m-auto mb-2 " src='https://tpc.googlesyndication.com/simgad/16976467008264335877?'/></div>
     </div>
     
   </>
)
}

export default Container