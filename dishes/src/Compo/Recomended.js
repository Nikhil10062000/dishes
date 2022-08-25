import React from "react";
import Card from "./Card";
const Recomended = ({ data, setCount }) => {
  return (
    <>
      <div className="list">

        <div className="recomm">
          <h4>Recommended</h4>
          <button>Menu</button>
        </div>
        
        <div>
          {data.map((card, id) => {
          return <Card card={card} setCount={setCount} key={id} />;
        })}
        </div>
        
      </div>
    </>
  );
};

export default Recomended;
