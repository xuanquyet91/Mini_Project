import React from "react";
// import reactDom from "react-dom";
// import Slider from "react-slick";
import {Routes,Route, Router} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import style from "./css/main.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Todolist from "./components/Todolist";
import RandomQuote from "./components/RandomQuote";


function App() {

  return (
    <div className="App">
      <>
      <Header></Header>
      <Routes>
        <Route path="/Calculator" element={<Calculator />} /> 
        <Route path="/Todolist" element={<Todolist />} /> 
        <Route path="/RandomQuote" element={<RandomQuote />} /> 
      </Routes>

      </>
    </div>
  );
}

export default App;
