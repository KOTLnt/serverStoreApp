import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.less";

import Header from "./components/Header";
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";



const App = () => {
    return (
      <div className='App'>
        <Router>
          <Header/>
          <Routes>
            <Route path ="/" element = {<Home/>}></Route>
            <Route path ="login" element = {<Login/>}></Route>
            <Route path ="register" element = {<Register/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
  
  export default App;