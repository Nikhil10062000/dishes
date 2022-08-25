import React from "react";
import { IoArrowBack } from "react-icons/io5";
import {Link} from 'react-router-dom'
const Detail = ({ data }) => {
  return (
    <>
    <div>
    <Link to="/">Previous Page</Link>
    </div>
      <div className="icon">
        <IoArrowBack />
      </div>

      <div className="recipie">
        <div>
          <h2>
            Masala Munglai <span className="span-t">4.5</span>
          </h2>
          <p>
            Mughlai Chicken Masala Recipe – Creamy, delicious and easy to
            prepare chicken curry dish.
          </p>
          <hr/>
        </div>
        <div className="vege">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZUcZKAj4d4uQhbTj4ymFcplbrS6o_maO1Q&usqp=CAU'
            alt="logo"
          />
          
        </div>
      </div>
      

    </>
  );
};

export default Detail;
