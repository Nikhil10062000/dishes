import React from 'react'
import {Link} from 'react-router-dom'
import { IoArrowBackOutline , IoCalendarNumberOutline  , IoAlarm} from "react-icons/io5";
const Time = () => {
    const date= new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
  return (
    <>
    <div>
    <Link to="/about">Next Page</Link>
    </div>
       <div className='dishes'>
        <IoArrowBackOutline className='arrow'/> <h3> Select Dishes</h3>
        
      </div>


      <div className='block' >
        <div className='black'>
        </div>
        <div className='date'>
             <h4 className='local'> <span><IoCalendarNumberOutline/></span> :{date} </h4>
             <h4 className='local-t'> <span><IoAlarm/></span>:{time}</h4>
        </div>
      </div>
    </>
  )
}

export default Time
