import React, { useState } from "react";

const Item = () => {
  const arr = ["Italian ", "Indian ", "Italian ", "Indian "];
  const [items] = useState(arr);
  return (
    <div className="wrapper">
      {items.map((item, id) => {
        return (
          <button className='button' key={id}>
            {item} 
          </button>
        );
      })}
      
    </div>
  );
};

export default Item;
