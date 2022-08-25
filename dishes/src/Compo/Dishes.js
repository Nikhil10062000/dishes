import React from "react";
import Item from "./Item";
import Load from "./Load";

import Popular from "./Popular";
import Recomended from "./Recomended";
import Time from "./Time";
import Fixed from "./Fixed";
const Dishes = ({popular , data , setCount , count , load}) => {


  return (
    <>
 
      <Time />
      <Item />
      <Popular popular={popular} />
      {load ? <Load /> : <Recomended data={data} setCount={setCount} />}
      <Fixed count={count}/>
      
      
    </>
  );
};

export default Dishes;
