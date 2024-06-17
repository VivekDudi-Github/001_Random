import React, {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {Toggle_Celcius , Toggle_Farenheit} from "../../store/WeatherSlice"


function Toggle_btn() {

    const ISFaren = useSelector(state => state.weather.IsFarenheit)
    const [isChecked, setIsChecked] = useState(ISFaren)
  
    const dispatch = useDispatch()

    const handleCheckboxChange = () => {
    isChecked ? dispatch((Toggle_Celcius())) : dispatch(Toggle_Farenheit())
    setIsChecked(!isChecked)
}

  return (
    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none duration-200 items-center'>
    <input
      type='checkbox'
      checked={isChecked}
      onChange={()=> {handleCheckboxChange()}}
      className='sr-only'
    />
    <span className='label flex items-center text-lg font-medium text-white'>
      C°
    </span>
    <span
      className={`slider mx-2 flex h-4 w-[60px] items-center rounded-full p-1 duration-200 
        ${ isChecked ? 'bg-[#CCCCCE]' : 'bg-[#212b36]'}
      `}
    >
      <span
        className={`dot h-2 w-6 rounded-full bg-white duration-200 
          ${ isChecked ? 'translate-x-[28px]' : '' }
        `}
      ></span>
    </span>
    <span className='label flex items-center text-lg font-medium text-white'>
      F°
    </span>
</label>
  )
}

export default Toggle_btn