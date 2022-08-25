import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dishes from "./Compo/Dishes";
import Filter from "./Compo2/Filter";
const App = () => {
  // importing and using useState from react for state managment
  const [data, setData] = useState(); // for recommended dishes
  const [popular, setPopular] = useState(); //  for popular dishes
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState(0);

  //  fetching api from server
  // using async function  for asyncronous operation handling as its
  const getMenu = async () => {
    const url =
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";

    const response = await fetch(url);
    const datas = await response.json();

    setPopular(datas.popularDishes); // data is set for popular dishes
    setData(datas.dishes); // data is set for recommended dishes
    setLoad(false);
  };
  // using useEffect for side effect , load the data on while rendering the dom
  useEffect(() => {
    // calling the function which we have to render while first load of DOM
    getMenu();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Dishes
              data={data}
              popular={popular}
              load={load}
              count={count}
              setCount={setCount}
            />
          }
        />
        <Route path="about" element={<Filter  data={data}/>} />
      </Routes>
    </>
  );
};

export default App;
