import React from 'react'
import { IoFastFoodSharp} from "react-icons/io5";
const Fixed = ({count}) => {
  
  return (
    <>
      <h4 className='counter'><IoFastFoodSharp/> {count} food item selected</h4>
    </>
  )
}

export default Fixed
