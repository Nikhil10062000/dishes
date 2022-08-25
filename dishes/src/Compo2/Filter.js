import React from 'react'
import Detail from './Detail'
import Ingre from './Ingre'
import Vegetables from './Vegetables'
import Spices from './Spices'
import Appliance from './Appliance'
const Filter = ({data}) => {
  console.log(data)
  return (
    <div>
      <Detail data={data}/>
      <Ingre/>
      <Vegetables/>
      <Spices/>
      <Appliance/>
    </div>
  )
}

export default Filter
