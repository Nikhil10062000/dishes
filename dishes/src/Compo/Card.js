import React, { useState } from 'react'
import { BiCheckboxMinus } from "react-icons/bi";
const Card = ({card , setCount}) => {
   const handleCount=()=>{
    setCount(count => count + 1)
   }
  const [elem] = useState(card.equipments)
 
  return (
    <div className='flex-container'>


      <div className='contain'>


       <h5>{card.name} <BiCheckboxMinus/><span className='span'>{card.rating}</span></h5>
       <br/>
       <div className='flex-equi'>

        <div className='equipments '>
          {
            elem.map((equipments , id)=>{
              return (
                <p key={id}>{equipments}</p>
              )
            })
          }
        </div>
        <div className='ingre'>
          <p>Ingredients</p>
          <br/>
          <span>view list</span>
        </div>
        <p className='des'>{card.description}</p>
       </div>
       
      </div>


      <div className='picture'>
      <img   src={card.image} alt='images'/>
      <button className='yellow' onClick={handleCount }  >Add</button>
      </div>
      <hr/>
    </div>
  )
}

export default Card
